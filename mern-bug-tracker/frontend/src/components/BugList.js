// frontend/src/components/BugList.js
import React from 'react';

function BugList({ bugs, fetchBugs }) {
  const updateBugStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/bugs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
      headers: { 'Content-Type': 'application/json' },
    });
    fetchBugs();
  };

  const deleteBug = async (id) => {
    await fetch(`http://localhost:5000/api/bugs/${id}`, { method: 'DELETE' });
    fetchBugs();
  };

  return (
    <div>
      <h2>Bugs List</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id}>
            <span>{bug.title} - {bug.status}</span>
            <div>
              <button onClick={() => updateBugStatus(bug._id, 'resolved')}>
                Mark as Resolved
              </button>
              <button onClick={() => deleteBug(bug._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;
