import React, { FC, useState } from "react"
import styled from "styled-components"

const AmountButtons: FC = () => {
  const [amount, setAmount] = useState(1)

  return (
    <Wrapper>
      <button
        className={amount === 1 ? "disabled" : undefined}
        disabled={amount === 1}
        onClick={() => setAmount(prev => prev - 1)}
      >
        <span>-</span>
      </button>
      <div className="amount">{amount}</div>
      <button onClick={() => setAmount(prev => prev + 1)}>
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
  .amount {
    width: 2.5rem;
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
