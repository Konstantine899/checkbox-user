import React, { useState, useEffect } from 'react';
import './App.css';

const userData = [
  { name: 'Jeevan' },
  { name: 'Manish' },
  { name: 'Prince' },
  { name: 'Arti' },
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'AllSelect') {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div className="container my-4" style={{ width: 400 }}>
      <form className="form">
        <h3>Select user</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="AllSelect"
            onChange={handleChange}
            checked={
              users.filter((user) => user?.isChecked !== true).length < 1
            }
          />
          <label className="form-check-label ms-2">All select</label>
        </div>
        {users.map((user) => (
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              onChange={handleChange}
              checked={user?.isChecked || false}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App;
