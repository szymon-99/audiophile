import React, { FC, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Modal from "./Modal"
import { CSSTransition } from "react-transition-group"
import Background from "./Background"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks"

const Layout: FC = ({ children }) => {
  const { isCartOpen, showModal } = useTypedSelector(store => store.layout)
  const { closeModal } = useActions()
  useEffect(() => {
    const show = setTimeout(() => {
      closeModal()
    }, 1500)
    return () => clearTimeout(show)
  }, [showModal])

  return (
    <>
      <Navbar />
      {children}
      <CSSTransition
        timeout={300}
        in={showModal}
        classNames="cart"
        unmountOnExit
      >
        <Modal />
      </CSSTransition>
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
