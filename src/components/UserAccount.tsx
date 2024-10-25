import React, { useState } from 'react';


interface User {
  name: string;
  email: string;
  address: string;
}


interface UserAccountProps {
  user: User;
  onUpdate: (updatedUser: User) => void;
}

const UserAccount: React.FC<UserAccountProps> = ({ user, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);

  
  const handleSave = () => {
    onUpdate({ name, email, address });
    setEditing(false);
  };

   return (
    <div className="user-account">
      <h2>User Account</h2>
      {editing ? (
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Address:
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
