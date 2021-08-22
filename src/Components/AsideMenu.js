import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

//Para esta entrega esta solo funcionando el filtro de categorias
// Que es lo que se pedia para la entrega, pero la idea
// es que para la entrega final, poder hacer funcionar
// todos los demas filtros de manera conjunta.
function AsideMenu({ changeCondition }) {
  const [active, setActive] = useState("");

  const toggleActive = (condition) => {
    if (condition === active) {
      setActive("");
      changeCondition("");
    } else {
      setActive(condition);
    }
  };

  return (
    <StyledDiv>
      <div>
        <ul>
          <li>
            <h5>Categorías</h5>
          </li>
          <li>
            <Link to="/productos/knife">Cuchillos</Link>
          </li>
          <li>
            <Link to="/productos/awp">AWP</Link>
          </li>
          <li>
            <Link to="/productos/rifle">Rifles</Link>
          </li>
          <li>
            <Link to="/productos/pistols">Pistolas</Link>
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
          <p
            className={active === "factory new" ? "active" : ""}
            onClick={() => {
              changeCondition("factory new");
              toggleActive("factory new");
            }}
          >
            Recien fabricado
          </p>
        </li>
        <li>
          <p
            className={active === "minimal wear" ? "active" : ""}
            onClick={() => {
              changeCondition("minimal wear");
              toggleActive("minimal wear");
            }}
          >
            Casi nuevo
          </p>
        </li>
        <li>
          <p
            className={active === "field tested" ? "active" : ""}
            onClick={() => {
              changeCondition("field tested");
              toggleActive("field tested");
            }}
          >
            Algo desgastado
          </p>
        </li>
        <li>
          <p
            className={active === "well worn" ? "active" : ""}
            onClick={() => {
              changeCondition("well worn");
              toggleActive("well worn");
            }}
          >
            Bastante Desgastado
          </p>
        </li>
        <li>
          <p
            className={active === "battle scarred" ? "active" : ""}
            onClick={() => {
              changeCondition("battle scarred");
              toggleActive("battle scarred");
            }}
          >
            Deplorable
          </p>
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
    margin-bottom: 4px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      display: inline-block;
      text-decoration: none;
      padding: 4px 12px;
      color: #666;
      margin-top: 7px;
      margin-bottom: 7px;
      &:hover {
        background-color: #7f8c8d20;
        border-radius: 8px;
      }
    }

    p {
      cursor: pointer;
      padding: 4px 12px;
      color: #666;
      font-size: 14px;
      display: inline-block;
      margin-top: 7px;
      margin-bottom: 7px;
      user-select: none;
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
      border: solid 1px #3483fa !important;
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
