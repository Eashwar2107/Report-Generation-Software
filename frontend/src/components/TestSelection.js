// components/TestSelection.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TestSelection({ rollNumber }) {
  const [selectedTest, setSelectedTest] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setSelectedTest(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTest) {
      setError('Please select a test.');
    } else {
      // Redirect to test scores page
    }
  };

  return (
    <div className="container">
      <h2>Select Test</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedTest} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Test1">Test 1</option>
          <option value="Test2">Test 2</option>
          {/* Add more options as needed */}
        </select>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">View Scores</button>
      </form>
    </div>
  );
}

export default TestSelection;
