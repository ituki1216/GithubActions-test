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
