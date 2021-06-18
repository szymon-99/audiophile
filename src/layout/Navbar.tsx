import React, { FC, useState } from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import NavLinks from "./NavLinks"
import { Link } from "gatsby"

interface NavbarProps {
  isCartOpen: boolean
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: FC<NavbarProps> = ({ isCartOpen, setIsCartOpen }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Wrapper>
      <nav className="tablet-section">
        <button className="burger" onClick={() => setIsNavOpen(!isNavOpen)}>
          <GiHamburgerMenu />
        </button>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="audiophile" />
          </Link>
        </div>
        <NavLinks />
        <button className="cart" onClick={() => setIsCartOpen(!isCartOpen)}>
          <AiOutlineShoppingCart />
        </button>
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
    padding: 2rem 1.5rem;
    img {
      display: block;
    }
    .burger,
    .cart {
      color: var(--white);
      font-size: 1.5rem;
      cursor: pointer;
      background: transparent;
      border: none;
    }
    .menu {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    nav {
      place-items: initial;
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
