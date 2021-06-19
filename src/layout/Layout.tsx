import React, { FC, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { CSSTransition } from "react-transition-group"
import Background from "./Background"

const Layout: FC = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
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
