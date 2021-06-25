import React, { FC } from "react"
import styled from "styled-components"
import { ReturnButton, CheckoutForm, Seo } from "../components"
import { useTypedSelector } from "../hooks"
import { Link } from "gatsby"

const Checkout: FC = () => {
  const { products } = useTypedSelector(store => store.cart)
  if (!products.length) {
    // need to handle option when cart is empty
    return (
      <EmptyCartWrapper>
        <div>
          <h3>Sorry your cart is empty</h3>
          <Link to="/" className="btn">
            fill it
          </Link>
        </div>
      </EmptyCartWrapper>
    )
  }
  return (
    <div style={{ background: "var(--gray)" }}>
      <Seo title="checkout" />
      <ReturnButton />
      <CheckoutWrapper>
        <CheckoutForm />
      </CheckoutWrapper>
    </div>
  )
}

const EmptyCartWrapper = styled.main`
  min-height: calc(80vh - var(--nav-height));
  display: grid;
  place-items: center;
  div {
    place-items: center;
    display: grid;
    grid-gap: 2rem;
  }
`

const CheckoutWrapper = styled.main`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: 6rem;
  @media screen and (min-width: 992px) {
    padding-bottom: 8.75rem;
  }
`
export default Checkout
