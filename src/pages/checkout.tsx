import React, { FC } from "react"
import styled from "styled-components"
import { ReturnButton, CheckoutForm, CheckoutCart } from "../components"
import { useTypedSelector } from "../hooks"

const Checkout: FC = () => {
  const { products } = useTypedSelector(store => store.cart)
  if (!products.length) {
    // need to handle option when cart is empty
  }
  return (
    <div style={{ background: "var(--gray)" }}>
      <ReturnButton />
      <Wrapper>
        <CheckoutForm />
        <CheckoutCart />
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.main`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;
`
export default Checkout
