import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import appointReducer from "../features/appointment/appointSlice";
import convoReducer from "../features/Conversation/convoSlice";
export const store = configureStore({
  reducer: {
    auths: authReducer, 
    appointments: appointReducer,
    conversations: convoReducer
  },
});