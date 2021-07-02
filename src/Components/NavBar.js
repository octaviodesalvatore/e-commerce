import React from "react";
import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";

function NavBar() {
  return (
    <NavContainer>
      <Nav>
        <Span>SkinHub</Span>
        <List>
          <LiItem>Home</LiItem>
          <LiItem>Productos</LiItem>
          <LiItems>
            <GiShoppingCart />
          </LiItems>
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
`;

const Span = styled.span`
  color: white;
  font-size: 22px;
  display: block;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const LiItem = styled.li`
  margin: 0 25px;
  list-style: none;
  color: white;
  font-size: 22px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #7f8c8d20;
    border-radius: 8px;
  }
`;

const LiItems = styled.li`
  font-size: 32px;
  color: white;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background-color: #7f8c8d20;
    border-radius: 8px;
  }
`;
