import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAccess, getAccessToken } from '../../helpers/auth';
import { fetch_user_messages,createMessage } from '../../Services/UserService';
import jwt_decode from 'jwt-decode';

export const UserChat = () => {
    const [messages, setMessages] = useState([]);
    const [userId, setUser] = useState('');
    const [loading, setLoading] = useState(true); 
    const [messageInput,setImessageInput]=useState('')
    const { doctorId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const token = getAccessToken();
            const decode = jwt_decode(token);
            const user = decode.user_id;
            setUser(user);

            if (user) {
                const data = await fetch_user_messages(doctorId, user);
                if (data) {
                    setMessages(data);
                }
            }

            setLoading(false); 
        };

        fetchData();
    }, [doctorId]);


    const handleDendMessage = async()=>{
        if (messageInput.trim()==='') return

        try{
            const newMessage={
                sender:userId,
                receiver:doctorId,
                message_content:messageInput,
            };
            const response = await createMessage(newMessage);
            if (response){
                setMessages([...messages,response])
                setImessageInput('')
            }
        }catch(error){
            console.error('error for creating messages:',error)
        }
    }



    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-grow overflow-y-auto px-4 py-8">
                {loading ? (
                    <p>Loading messages...</p>
                ) : (
                    messages.map((message) => (
                        <div
                            key={message.message_id}
                            className={`flex mb-4 ${
                                message.sender == userId ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`rounded-lg p-2 max-w-xs ${
                                    message.sender == doctorId
                                        ? 'bg-green-500 text-white'
                                        : 'bg-white text-gray-800'
                                }`}
                            >
                                {message.message_content}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="bg-white p-4 border-t flex">
                <input
                    className="border rounded p-2 w-full"
                    type="text"
                    placeholder="Type your message..."
                    value={messageInput}
                    onChange={(e)=>setImessageInput(e.target.value)}
                />
                <button 
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleDendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};



















// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getAccess, getAccessToken } from '../../helpers/auth';
// import {fetch_user_messages} from '../../Services/UserService'
// import jwt_decode from 'jwt-decode'
// export const UserChat = () => {
//     const [messages,setMessages]=useState([])
//     const { doctorId } = useParams();
//     const [userId,setUser]=useState('')

//     useEffect(()=>{
//         const fetchData= async()=>{
//             const token=getAccessToken()
//             const decode=jwt_decode(token)
//             setUser(decode.user_id)
//         }
//         fetchData()
//     },[])
// console.log(userId,'user')
   

// useEffect(() => {
//     if (userId ) {
//         const fetchData = async () => {
//             console.log('calling')
//             const data = await fetch_user_messages(doctorId,userId);
//             if (data) {
//                 setMessages(data);
//                 console.log('fetched messages are:', data);
//             }
//         };

//         fetchData(); 
//     }
// }, [doctorId]);

// console.log(messages,'res')

    

 

//     return (
//         <div className="flex flex-col h-screen bg-gray-100">
//             <div className="flex-grow overflow-y-auto px-4 py-8">
//                 {messages.map((message, index) => (
//                     <div
//                         key={index}
//                         className={`flex mb-4 ${message.sender === userId ? 'justify-end' : 'justify-start'}`}
//                     >
//                         <div
//                             className={`rounded-lg p-2 max-w-xs ${message.sender === doctorId ? 'bg-green-300 text-white' : 'bg-white text-gray-800'}`}
//                         >
//                             {message.message_content}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="bg-white p-4 border-t">
//                 <input
//                     className="border rounded p-2 w-full"
//                     type="text"
//                     placeholder="Type your message..."
//                 />
//             </div>
//         </div>
//     );
// };


