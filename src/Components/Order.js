import React, { useContext } from "react";
import { getFirestore } from "../firebase";
import styled from "styled-components";
import context from "../context";
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
        alert(error, "Intente otra vez");
      });
  };

  return (
    <MainContainer>
      <span onClick={handleClose}>
        <RiCloseCircleLine size={30} fill={"#000"} />
      </span>

      <p>Enter your information to finalize your purchase</p>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Full name"
            autoComplete="Full Name"
            {...register("Name", { required: true, maxLength: 80 })}
          />
          {errors.Name && "Name is required"}
          <input
            type="text"
            placeholder="Email"
            autoComplete="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && "Email required"}
          <input
            type="tel"
            placeholder="Phone number"
            autoComplete="Tel"
            {...register("Mobile", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          {errors.Mobile && "Phone is required"}

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
  background-color: #eeeeee;
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
    color: #070707;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    max-width: 380px;
    line-height: 1.5;
  }

  form input {
    display: block;
    padding: 10px 24px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 6px;
    background: #080808;
    transition: all 70ms ease-in-out;
    color: #fff;
    font-size: 20px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #141414 inset !important;
    -webkit-text-fill-color: white !important;
    caret-color: white;
  }

  form input::placeholder {
    color: #cccccc;
  }
  form input:focus {
    outline: none;
  }
  form input:hover {
    background: #141414;
  }
  form input:nth-child(4) {
    cursor: pointer;
    margin: 0 auto;
    color: #fff;
  }
`;
