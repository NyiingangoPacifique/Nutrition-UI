import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getUserMeOrganization } from '../../features/auth/authSlice';
import { getUserMessageContent,createChat,resetChat } from '../../features/Chat/chatSlice';
import { format } from 'date-fns';
import { VscOrganization } from 'react-icons/vsc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Chat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [chatDat, setChatDat] = useState("");
  const userOrganization = useSelector((state) => state.auths.userOrganization);
  const userMessages = useSelector((state) => state.chats.userMessages);

  useEffect(() => {
    dispatch(getUserMessageContent()); // Fetch chat data using the Redux slice function
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserMessageContent(selectedConversation)); // Fetch chat data using the Redux slice function
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserMeOrganization());
  }, [dispatch]);

  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSend = () => {
    if (inputText.trim() === "") {
      return; // Don't send empty messages
    }

    const newMessage = {
      id: Date.now(), // You should generate a unique ID here
      sender: userOrganization.id, // Assuming sender ID is 2
      content: inputText,
      created_at: new Date().toISOString(),
      conversation_id: selectedConversation,

    };

    const updatedChatData = [...chatDat, newMessage]; // Update the chat data with the new message
    console.log("ddddddddddddddddddd",newMessage)
    setInputText(""); // Clear the input field
    setChatDat(updatedChatData); // Update the chatData state with the new message
    dispatch(createChat(newMessage));
    dispatch(getUserMessageContent(selectedConversation))
    toast.success("Message sent successfully!");
  };
  const handleConversationClick = (conversationId) => {
    console.log("!!!!!!!!!!!!!!conversationId",conversationId)
    setSelectedConversation(conversationId);
    console.log("%%%selected convo",selectedConversation)
    dispatch(getUserMessageContent(conversationId)); // Fetch messages for the selected conversation
  };

  const handleApt = () => {
    navigate('/survey');
  }

  return (
    <>
      <ToastContainer />
      {userOrganization ? (
            userOrganization.patient_conversations.length > 0 ? (
              <div className="flex flex-row h-screen">
                <div className="flex flex-col w-1/4 bg-gray-100 p-4 overflow-y-auto border-r">
                  {/* Render chat conversations if userOrganization is not null */}
                  {userOrganization.patient_conversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          className={`cursor-pointer p-2 ${
                            selectedConversation === conversation.id ? "bg-gray-200" : ""
                          }`}
                          onClick={() => handleConversationClick(conversation.id)}
                        >
                          {conversation.id}
                        </div>
                      ))}
                </div>

                {/* Conditionally render the message display section */}
                {selectedConversation && userOrganization && (
                  <div className="flex flex-col flex-grow bg-white shadow-xl rounded-lg p-4">
                    <div className="flex-grow overflow-y-auto">
                      {userMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex w-full mb-4 ${
                            message.sender === 2 ? "ml-auto justify-end" : ""
                          }`}
                        >
                          <div
                            className={`bg-gray-200 rounded-lg p-2 ${
                              message.sender === 2 ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                            }`}
                          >
                            <p className="mb-1">{message.content}</p>
                            <p className="text-xs text-gray-500">
                              {format(new Date(message.created_at), "MMM dd, yyyy - HH:mm")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-300 p-4 mt-4">
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
                )}
              </div>
            ) : (
              // Display message when user has no conversations
              <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                <p class="text-xl font-semibold pb-5">Inbox</p>
                <p class="pb-2">You'll be able to send messages to  NATURAL REMEDIES care after you've completed your first visit </p>
                <a onClick={handleApt}
                    class="w-full bg-gray-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                    Start your first visit
                </a>
              </div>
            )
          ) : (
            // Display message when userOrganization is null
            <div className="p-2">
              No chat available. Please request an appointment.
            </div>
          )}
      
    </>
  );
}

export default Chat;
