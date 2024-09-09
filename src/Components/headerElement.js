import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #0d1117;
  color: #ffffff;
  height: 45px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((80vw - 1000px) / 2);
  z-index: 12;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);

  position: static;
`;

export const NavLink = styled(Link)`
  color: aliceblue;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
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

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -18px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Sevillana&display=swap");
  color: aliceblue;
  // font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  padding-left: 1rem;
  font-size: 20px;
  font-family: "Sevillana", cursive;

  &:hover {
    color: #ffeba7;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  border-radius: 20px;
  padding: 8px 12px;
  // color: #ffeba7;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &.active {
    background: linear-gradient(100deg, #1a91da, #00e558);
    transition: 0.6s ease-in-out;
    // background: #fff;
    color: aliceblue;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background: #0d1117;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  z-index: 100;
  transition: right 0.6s ease-in-out;
  overflow-y: auto;
  border-radius: 28px;
`;

export const SidebarLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: aliceblue;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  &:hover {
    background: #575757;
    color: #ffeba7;
    transition: 0.6s ease-in-out;
  }
`;

export const SidebarClose = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: aliceblue;
`;


