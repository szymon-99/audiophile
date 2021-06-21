import React, { FC } from "react"
import styled from "styled-components"
import { ReturnButton, CheckoutForm } from "../components"

const Checkout: FC = () => {
  return (
    <Wrapper>
      <ReturnButton />
      <CheckoutForm />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--gray);
`
export default Checkout
