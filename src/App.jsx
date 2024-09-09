import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import ExpenseList from "./Components/ExpenseList";
import AddExpense from "./Components/AddExpense";
import './App.css'
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { UserProvider } from "./Components/UserContext";
import { ExpenseProvider } from "./Components/ExpenseContext";
import Buget from "./Components/SmallComponents/Buget";
import { BugetProvider } from "./Components/SmallComponents/BugetContext";
import Profile from "./Components/Profile";

function App() {
 

  return (
    <>
    <ExpenseProvider>
    <UserProvider>
      <BugetProvider>
      
     <Router>
      <Header />
      <Routes>
        <Route path="/E-Tracker.github.io/" element={<Dashboard />} />
        <Route path="/expense" element={<ExpenseList />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buget" element={<Buget />} />
      </Routes>
      <Footer />
     </Router>
    
     </BugetProvider>
     </UserProvider>
     </ExpenseProvider>
    </>
  )
}

export default App
