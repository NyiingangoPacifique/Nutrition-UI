import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getUserMeOrganization,getAllUser } from '../../features/auth/authSlice';
import { getUserMessageContent,createChat,resetChat } from '../../features/Chat/chatSlice';
import { format } from 'date-fns';
import { VscOrganization } from 'react-icons/vsc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChatDiet() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [chatDat, setChatDat] = useState("");
  const userOrganization = useSelector((state) => state.auths.userOrganization);
  const userAll = useSelector((state) => state.auths.allUsers);
  const userMessages = useSelector((state) => state.chats.userMessages);

  const userID= userOrganization?.id;
  console.log("***********One User",userID);
  console.log("***********All User",userAll);

// Filter the userAll array
const filteredUsers = userAll.filter(user => {
  return user.patient_conversations.some(conversation => conversation.doctor === userID);
});

console.log("(((((((())))))))",filteredUsers);

// const filteredConversations = userAll.reduce((result, user) => {
//   user.patient_conversations.forEach(conversation => {
//     if (conversation.doctor === userID) {
//       result.push(conversation.id);
//     }
//   });
//   return result;
// }, []);

// console.log("(((((((())))))))",filteredConversations);

  useEffect(() => {
    dispatch(getUserMessageContent());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserMessageContent(selectedConversation));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserMeOrganization());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSend = () => {
    if (inputText.trim() === "") {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: userOrganization.id,
      content: inputText,
      created_at: new Date().toISOString(),
      conversation_id: selectedConversation,

    };

    const updatedChatData = [...chatDat, newMessage];
    setInputText("");
    setChatDat(updatedChatData);
    dispatch(createChat(newMessage));
    dispatch(getUserMessageContent(selectedConversation))
    toast.success("Message sent successfully!");
  };
  const handleConversationClick = (conversationId) => {
    setSelectedConversation(conversationId);
    dispatch(getUserMessageContent(conversationId));
  };

  const handleApt = () => {
    navigate('/diet');
  }

  function getUsername(userID) {
    const patient = userAll.find((user) => user.id === userID);
    return patient ? patient.first_name : ''; // Return the doctor's first name or an empty string if not found
  }

  return (
    <>
      <ToastContainer />
        {filteredUsers.length > 0 ? (
          filteredUsers[0].patient_conversations.length > 0 ? (
              <div className="flex flex-row h-screen">
                <div className="flex flex-col w-1/4 bg-gray-100 p-4 overflow-y-auto border-r">
                {filteredUsers.length > 0 && filteredUsers[0].patient_conversations.length > 0 ? (
                  filteredUsers[0].patient_conversations.map((conversation) => (
                        <div
                          key={conversation.id}
                          className={`cursor-pointer p-2 ${
                            selectedConversation === conversation.id ? "bg-gray-200" : ""
                          }`}
                          onClick={() => handleConversationClick(conversation.id)}
                        >
                          Conversation with {getUsername(conversation.patient)}
                        </div>
                      ))
                      ) : (
                        <></>
                      )}
                </div>
                {selectedConversation && userOrganization && (
                  <div className="flex flex-col flex-grow bg-white shadow-xl rounded-lg p-4">
                    <div className="flex-grow overflow-y-auto">
                      {userMessages.map((message) => (
                        <div
                        key={message.id}
                        className={`flex w-full mb-4 ${
                          message.sender === userOrganization.id
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`rounded-lg p-2 ${
                            message.sender === userOrganization.id
                              ? "bg-stone-100 text-black self-end"
                              : "bg-gray-300 text-black self-start"
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
              <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                <p class="text-xl font-semibold pb-5">Inbox</p>
                <p class="pb-2">You'll be able to send messages to  NATURAL REMEDIES care after you've been assigned to a case </p>
                <a onClick={handleApt}
                    class="w-full bg-gray-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                    Start your first visit
                </a>
              </div>
            )
          ) : (
            <div className="p-2">
              No chat available. Please request an appointment.
            </div>
          )}
      
    </>
  );
}

export default ChatDiet;
