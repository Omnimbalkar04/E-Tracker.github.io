import { useState } from "react";
import {
  Bars,
  Nav,
  NavLink,
  NavMenu,
  Logo,
  NavBtn,
  NavBtnLink,
  Sidebar,
  SidebarLink,
  SidebarClose,

} from "./headerElement";
import { Box, Tooltip } from "@mui/material";


const Header = () => {

  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <Box>
      <Box>
        <Nav>
          <Logo to="/">
            <span style={{ color: "#00e558" }}>E</span>-Track
          </Logo>
          <Bars onClick={toggleSidebar}/>
          <NavMenu>
            <Tooltip title="Dashboard">
              <NavLink to="/E-Tracker.github.io/">Dashboard</NavLink>
            </Tooltip>
            <Tooltip title="Expense">
              <NavLink to="/expense">Expense</NavLink>
            </Tooltip>
            <Tooltip title="Add-Expense">
              <NavLink to="/add-expense">Add-Expense</NavLink>
            </Tooltip>
            <Tooltip title="Profile">
              <NavLink to="/profile">Profile</NavLink>
            </Tooltip>
          </NavMenu>

          <NavBtn>
            <Tooltip title="Login">
              <NavBtnLink to="/login">Login</NavBtnLink>
            </Tooltip>
            <Tooltip title="Signup">
              <NavBtnLink to="/signup">Signup</NavBtnLink>
            </Tooltip>
          </NavBtn>
        </Nav>
      </Box>

      <Sidebar isOpen={sidebar}>
        <SidebarClose onClick={toggleSidebar}>&times;</SidebarClose>
        <SidebarLink to="/signup" onClick={toggleSidebar}> {" "} Signup </SidebarLink>
        <hr width="100% " />
        <SidebarLink to="/login" onClick={toggleSidebar}> Login </SidebarLink>
        <hr width="100% " />
        <SidebarLink to="/buget" onClick={toggleSidebar}> SetBuget </SidebarLink>
      </Sidebar>

    
    </Box>
  );
};

export default Header;
