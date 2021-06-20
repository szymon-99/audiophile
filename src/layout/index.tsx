import React, { FC } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { CSSTransition } from "react-transition-group"
import Background from "./Background"
import { useTypedSelector } from "../hooks/useTypedSelector"

const Layout: FC = ({ children }) => {
  const { isCartOpen } = useTypedSelector(store => store.layout)
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
