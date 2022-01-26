import React from "react"
import styled from "styled-components"

const ModalComp = styled.div`
  display: block;
  height: 100vh;
  overflow: hidden;
  background-color: #00000055;
  background-color: ${(props) => props.bckg};
`

const ModalMsg = styled.div`
  width: 20rem;
  height: 15rem;
  border-radius: 1rem;
  background-color: #009879;
  background-color: ${(props) => props.txtBckg};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: ${(props) => props.color};
`
const CrossBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  border: none;
  border-radius: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`

export const Modal = ({
  message,
  background,
  txtBackground,
  txtColor,
}) => {
  const closeModal = () => {
    document.getElementById("modalElement").style.display = "none"
  }
  return (
    <div id="modalElement">
      <ModalComp bckg={background}>
        <ModalMsg color={txtColor} txtBckg={txtBackground}>
          {message}
          <CrossBtn onClick={closeModal}>x</CrossBtn>
        </ModalMsg>
      </ModalComp>
    </div>
  )
}
