// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import BugList from './components/BugList';
import BugForm from './components/BugForm';
import './App.css'; // Import the main CSS file

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    const response = await fetch('http://localhost:5000/api/bugs');
    const data = await response.json();
    setBugs(data);
  };

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <BugForm fetchBugs={fetchBugs} />
      <BugList bugs={bugs} fetchBugs={fetchBugs} />
    </div>
  );
}

export default App;
