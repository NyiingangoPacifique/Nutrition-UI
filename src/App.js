import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Home from "./component/home/Home";
import NotFound from "./component/404Page";
import Signup from "./component/auth/Signup";
import AdminDashboard from "./component/home/AdminDashboard";
import Chat from "./component/Chat";
import Survey from "./component/Survey"
import AddAppointment from "./component/appointment/AddApointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/addapt" element={<AddAppointment />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;