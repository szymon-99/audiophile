import React, { FC, useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useActions, useTypedSelector } from "../hooks"
import { formatPrice } from "../utils/helpers"
import { CartProducts } from "../components"
import { handleClickOutside } from "../utils/helpers"

const Cart: FC = () => {
  const cartRef = useRef<HTMLDivElement>(null)
  const { toggleCart, clearCart, countTotals } = useActions()
  const { products, totalAmount, totalPrice } = useTypedSelector(
    store => store.cart
  )
  useEffect(() => {
    window.addEventListener("mousedown", e =>
      handleClickOutside(e, toggleCart, cartRef)
    )
    return () =>
      window.removeEventListener("mousedown", e =>
        handleClickOutside(e, toggleCart, cartRef)
      )
  }, [])

  useEffect(() => {
    countTotals()
  }, [products])

  return (
    <CartWrapper ref={cartRef}>
      <div className="title">
        <h6>Cart ({totalAmount})</h6>
        <button className="remove" onClick={clearCart}>
          Remove all
        </button>
      </div>
      <CartProducts products={products} />
      <div className="total">
        <h6>total</h6>
        <h6>{formatPrice(totalPrice)}</h6>
      </div>
      <Link
        to="/checkout"
        className={products.length ? "btn" : "btn disabled"}
        onClick={() => toggleCart()}
      >
        {products.length ? "checkout" : "cart is empty"}
      </Link>
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
  position: absolute;
  top: calc(var(--nav-height) + 1.5rem);
  right: 0;
  background-color: var(--white);
  width: 90vw;
  height: 30rem;
  border-radius: var(--radius);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: var(--black);
  .title,
  .total {
    display: flex;
    justify-content: space-between;
  }
  .total {
    h6 {
      :first-of-type {
        opacity: 50%;
        letter-spacing: 0;
        font-weight: var(--light);
        font-size: 0.93rem;
      }
    }
  }
  .disabled {
    opacity: 50%;
    pointer-events: none;
  }

  .remove {
    line-height: 1.125rem;
    letter-spacing: 0.0625rem;
    transition: var(--transition);
    font-size: 0.9375rem;
    color: rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    background-color: transparent;
    :hover {
      color: var(--peach);
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 23.56rem;
    padding: 2rem;
  }
`

export default Cart
