import React, { useContext } from "react";
import { getFirestore } from "../firebase";
import styled from "styled-components";
import context from "./Context";
import { useForm } from "react-hook-form";
import { RiCloseCircleLine } from "react-icons/ri";

function Order({ handleClose, setConfirmacion, setResumen }) {
  const { cartItems, cleanCart, totalPrice } = useContext(context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const actualDate = new Date();
  const onSubmit = (data) => {
    // console.log(data);
    const nueva_orden = {
      buyer: {
        name: data.Name,
        phone: data.Mobile,
        email: data.Email,
      },
      ordenes: cartItems,
      date: `${actualDate.getDate()}/${
        actualDate.getMonth() + 1
      }/${actualDate.getFullYear()}`,
      total: totalPrice,
    };

    const firestore = getFirestore();
    const collection = firestore.collection("ordenes");
    const query = collection.add(nueva_orden);

    query
      .then((resultado) => {
        setConfirmacion(resultado.id);
        setResumen(cartItems);
        cleanCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(errors);

  return (
    <MainContainer>
      <span onClick={handleClose}>
        <RiCloseCircleLine size={30} fill={"#fff"} />
      </span>

      <p>Ingrese sus datos para finalizar su compra</p>

      <div>
        {/* {confirmacion && <p>Numero de orden: {confirmacion}</p>} */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nombre Completo"
            autoComplete="Full Name"
            {...register("Name", { required: true, maxLength: 80 })}
          />
          {errors.Name && "Nombre es requerido"}
          <input
            type="text"
            placeholder="Email"
            autoComplete="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && "Emeail requerido"}
          <input
            type="tel"
            placeholder="Mobile number"
            autoComplete="Tel"
            {...register("Mobile", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          {errors.Mobile && "Telefono es requerido"}

          <input type="submit" />
        </form>
      </div>
    </MainContainer>
  );
}

export default Order;

const MainContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: #201e1e;
  border-radius: 0.5rem;
  -webkit-box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.69);
  box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.69);

  span {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  p {
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
  }

  form input {
    display: block;
    padding: 10px 24px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    background: #fff;
    transition: all 70ms ease-in-out;
  }
  form input:focus {
    outline: none;
  }
  form input:hover {
    background: #eeeeee;
  }
  form input:nth-child(4) {
    cursor: pointer;
    margin: 0 auto;
  }
`;