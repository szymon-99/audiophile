import React from "react"
import { GlobalStyle } from "./src/styles/GlobalStyle"
import { Layout } from "./src/layout"

export const pageWrapper = ({ element }) => {
  return (
    <Layout>
      <GlobalStyle />
      {element}
    </Layout>
  )
}
