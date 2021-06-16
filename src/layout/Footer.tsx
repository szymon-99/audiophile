import React, { FC } from "react"
import styled from "styled-components"
import NavLinks from "./NavLinks"
import { socialLinks } from "../constants/footer-links"
import logo from "../images/logo.svg"
import { Link } from "gatsby"

const Footer: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="underline"></div>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="audiophile" />
            </Link>
          </div>
          <NavLinks />
        </nav>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="links">
          <p>
            <span>Copyright 2021. All Rights Reserved</span>
          </p>
          <div>
            {socialLinks.map(link => {
              const { icon, path, id } = link
              return (
                <a key={id} href={path}>
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  nav {
    ul {
      margin-top: 3rem;
    }
  }
  .container {
    display: grid;
    grid-row-gap: 3rem;
    place-items: center;
    padding-bottom: 2rem;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  img {
    display: block;
  }
  .underline {
    background-color: var(--peach);
    height: 4px;
    width: 100px;
  }
  .menu {
    li:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
  p {
    opacity: 0.5;
  }
  .links {
    display: grid;
    grid-row-gap: 3rem;
    a {
      font-size: 1.5rem;
      color: var(--white);
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      color: var(--peach);
    }
    a:not(:last-of-type) {
      margin-right: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      padding-bottom: 3rem;
      place-items: initial;
      text-align: left;
    }
    .menu {
      display: flex;
      li {
        margin-bottom: 0 !important;
      }
      li:not(:last-of-type) {
        margin-right: 2rem;
      }
    }

    .links {
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 992px) {
    nav {
      display: flex;
      justify-content: space-between;
      ul {
        margin: initial;
      }
    }
    p {
      max-width: 33rem;
    }
  }
`

export default Footer
