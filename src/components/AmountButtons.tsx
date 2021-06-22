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
    <Wrapper style={{ width: `${productButtons ? "7.5rem" : "auto"}` }}>
      <button
        className={productButtons && amount === 1 ? "disabled" : undefined}
        onClick={() => decrease()}
      >
        <span>-</span>
      </button>
      <div>{amount}</div>
      <button onClick={() => increase()}>
        <span>+</span>
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--gray);
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  button,
  div {
    font-weight: var(--bold);
    padding: 0.2rem 0;
    display: grid;
    place-items: center;
  }

  button {
    border: none;
    transition: var(--transition);
    cursor: pointer;
    background: inherit;
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
