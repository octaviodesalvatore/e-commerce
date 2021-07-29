import React, { useContext } from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import context from "./Context";

import { Link } from "react-router-dom";

function NavBar() {
  const { cartCount } = useContext(context);
  return (
    <NavContainer>
      <Nav>
        <Link to="/">
          <Span>SkinHub</Span>
        </Link>
        <List>
          <li>
            <Link to="/productos">Productos</Link>
          </li>

          <li>
            <Link to="/cart">
              <CartWidget /> {cartCount > 0 ? cartCount : <></>}
            </Link>
          </li>
        </List>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  background-color: #ffffff;
  -webkit-box-shadow: 3px 8px 8px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 3px 8px 8px 0px rgba(0, 0, 0, 0.24);
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
    color: inherit;
  }
`;

const Span = styled.span`
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
