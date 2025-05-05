import React, { useState } from 'react';

function HomeForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    category: '',
    difficulty: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.difficulty) {
      alert('All fields are required.');
      return;
    }
    onSubmit(form); // 🔥 this triggers the fetch logic in App.jsx
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome to the Trivia Quiz</h2>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Category:
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
          <option value="17">Science & Nature</option>
        </select>
      </label>
      <br />
      <label>
        Difficulty:
        <select name="difficulty" value={form.difficulty} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <br />
      <button type="submit">Start Quiz</button>
    </form>
  );
}

export default HomeForm;
