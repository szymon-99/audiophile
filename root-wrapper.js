import React from "react"
import { GlobalStyle } from "./src/styles/GlobalStyle"
import { Layout, LayoutProvider } from "./src/layout"

export const pageWrapper = ({ element }) => {
  return (
    <Layout>
      <GlobalStyle />
      {element}
    </Layout>
  )
}

export const rootWrapper = ({ element }) => {
  return <LayoutProvider>{element}</LayoutProvider>
}
