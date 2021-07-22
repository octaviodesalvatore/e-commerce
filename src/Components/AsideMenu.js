import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

//Para esta entrega esta solo funcionando el filtro de categorias
// Que es lo que se pedia para la entrega, pero la idea
// es que para la entrega final, poder hacer funcionar
// todos los demas filtros de manera conjunta.
function AsideMenu() {
  return (
    <StyledDiv>
      <div>
        <ul>
          <li>
            <h5>Categorías</h5>
          </li>
          <li>
            <Link to="/categoria/knife">Cuchillos</Link>
          </li>
          <li>
            <Link to="/categoria/awp">AWP</Link>
          </li>
          <li>
            <Link to="/categoria/rifle">Rifles</Link>
          </li>
          <li>
            <Link to="/categoria/pistols">Pistolas</Link>
          </li>
        </ul>

        <h5>Rango</h5>
        <MaxMinDiv>
          <input type="text" placeholder="Mínimo" />
          <input type="text" placeholder="Máximo" />
          <BsArrowRightShort />
        </MaxMinDiv>
      </div>

      <ul>
        <li>
          <h5>Condicion del Skin</h5>
        </li>
        <li>
          <p>Recien fabricado</p>
        </li>
        <li>
          <p>Casi nuevo</p>
        </li>
        <li>
          <p>Algo desgastado</p>
        </li>
        <li>
          <p>Deplorable</p>
        </li>
      </ul>
    </StyledDiv>
  );
}

export default AsideMenu;

const StyledDiv = styled.div`
  align-self: flex-start;
  margin-top: 10px;
  h5 {
    color: #333;
    font-weight: 600;
    font-size: 16px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      margin: 0;
      padding: 0;
      display: block;
      text-decoration: none;
      color: #666;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    p {
      cursor: pointer;
      color: #666;
      font-size: 14px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;

      &:hover {
        /* border-bottom: 1px solid grey; */
        /* display: inline; */
      }
    }
  }
`;
const MaxMinDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  input {
    border: 1px solid #999;
    border-radius: 4px;
    font-size: 13px;
    height: 25px;
    padding: 0 4px;
    text-align: left;
    width: 67px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    &:focus {
      outline: none;
      border: solid 1px #3483fa;
    }
  }

  /* &:nth-child() {
    &::after {
      content: "";
      width: 10px;
      height: 1px;
      background-color: black;
    }
  } */
`;
