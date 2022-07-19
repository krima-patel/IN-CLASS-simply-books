import React from 'react';
import User from '../components/User';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <User
        name={user.displayName}
        email={user.email}
        image={user.photoURL}
        lastLogin={user.metadata.lastSignInTime}
      />
      <button type="button" onClick={signOut}>Sign Out</button>
    </div>
  );
}
