import React, { FC } from "react"
import styled from "styled-components"
import { CartProducts } from "../"
import { useTypedSelector } from "../../hooks"
import { formatPrice } from "../../utils/helpers"

const CheckoutCart: FC = () => {
  const { products, shipping, totalPrice } = useTypedSelector(
    state => state.cart
  )
  return (
    <Wrapper>
      <h6>summary</h6>
      <CartProducts products={products} checkout />
      <div className="summary">
        <p>
          <span>total</span> {formatPrice(totalPrice)}
        </p>
        <p>
          <span>shipping</span> {formatPrice(shipping)}
        </p>
        <p>
          <span>vat (included)</span>
          {formatPrice((totalPrice + shipping) * 0.23)}
        </p>
        <p>
          <span>grand total</span>
          {formatPrice(totalPrice + shipping)}
        </p>
      </div>
      <button type="submit" className="btn">
        continue & pay
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: var(--radius);
  background: var(--white);
  padding: 2rem 1.5rem;
  display: grid;
  grid-gap: 2rem;
  max-height: 38rem;
  .summary {
    display: grid;
    gap: 0.5rem;
    p {
      display: flex;
      justify-content: space-between;
      font-weight: var(--bold);
      span {
        opacity: 50%;
        font-weight: var(--medium);
        text-transform: uppercase;
      }
    }
    p:last-of-type {
      margin-top: 1rem;
      color: var(--peach);
      span {
        color: var(--black);
        opacity: 50%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
`

export default CheckoutCart
