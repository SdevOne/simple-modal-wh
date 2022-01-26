import React, {useState} from "react"
import styled from "styled-components"
import "./modal.css"

const ModalComp = styled.div`
  width:100vw;
  height: 100vh;
  background-color: #00000050;
  background-color: ${(props) => props.bckg};
`
const ModalMsg = styled.div`
  width: 25rem;
  height: 10rem;
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
  font-size: 1.5rem;
  color:#fff;
  color: ${(props) => props.color};
`
const CrossBtn = styled.button`
  width: 1.6rem;
  height: 1.6rem;
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
  const [isOpen,setIsOpen] = useState(false)
  const showModal = "modalElement display-block"
  const hideModal = "modalElement display-none"
  const handleModal = isOpen ? hideModal : showModal
  return (
    <div id={handleModal}>
      <ModalComp bckg={background}>
        <ModalMsg color={txtColor} txtBckg={txtBackground}>
          {message}
          <CrossBtn onClick={setIsOpen(true)}>x</CrossBtn>
        </ModalMsg>
      </ModalComp>
    </div>
  )
}
