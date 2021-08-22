import React, { useContext } from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import context from "./Context";
import User from "./User";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavBar({ themeToggler, theme }) {
  const { cartCount } = useContext(context);
  return (
    <NavContainer>
      <Nav>
        <Link to="/">
          <SpanBrand>SkinHub</SpanBrand>
        </Link>
        <List>
          <li>
            <Link to="/productos/todo">Productos</Link>
          </li>
          <li>
            <span onClick={themeToggler}>
              {theme === "light" ? <FaMoon /> : <FiSun />}
            </span>
          </li>
          <li>
            <User />
          </li>
          <li>
            <Link to="/cart">
              <CartWidget /> {cartCount > 0 ? <p>{cartCount}</p> : <></>}
            </Link>
          </li>
        </List>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.background};
  transition: all 0.5s ease;
  border-bottom: 1px solid #a8a8a8;
  -webkit-box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.24);
`;

const Nav = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1200px;
  align-items: center;
  height: 70px;
  padding: 0 40px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
    transition: all 0.5s ease;
    display: flex;
  }
  span {
    svg {
      color: ${(props) => props.theme.svg};
      transition: all 0.5s ease;
    }
  }
`;

const SpanBrand = styled.span`
  /* display: block; */
  font-size: 30px;
  font-family: "Noto Sans HK", sans-serif;
  font-weight: 700;
`;

const List = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin: 0 25px;
    list-style: none;
    color: #000000;
    font-size: 22px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #7f8c8d20;
      border-radius: 8px;
    }
    &:last-child {
      font-size: 32px;
    }
  }
`;
