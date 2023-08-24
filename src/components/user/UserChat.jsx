import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const UserChat = () => {
    
    const { doctorId } = useParams();
    const [userId,setUser]=useState('')

    const messages = [

        { content: "Hi there!", sender: "user" },
        { content: "Hello!", sender: "doctor" },
        { content: "How can I help you?", sender: "doctor" },
        { content: "I have a question.", sender: "user" },
    ];

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-grow overflow-y-auto px-4 py-8">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`rounded-lg p-2 max-w-xs ${message.sender === 'user' ? 'bg-green-300 text-white' : 'bg-white text-gray-800'}`}
                        >
                            {message.content}{doctorId}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white p-4 border-t">
                <input
                    className="border rounded p-2 w-full"
                    type="text"
                    placeholder="Type your message..."
                />
            </div>
        </div>
    );
};


