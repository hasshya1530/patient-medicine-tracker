import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', age: '', gender: '', contact: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isPasswordValid = (password) => {
    return /[a-zA-Z]/.test(password) && /\d/.test(password) && /[^a-zA-Z0-9]/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordValid(form.password)) {
      alert("Password must be alphanumeric and include a special character.");
      return;
    }
    localStorage.setItem('user', JSON.stringify(form));
    alert("Registered successfully! Please proceed to login.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <input name="age" placeholder="Age" type="number" onChange={handleChange} required />
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input name="contact" placeholder="Contact" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;