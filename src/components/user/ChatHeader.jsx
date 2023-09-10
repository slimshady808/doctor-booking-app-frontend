import React from "react";

export const ChatHeader = () => {
    // Static data for the chat header
    const chatInfo = {
        username: "John Doe",
        lastSeen: "Online", // You can replace this with a dynamic last seen status
        profilePicUrl: "https://example.com/profile-pic.jpg", // Replace with the actual profile picture URL
    };

    return (
        <div className="bg-white p-4 border-b">
            <div className="flex items-center">
                <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={chatInfo.profilePicUrl}
                    alt={`${chatInfo.username}'s Profile`}
                />
                <div>
                    <p className="text-xl font-semibold">{chatInfo.username}</p>
                    <p className="text-sm text-gray-500">{chatInfo.lastSeen}</p>
                </div>
            </div>
        </div>
    );
};


