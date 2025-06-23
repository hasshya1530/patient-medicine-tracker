import React, { useState } from 'react';

function Appointment() {
  const [form, setForm] = useState({ doctor: '', date: '', time: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('appointment', JSON.stringify(form));
    alert("Appointment booked!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <select name="doctor" onChange={handleChange} required>
        <option value="">Select Doctor</option>
        <option value="Dr. Smith">Dr. Pratibha</option>
        <option value="Dr. Jane">Dr. Jenifer</option>
      </select>
      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time" onChange={handleChange} required />
      <button type="submit">Book</button>
    </form>
  );
}

export default Appointment;
