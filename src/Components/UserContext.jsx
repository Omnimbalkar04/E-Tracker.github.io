/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

