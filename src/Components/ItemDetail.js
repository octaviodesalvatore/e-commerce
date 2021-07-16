import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import ItemCount from "./ItemCount";

function ItemDetail(props) {
  return (
    <div>
      <CardDiv>
        <StyledDiv>
          <div>
            <img
              src={props.image}
              width="300"
              height="200"
              alt="Product Karambit"
            />
          </div>

          <CenterDiv>
            <h3>{props.name}</h3>
            <p>
              <b> Precio: </b> {props.price}
            </p>

            <p>{props.description}</p>
          </CenterDiv>
          <div>
            <ItemCount stock={props.stock} />
            <Button variant="contained">Agregar al Carrito</Button>
          </div>
        </StyledDiv>
      </CardDiv>
    </div>
  );
}

export default ItemDetail;

const CardDiv = styled(Card)`
  text-align: center;
  margin: 10px;
  padding: 40px;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;

  &:hover {
    -webkit-box-shadow: 0px 7px 15px 2px rgba(0, 0, 0, 0.44);
    box-shadow: 0px 7px 15px 2px rgba(0, 0, 0, 0.44);
    transition: all 200ms ease-in-out;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-bottom: 20px;
  }

  img {
    object-fit: contain;
    border-right: 1px solid #999;
  }

  Button:nth-child(2) {
    margin-top: 15px;
    background-color: #2968c8;
    color: white;
  }
`;

const CenterDiv = styled.div`
  width: 500px;
`;
