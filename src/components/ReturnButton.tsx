import React from "react"
import styled from "styled-components"
import { navigate } from "@reach/router"

const ReturnButton = () => {
  return (
    <Wrapper>
      <div className="container">
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;

  .container {
    margin: 1rem auto 1.5rem;
    width: 90vw;
    max-width: var(--max-width);
  }
  button {
    text-transform: capitalize;
    background: transparent;
    border: none;
    opacity: 50%;
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition);
    :hover {
      color: var(--peach);
      opacity: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      margin: 2rem auto 1.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    .container {
      margin: 5rem auto 3.5rem;
    }
  }
`
export default ReturnButton
