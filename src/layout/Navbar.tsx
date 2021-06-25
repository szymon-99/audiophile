import React, { FC } from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import NavLinks from "./NavLinks"
import { Link } from "gatsby"
import Cart from "./Cart"
import { CSSTransition } from "react-transition-group"
import { useActions, useTypedSelector } from "../hooks"

const Navbar: FC = () => {
  const { toggleCart, toggleSidebar } = useActions()
  const { isCartOpen } = useTypedSelector(store => store.layout)
  const { totalAmount } = useTypedSelector(store => store.cart)

  return (
    <Wrapper>
      <nav className="tablet-section">
        <button className="burger" onClick={() => toggleSidebar()}>
          <GiHamburgerMenu />
        </button>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="audiophile" />
          </Link>
        </div>
        <NavLinks />
        <button
          className={`${isCartOpen ? "cart disabled" : "cart"}`}
          onClick={() => toggleCart()}
        >
          <span
            className="amount"
            style={totalAmount === 0 ? { opacity: "0" } : undefined}
          >
            {totalAmount}
          </span>
          <AiOutlineShoppingCart />
        </button>
        <CSSTransition
          timeout={300}
          in={isCartOpen}
          classNames="show"
          unmountOnExit
        >
          <Cart />
        </CSSTransition>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--black);
  color: var(--white);
  position: relative;
  z-index: 100;
  nav {
    display: grid;
    grid-template-columns: auto 1fr auto;
    place-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    height: var(--nav-height);
    padding: 2rem 0;
    width: 90vw;
    margin: 0 auto;
    position: relative;
    img {
      display: block;
    }
    .burger,
    .cart {
      color: var(--white);
      font-size: 1.6rem;
      cursor: pointer;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
    }
    .cart {
      position: relative;
    }
    .cart.disabled {
      pointer-events: none;
    }
    .amount {
      position: absolute;
      display: grid;
      place-items: center;
      z-index: -1;
      top: -60%;
      right: -30%;
      font-size: 0.75rem;
      background-color: var(--peach);
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      transition: var(--transition);
    }
    .menu {
      display: none;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  @media screen and (min-width: 768px) {
    nav {
      justify-items: flex-start;
      padding: 2rem 0;
      .logo {
        margin-left: 2rem;
      }
    }
  }
  @media screen and (min-width: 992px) {
    nav {
      place-items: center;
      .burger {
        display: none;
      }
      .cart {
        font-size: 1.8rem;
      }
      .amount {
        width: 1.8rem;
        height: 1.8rem;
        font-size: 0.9rem;
        right: -40%;
      }
      .menu {
        display: flex;
        li:not(:last-of-type) {
          margin-right: 2rem;
        }
      }
      .logo {
        margin: initial;
      }
    }
  }
`

export default Navbar
