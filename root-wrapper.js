import React from "react"
import { GlobalStyle } from "./src/styles/GlobalStyle"
import { Layout } from "./src/layout"
import { Provider } from "react-redux"
import { store } from "./src/state"

export const pageWrapper = ({ element }) => {
  return (
    <Layout>
      <GlobalStyle />
      {element}
    </Layout>
  )
}

export const rootWrapper = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
