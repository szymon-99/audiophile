import React from "react"
import styled from "styled-components"
import { CgCheckO } from "react-icons/cg"

const Modal = () => {
  return (
    <Wrapper>
      <CgCheckO />
      item added to cart
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  position: fixed;
  top: calc(var(--nav-height) + 1.5rem);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--white);
  padding: 1rem 1.5rem;
  display: flex;
  font-weight: var(--medium);
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow);
  gap: 0.5rem;
  svg {
    font-size: 2rem;
    color: var(--peach);
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`

export default Modal
