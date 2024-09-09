import { IoHomeSharp } from "react-icons/io5";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: aliceblue;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px 10px;
  height: 100%;
  cursor: pointer;
  font-size: medium;
  border-bottom: 3px solid transparent;

  &.active {
    // background-color: #0d1117;
    color: #00e558;
    transition: 0.6s ease-in-out;
    border-bottom: 3px solid #00e558;
  }
`;


// Bottom Navbar

export const BottomNavWrapper = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    position: fixed;
    border-radius: 20px;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #0d1117;
    
    z-index: 12;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  }
`;

export const BottomNavStyled = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    color: aliceblue;
    border-bottom: 3px solid transparent;
    

    &.active {
      color: #00e558;
      transition: 0.6s ease-in-out;
      border-bottom: 3px solid #00e558;
    }
  }
`;

export const HomeBars = styled(IoHomeSharp)`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    font-size: 25px;
    cursor: pointer;
    color: inherit;
  }
`;
