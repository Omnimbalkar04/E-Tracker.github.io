/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [ecards, setEcard] = useState([]);

  return (
    <ExpenseContext.Provider value={{ ecards, setEcard }}>
      {children}
    </ExpenseContext.Provider>
  );
};
