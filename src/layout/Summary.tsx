import React from "react"
import styled from "styled-components"
import { useActions, useTypedSelector } from "../hooks"
import { GoCheck } from "react-icons/go"
import { navigate } from "gatsby"
import { CartItem } from "../components"
import { formatPrice } from "../utils/helpers"

const Summary = () => {
  const { products, totalPrice, shipping } = useTypedSelector(
    state => state.cart
  )
  const { closeSummary, clearCart, countTotals } = useActions()

  const finishCheckout = () => {
    clearCart()
    countTotals()
    navigate("/")
    closeSummary()
  }

  return (
    <Wrapper>
      <div className="icon">
        <GoCheck />
      </div>
      <h3>
        thank you <br /> for your order
      </h3>
      <p className="message">You will receive an email confirmation shortly</p>
      <div className="info">
        <div className="items">
          {products.map((product, i) => {
            if (i > 0) return
            return <CartItem checkout {...product} key={product.id} />
          })}
          <div className="underline"></div>
          {products.length > 1 && (
            <p className="others">and {products.length - 1} other item[s]</p>
          )}
        </div>
        <div className="total">
          <span>grand total</span>
          <p>{formatPrice(totalPrice + shipping)}</p>
        </div>
      </div>
      <button className="btn" onClick={finishCheckout}>
        back to home
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--white);
  border-radius: var(--radius);
  position: fixed;
  width: 90vw;
  max-width: 33.75rem;
  padding: 2rem;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  display: grid;
  grid-gap: 1rem;
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

  .message {
    opacity: 50%;
  }
  .info {
    display: grid;
    border-radius: var(--radius);
    overflow: hidden;
    .others {
      text-align: center;
      opacity: 50%;
    }
    .items,
    .total {
      padding: 1.5rem;
    }

    .items {
      background: var(--gray);
      padding-bottom: 0.5rem;
      .underline {
        width: 100%;
        margin: 0 auto;
        height: 1px;
        margin: 0.5rem 0;
        background: var(--gray-2);
      }
    }
    .total {
      background: var(--black);
      color: var(--white);
      display: grid;
      text-transform: uppercase;
      grid-gap: 0.5rem;
      span {
        opacity: 50%;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    top: calc(var(--nav-height) + 2rem);
    transform: translate(-50%, 0);
    grid-gap: 2rem;
  }
`

export default Summary
