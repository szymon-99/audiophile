import React, { FC } from "react"
import styled from "styled-components"
import { Field } from "formik"

const RadioButtons: FC = () => {
  return (
    <Wrapper>
      <span className="label">payment method</span>
      <div className="buttons">
        <label htmlFor="paymentMethod">
          <Field name="paymentMethod" value="e-Money" type="radio" />
          e-Money
        </label>
        <label htmlFor="paymentMethod">
          <Field name="paymentMethod" value="Cash on Delivery" type="radio" />
          Cash on Delivery
        </label>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  margin-top: 1rem;
  .label {
    font-weight: var(--bold);
    font-size: 0.75rem;
    text-transform: capitalize;
  }
  .buttons {
    display: grid;
    grid-gap: 1rem;
  }
  label {
    padding: 1rem 1.5rem;
    border: 1px solid var(--gray-2);
    border-radius: var(--radius);
    font-size: 0.75rem;
    font-weight: var(--bold);
    display: flex;
    align-items: center;
    gap: 1rem;
    :checked {
      border-color: var(--peach);
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .buttons {
      grid-area: 1 / 2 / 2/ 3;
    }
  }
`

export default RadioButtons
