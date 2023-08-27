import React, { useState } from "react";

function Chat() {
    const [messages, setMessages] = useState([
        {
          text: "Hello welcome to our platform. How can we assist you?",
          isUser: false,
          timestamp: "10:00 AM"
        }
      ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        text: inputText,
        isUser: true, // Indicates whether the message is from the user or the platform
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex w-full mt-2 space-x-3 max-w-xs ${
                  message.isUser ? "ml-auto justify-end" : ""
                }`}
              >
                {!message.isUser && (
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                )}
                <div
                  className={`${
                    message.isUser
                      ? "bg-blue-600 text-white rounded-l-lg rounded-br-lg"
                      : "bg-gray-300 rounded-r-lg rounded-bl-lg"
                  } p-3`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.isUser && (
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-300 p-4">
            <div className="flex items-center">
              <input
                className="flex-grow h-10 rounded px-3 text-sm"
                type="text"
                placeholder="Type your message…"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                className="ml-2 bg-blue-600 text-white rounded px-4 py-2"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
