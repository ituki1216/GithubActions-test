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
