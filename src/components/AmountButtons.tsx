import React, { FC } from "react"
import styled from "styled-components"

interface AmountButtonsProps {
  amount: number
  increase: () => void
  decrease: () => void
  productButtons?: true
}

const AmountButtons: FC<AmountButtonsProps> = ({
  amount,
  increase,
  decrease,
  productButtons,
}) => {
  return (
    <Wrapper>
      <button
        className={productButtons && amount === 1 ? "disabled" : undefined}
        onClick={() => decrease()}
      >
        <span>-</span>
      </button>
      <div style={productButtons && { width: "2.5rem" }}>{amount}</div>
      <button onClick={() => increase()}>
        <span>+</span>
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--gray);
  button,
  div {
    font-weight: var(--bold);
  }
  div {
    width: 1.5rem;
    text-align: center;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    transition: var(--transition);
    cursor: pointer;
    span {
      opacity: 25%;
      font-size: 1rem;
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
