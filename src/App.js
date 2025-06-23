import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Appointment from './pages/Appointment';
import Prescription from './pages/Prescription';
import './App.css';

function App() {
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const reminder = localStorage.getItem('appointment');
    if (reminder) {
      const appointment = JSON.parse(reminder);
      if (appointment.date === today) {
        alert(`Reminder: You have an appointment today at ${appointment.time} with ${appointment.doctor}`);
      }
    }
  }, []);

  return (
    <Router>
      <div className="header">
        <h1>Patient Appointment & Tracking System</h1>
      </div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/prescription" element={<Prescription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;