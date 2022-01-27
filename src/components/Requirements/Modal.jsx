import React from "react"
import styled from "styled-components"

const ModalContainer = styled.div`
  position: absolute;
  overflow: hidden;
`

const ModalComp = styled.div`
  width: 100vw;
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
  color: #fff;
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
/**
 * Return a modal
 * @param {string} message - message to display in the modal
 * @param {string} background - overlay background color
 * @param {string} txtBackground - message container background color
 * @param {string} txtcolor - message color
 * @param {boolean} showModal - state of the modal
 * @param {boolean} updateModalState - function to change the state of the modal
 * @returns {React.ReactElement}
 */
export const Modal = ({
  message,
  background,
  txtBackground,
  txtColor,
  showModal,
  updateModalState,
}) => {
  if (showModal) {
    return (
      <ModalContainer>
        <ModalComp bckg={background}>
          <ModalMsg color={txtColor} txtBckg={txtBackground}>
            {message}
            <CrossBtn onClick={updateModalState}>x</CrossBtn>
          </ModalMsg>
        </ModalComp>
      </ModalContainer>
    )
  }
  return null
}
