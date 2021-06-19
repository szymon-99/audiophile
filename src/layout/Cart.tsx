import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Cart: FC = () => {
  return (
    <CartWrapper>
      <div className="title">
        <h3>Cart (3)</h3> <p>remove all</p>
      </div>
      <div className="total">
        <h3>total</h3> <p>$512</p>
      </div>
      <Link to="/checkout" className="btn" style={{ textAlign: "center" }}>
        checkout
      </Link>
    </CartWrapper>
  )
}

const CartWrapper = styled.aside`
  position: absolute;
  top: calc(var(--nav-height) + 1.5rem);
  right: 0;
  background-color: var(--white);
  width: 90vw;
  height: 50vh;
  border-radius: var(--radius);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: var(--black);
  .title,
  .total {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    max-width: 23.56rem;
  }
`

export default Cart
