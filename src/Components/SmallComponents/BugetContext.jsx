/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const BugetContext = createContext();

export const useBuget = () => {
  return useContext(BugetContext);
}

export const BugetProvider = ({ children }) => {
  const [buget, setBuget] = useState([]);

  return (
    <BugetContext.Provider value={{ buget, setBuget}}>
      {children}
    </BugetContext.Provider>
  )
};

