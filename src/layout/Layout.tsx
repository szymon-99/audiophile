import React, { FC, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { CSSTransition } from "react-transition-group"
import Background from "./Background"
import { useLayoutContext } from "./context"

const Layout: FC = ({ children }) => {
  const { isCartOpen } = useLayoutContext()
  return (
    <>
      <Navbar />
      {children}
      <CSSTransition
        timeout={300}
        in={isCartOpen}
        classNames="cart"
        unmountOnExit
      >
        <Background />
      </CSSTransition>
      <Footer />
    </>
  )
}

export default Layout
