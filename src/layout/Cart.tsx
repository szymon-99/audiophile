import React, { FC, useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useActions, useTypedSelector } from "../hooks"
import { formatPrice } from "../utils/helpers"
import { CartItem } from "../components"

const Cart: FC = () => {
  const cartRef = useRef<HTMLDivElement>(null)
  const { toggleCart, clearCart, countTotals } = useActions()
  const { products, totalAmount, totalPrice } = useTypedSelector(
    store => store.cart
  )

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Element
    if (cartRef.current && !cartRef.current.contains(target)) {
      toggleCart()
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside)
    return () => window.removeEventListener("mousedown", handleClickOutside)
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
      <div className="products">
        {products.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="total">
        <h6>total</h6>
        <h6>{formatPrice(totalPrice)}</h6>
      </div>
      <Link
        to="/checkout"
        className={products.length ? "btn" : "btn disabled"}
        style={{ textAlign: "center" }}
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
  .products {
    display: grid;
    align-items: start;
    height: 15rem;
    grid-gap: 1.5rem;
    overflow: scroll;
  }

  @media screen and (min-width: 768px) {
    max-width: 23.56rem;
    padding: 2rem;
  }
`

export default Cart
