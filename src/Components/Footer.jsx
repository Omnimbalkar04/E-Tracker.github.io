import {
  HomeBars,
  BottomNavWrapper,
  BottomNavStyled,
  NavLink,
} from "./footerElement";

import { GiExpense } from "react-icons/gi";
import { FaWallet } from "react-icons/fa6";
import { Box, Tooltip, Typography } from "@mui/material";
import { PiUserCircleFill } from "react-icons/pi";
const Footer = () => {
  return (
    <Box>
      <BottomNavWrapper>
        <BottomNavStyled>
          <Tooltip title="Home">
            <NavLink to="/">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeBars />
                <Typography fontSize="15px">Home</Typography>
              </Box>
            </NavLink>
          </Tooltip>
          <Tooltip title="Expense">
            <NavLink to="/expense">
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              <GiExpense font-size="25px" />
              <Typography fontSize="15px">Expense</Typography>
              </Box>
            </NavLink>
          </Tooltip>
          <Tooltip title="AppExpense">
            <NavLink to="/add-expense">
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              <FaWallet font-size="25px" />
              <Typography fontSize="15px">Add</Typography>
              </Box>
            </NavLink>
          </Tooltip>
          <Tooltip title="Profile">
            <NavLink to="/profile">
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              <PiUserCircleFill font-size="25px" />
              <Typography fontSize="15px">Profile</Typography>
              </Box>
            </NavLink>
          </Tooltip>
        </BottomNavStyled>
      </BottomNavWrapper>
    </Box>
  );
};

export default Footer;
