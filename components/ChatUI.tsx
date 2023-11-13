import React from 'react';

const ChatUI = () => {
  return (
    <div className="flex h-screen bg-blue-50">
      <div className="w-1/4 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-500">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>Home</li>
            <li>Settings</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="w-3/4">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-blue-500">ChatGPT</h2>
            <input type="text" placeholder="Search..." className="border rounded-md p-2" />
          </div>
          <div className="mt-6 bg-white shadow-lg rounded-md p-6">
            <div className="space-y-4">
              {/* Replace this with actual chat messages */}
              <p>User: Hello</p>
              <p>AI: Hi there! How can I assist you today?</p>
            </div>
            <div className="mt-6">
              <input type="text" placeholder="Type a message..." className="w-full border rounded-md p-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;