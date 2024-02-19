// components/RollNumberInput.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function RollNumberInput({ setRollNumber }) {
  const [inputRollNumber, setInputRollNumber] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setInputRollNumber(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRollNumber.match(/^2127\d{9}$/)) {
      setError('Please enter a valid 13-digit roll number starting with 2127.');
    } else {
      setRollNumber(inputRollNumber);
      history.push('/dashboard');
    }
  };

  return (
    <div className="container">
      <h2>Enter Roll Number</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputRollNumber} onChange={handleChange} placeholder="Enter 13-digit roll number" />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RollNumberInput;
