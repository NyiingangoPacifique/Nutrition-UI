import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Home from "./component/home/Home";
import NotFound from "./component/404Page";
import Signup from "./component/auth/Signup";
import Layout from "./component/patient/Layout";
import Chat from "./component/patient/Chat";
import Schedule from "./component/patient/Schedule";
import Bmi from "./component/patient/Bmi";
import LandingPage from "./component/home/Home";
import Check from "./component/home/Check";
import Sidebar from "./component/patient/Sidebar";
import Meal from "./component/patient/meal/Meal";
import AppointmentAdd from "./component/patient/AddApt";
import Prescription from "./component/patient/prescription/Prescription";
import Patient from "./component/patient/Patient";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="*" element={<Layout />}>
            <Route path="patient" element={<Patient />} />
            <Route path="chat" element={<Chat />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="bmi" element={<Bmi />} />
            <Route path="meal" element={<Meal />} />
            <Route path="prescription" element={<Prescription />} />
            <Route path="survey" element={<AppointmentAdd />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
