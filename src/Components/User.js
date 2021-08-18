import React from "react";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";

function User() {
  return (
    <div>
      <IconUser />
    </div>
  );
}

export default User;

const IconUser = styled(FaUser)`
  fill: ${(props) => props.theme.svg};
  transition: all 0.5s ease;
`;
