import React from "react"
import { GlobalStyle } from "./src/styles/GlobalStyle"
import { Layout } from "./src/components"

export const rootWrapper = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}

export const pageWrapper = ({ element }) => {
  return <Layout>{element}</Layout>
}
