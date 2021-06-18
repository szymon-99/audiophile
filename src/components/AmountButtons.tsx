import React, { FC, useState } from "react"
import styled from "styled-components"

const AmountButtons = () => {
  const [amount, setAmount] = useState(1)

  return (
    <Wrapper>
      <button className={amount === 1 ? "disabled" : undefined}>
        <span>-</span>
      </button>
      <div className="amount">{amount}</div>
      <button>
        <span>+</span>
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  button,
  .amount {
    background: var(--gray);
    padding: 1rem;
    font-weight: var(--bold);
  }
  button {
    border: none;
    transition: var(--transition);
    cursor: pointer;
    span {
      opacity: 25%;
    }
    :hover {
      span {
        opacity: 100%;
        color: var(--peach);
      }
    }
  }
  button.disabled {
    pointer-events: none;
  }
`

export default AmountButtons
