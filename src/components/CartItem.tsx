import React, { FC } from "react"
import styled from "styled-components"
import { CartProduct } from "../../types"
import AmountButtons from "./AmountButtons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/helpers"
import { useActions } from "../hooks"

const CartItem: FC<CartProduct & { checkout?: true }> = ({
  id,
  image,
  name,
  price,
  amount,
  checkout,
}) => {
  const imageData = getImage(image.localFile)
  const { toggleAmount, removeCartItem } = useActions()

  const increase = () => {
    toggleAmount(id, "increase")
  }
  const decrease = () => {
    if (amount === 1) {
      removeCartItem(id)
    } else {
      toggleAmount(id, "decrease")
    }
  }
  return (
    <Wrapper>
      {imageData && (
        <GatsbyImage image={imageData} alt={name} className="img" />
      )}
      <div className="info">
        <p>{name}</p>
        <p>{formatPrice(price)}</p>
      </div>
      {checkout ? (
        <div className="amount">
          <span>{amount}x</span>
        </div>
      ) : (
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 25%;
  .img {
    height: 4rem;
    width: 4rem;
    border-radius: var(--radius);
  }
  .info {
    margin-left: 1rem;
    font-weight: var(--bold);
    p {
      :last-of-type {
        opacity: 50%;
        font-weight: var(--regular);
        font-size: 0.9rem;
      }
    }
  }
  .amount {
    justify-self: flex-end;
    opacity: 50%;
    font-weight: var(--bold);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: auto 1fr 30%;
  }
`

export default CartItem
