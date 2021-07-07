import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <NavContainer>
      <Nav>
        <Span>SkinHub</Span>
        <List>
          <li>Home</li>
          <li>Productos</li>
          <li>
            <CartWidget />
          </li>
        </List>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  background-color: #2c3e50;
`;

const Nav = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1200px;
  align-items: center;
  height: 70px;
  padding: 0 40px;
`;

const Span = styled.span`
  color: white;
  font-size: 22px;
  display: block;
`;

const List = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin: 0 25px;
    list-style: none;
    color: white;
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
