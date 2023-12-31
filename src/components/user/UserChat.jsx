import React, { useEffect, useState, useRef } from "react";
import { fetch_user_messages, createMessage } from '../../Services/UserService';
import { getAccessToken } from '../../helpers/auth';
import jwt_decode from 'jwt-decode';
import { useParams } from "react-router-dom";
import { wserver } from "../../server";
import { ChatHeader } from "./ChatHeader";
import {fetchDoctorByUserProfile} from '../../Services/UserService'
import { formatRelativeTime} from '../../utils/timeUtiles'
export const UserChat = () => {
    const [messages, setMessages] = useState([]);
    const [userId, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [messageInput, setMessageInput] = useState('');
    const [socket, setSocket] = useState(null);
    const { user_id, profileId} = useParams();
    const [userData,setUserData]=useState([])
    const[docname,setDocname]=useState('')
    const[docImage,setDocImage]=useState(null)
 
    const messageContainerRef = useRef(null);

    useEffect(()=>{
        const fetchData = async()=>{
            const response =await fetchDoctorByUserProfile(profileId)
            if (response){
                // console.log(response)
                setUserData(response)
                setDocImage(response.doctor_image)
                setDocname(response.doctor_name)
            }
        }
        fetchData()
    },[])

    useEffect(() => {
        const fetchData = async () => {
            const token = getAccessToken();
            const decode = jwt_decode(token);
            const user = decode.user_id;
            setUser(String(user));

            if (user) {
                const data = await fetch_user_messages(profileId, user);

                if (data) {
                    setMessages(data);
                    console.log(data)
                }
            }
            setLoading(false);
        };
        fetchData();

        const roomName = `${user_id}_${profileId}`;
        
        // const newSocket = new WebSocket(`ws://${wserver}/chat/${roomName}/`);
        const newSocket = new WebSocket(`wss://${wserver}/chat/${roomName}/`);
        setSocket(newSocket);

    }, []);

    useEffect(() => {
        if (socket) {
            socket.onopen = () => {
                console.log("websocket connection opened");
            }
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                const message_get = data.message_content;
                console.log(data, 'return message user');
                setMessages((prevMessages) => [...prevMessages, data]);
            };
        }
    }, [socket]);

    useEffect(() => {
        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, [socket]);

    useEffect(() => {
        // Scroll to the bottom of the message container when messages change
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (messageInput.trim() === '') return;

        try {
            const newMessage = {
                sender: user_id,
                receiver: profileId,
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
            console.error('error for sending messages:', error);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
        <ChatHeader name={docname} image={docImage} />

            {/* <div className="flex-grow overflow-y-auto px-4 py-8" ref={messageContainerRef}>
                {loading ? (
                    <p className="text-center text-gray-600">Loading messages...</p>
                ) : (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex mb-4 ${
                                message.sender == userId ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`rounded-lg p-2 max-w-md ${
                                    message.sender == profileId
                                        ? 'bg-green-500 text-white'
                                        : 'bg-blue-500 text-white'
                                }`}
                            >
                                {message.message_content}
                            
                            </div>
                            <div className="text-xs text-gray-400 mt-1 ml-2">
                                {formatRelativeTime(message.timestamp)}
                            </div>
                        </div>
                    ))
                )}
            </div> */}
            <div className="flex-grow overflow-y-auto px-4 py-8" ref={messageContainerRef}>
  {loading ? (
    <p className="text-center text-gray-600">Loading messages...</p>
  ) : (
    messages.map((message, index) => (
      <div
        key={index}
        className={`flex flex-col mb-4 ${
          message.sender == userId ? 'items-end' : 'items-start'
        }`}
      >
        <div
          className={`rounded-lg p-2 max-w-md ${
            message.sender == profileId
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white'
          }`}
        >
          {message.message_content}
        </div>
        <div className="text-xs text-gray-400 mt-1 ml-2">
          {formatRelativeTime(message.timestamp)}
        </div>
      </div>
    ))
  )}
</div>

            <div className="bg-white p-4 border-t flex">
                <input
                    className="border rounded p-2 w-full focus:outline-none"
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

