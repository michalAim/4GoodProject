import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  border-bottom: 1px solid #f0f0f5;
  display: block;
  width: 100%;
  text-align: right;
  margin: auto;
  padding: 0 30px;
  max-width: calc(100% - 60px);
`;

export const NavLogo = styled(Link)`
  width: 120px;
  height: 20 px;
  background: #29323d;
  border: 4px solid #29323d;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-width: 10px;
  text-align:center;
  &:hover {
    color: grey;
  }
`;

export const NavLink = styled(Link)`

direction: rtl;
font-size: 13px;
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:grey;
}
&:hover {
  color: grey;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
padding-left: 10px; 
  display: flex;
  align-items: center; 
border-left: 1px solid #f0f0f5;
font-size: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }

`;



export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
    &:hover {
    color: white;
  }
`;