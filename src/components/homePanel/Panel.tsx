import React from "react"
import styled from "styled-components"
import Main from "./Main"
import Speaker from "./Speaker"
import Earphones from "./Earphones"

const Panel = () => {
  return (
    <Wrapper className="section">
      <Main />
      <Speaker />
      <Earphones />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1.5rem;
`

export default Panel
