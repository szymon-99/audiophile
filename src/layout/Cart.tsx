import React, { FC } from "react"
import styled from "styled-components"

const Cart: FC = () => {
  return (
    <Wrapper>
      <CartWrapper className="es"></CartWrapper>
    </Wrapper>
  )
}

const CartWrapper = styled.aside`
  width: 90vw;
  height: 50vh;
  background-color: var(--white);
  border-radius: var(--radius);
  margin: calc(var(--nav-height) + 1.5rem) auto 0;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
`
export default Cart
