import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetch_user_messages, createMessage } from '../../Services/UserService';
import { server, wserver } from '../../server';
import { ChatHeader } from '../user/ChatHeader';
import {fetchUserData} from '../../Services/DoctorService'
export const DoctorChat = () => {
    const { userId, doctorId } = useParams();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [messageInput, setMessageInput] = useState('');
    const [socket, setSocket] = useState(null);
    const messagesContainerRef = useRef(null);
    const [name,setName]=useState('')
    const [img,setImg]=useState(null)



    console.log(userId)

    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetchUserData(userId)
            if (response){
                setName(response.username)
                setImg(response.image_of_user)
                console.log(response)
            }
        }
        fetchData()
    },[])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch_user_messages(doctorId, userId);
            if (data) {
                setMessages(data);
                setLoading(false);
            }
        };
        fetchData();

        const roomName = `${userId}_${doctorId}`;
        // const newSocket = new WebSocket(`ws://${wserver}/chat/${roomName}/`);
        const newSocket = new WebSocket(`wss://${wserver}/chat/${roomName}/`);
        setSocket(newSocket);
    }, [userId]);

    useEffect(() => {
        if (socket) {
            socket.onopen = () => {
                console.log("websocket connection opened");
            };
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                setMessages((prevMessages) => [...prevMessages, data]);
            };
        }
    }, [socket]);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (messageInput.trim() === '') return;
        try {
            const newMessage = {
                sender: doctorId,
                receiver: userId,
                message_content: messageInput,
            };
            const response = await createMessage(newMessage);

            if (response) {
                if (socket) {
                    socket.send(JSON.stringify(newMessage));
                }
                setMessageInput('');
            }
        } catch (error) {
            console.error('error for sending from doc:', error);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
         <ChatHeader name={name} image={img} />
            {/* {userId} {doctorId} */}
            <div className="flex-grow overflow-y-auto px-4 py-8" ref={messagesContainerRef}>
                {loading ? (
                    <p>Loading messages...</p>
                ) : (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex mb-4 ${
                                message.sender == doctorId ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`rounded-lg p-2 max-w-xs ${
                                    message.sender == userId
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
                    onChange={(e) => setMessageInput(e.target.value)}
                />
                <button
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};






















// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import {fetch_user_messages,createMessage} from '../../Services/UserService'
// import { server, wserver } from '../../server';

// export const DoctorChat = () => {
//     const { userId, doctorId } = useParams();
//     const [messages, setMessages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [messageInput, setMessageInput] = useState('');
//     const [socket, setSocket] = useState(null);

//     useEffect(()=>{
//         const fetchData=async()=>{
//             const data = await fetch_user_messages(doctorId,userId);
//             if(data){
//                 setMessages(data)
//                 setLoading(false);
//             }
        

       
//         };
//         fetchData();



//         const roomName = `${userId}_${doctorId}`
//         // const newSocket = new WebSocket(`ws://${wserver}/chat/${roomName}/`);
//         const newSocket = new WebSocket(`wss://${wserver}/chat/${roomName}/`);
//         setSocket(newSocket);
    
//     },[userId])

//     useEffect(() => {
//         if (socket) {
//             socket.onopen = () => {
//                 console.log("websocket connection opened");
//             };
//             socket.onmessage = (event) => {
//                 const data = JSON.parse(event.data)
         
//                 console.log(data,'return message dr')
//                 setMessages((prevMessages) => [...prevMessages, data]);
//             };
//         }
//     }, [socket]);

//     useEffect(() => {
//         return () => {
//             if (socket) {
//                 socket.close();
//             }
//         };
//     }, [socket]);
    
//     const handleSendMessage= async()=>{
//         if (messageInput.trim()==='') return;
//         try{
//             const newMessage={
//                 sender : doctorId,
//                 receiver:userId,
//                 message_content:messageInput,
                
                
//             };
//             const response =await createMessage(newMessage);
           
//             if (response){
//             if(socket){
//                 socket.send(JSON.stringify(newMessage));
//             }
//             // setMessages([...messages,response])
//             setMessageInput('')
//         }
//         }catch(error){
//             console.error('error for sending from doc:',error)
//         }
//     }
//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//     {userId} {doctorId}
//     <div className="flex-grow overflow-y-auto px-4 py-8">
//         {loading ? (
//             <p>Loading messages...</p>
//         ) : (
//             messages.map((message, index) => (
//                 <div
//                     key={index}
//                     className={`flex mb-4 ${
//                         message.sender == doctorId ? 'justify-end' : 'justify-start'
//                     }`}
//                 >
//                     <div
//                         className={`rounded-lg p-2 max-w-xs ${
//                             message.sender == userId
//                                 ? 'bg-green-500 text-white'
//                                 : 'bg-white text-gray-800'
//                         }`}
//                     >
//                         {message.message_content}
//                     </div>
//                 </div>
//             ))
//         )}
//     </div>
//     <div className="bg-white p-4 border-t flex">
//         <input
//             className="border rounded p-2 w-full"
//             type="text"
//             placeholder="Type your message..."
//             value={messageInput}
//             onChange={(e) => setMessageInput(e.target.value)}
//         />
//         <button
//             className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             onClick={handleSendMessage}
//         >
//             Send
//         </button>
//     </div>
// </div>
// );
// }



