import React from 'react';
import UserProvider from './UserProvider';
import UserProfile from './UserProfile';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
