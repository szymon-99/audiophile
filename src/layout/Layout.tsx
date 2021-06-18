import React, { FC, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Cart from "./Cart"
import { CSSTransition } from "react-transition-group"

const Layout: FC = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {children}
      <CSSTransition
        timeout={600}
        in={isCartOpen}
        classNames="cart"
        unmountOnExit
      >
        <Cart />
      </CSSTransition>
      <Footer />
    </>
  )
}

export default Layout
