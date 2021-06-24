import React, { FC, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Modal from "./Modal"
import { CSSTransition } from "react-transition-group"
import Background from "./Background"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks"
import Summary from "./Summary"

const Layout: FC = ({ children }) => {
  const { isCartOpen, showModal, showSummary } = useTypedSelector(
    store => store.layout
  )
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
        classNames="show"
        unmountOnExit
      >
        <Modal />
      </CSSTransition>
      <CSSTransition
        timeout={300}
        in={showSummary}
        classNames="show"
        unmountOnExit
      >
        <Summary />
      </CSSTransition>
      <CSSTransition
        timeout={300}
        in={isCartOpen || showSummary}
        classNames="show"
        unmountOnExit
      >
        <Background />
      </CSSTransition>
      <Footer />
    </>
  )
}

export default Layout
