import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
            <h5>Category</h5>
          </li>
          <li>
            <Link to="/category/knife">Knives</Link>
          </li>
          <li>
            <Link to="/category/awp">AWP</Link>
          </li>
          <li>
            <Link to="/category/rifle">Rifles</Link>
          </li>
          <li>
            <Link to="/category/pistols">Pistols</Link>
          </li>
        </ul>
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
            Factory New
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
            Minimal Wear
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
            Field Tested
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
            Well Worn
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
            Battle Scarred
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
  padding-left: 40px;
  h5 {
    color: ${(props) => props.theme.colorTitleAside};
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
      color: ${(props) => props.theme.colorAside};
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
      color: ${(props) => props.theme.colorAside};
      font-size: 14px;
      display: inline-block;
      margin-top: 7px;
      margin-bottom: 7px;
      user-select: none;
      width: 150px;

      &:hover {
        background-color: #7f8c8d20;
        border-radius: 8px;
      }
    }
  }
`;
