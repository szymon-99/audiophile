import React from "react"
import styled from "styled-components"
import { useTypedSelector } from "../hooks"
import { GoCheck } from "react-icons/go"
import { Link } from "gatsby"
import { CartItem } from "../components"
import { formatPrice } from "../utils/helpers"

const Summary = () => {
  const { products, totalPrice, shipping } = useTypedSelector(
    state => state.cart
  )

  return (
    <Wrapper>
      <div className="icon">
        <GoCheck />
      </div>
      <h3>
        thank you <br /> for your order
      </h3>
      <p>you will receive an email confirmation shortly</p>
      <div className="info">
        <div className="items">
          <CartItem checkout {...products[0]} />
          <div className="underline"></div>
          {products.length > 1 && (
            <p className="others">and {products.length - 1} other item[s]</p>
          )}
        </div>
        <div className="total">
          grand total
          {formatPrice(totalPrice + shipping)}
        </div>
      </div>
      <Link to="/" className="btn">
        back to home
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--white);
  border-radius: var(--radius);
  position: fixed;
  width: 90vw;
  padding: 2rem;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  display: grid;
  .icon {
    background: var(--peach);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 2.5rem;
    color: var(--white);
  }
  .info {
    display: grid;
    border-radius: var(--radius);
    overflow: hidden;
    .others {
      text-align: center;
    }
    .items,
    .total {
      padding: 1.5rem;
    }

    .items {
      background: var(--gray);
    }
    .total {
      background: var(--black);
    }
  }
`

export default Summary
