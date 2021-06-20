import React, { FC } from "react"
import styled from "styled-components"
import { CartProduct } from "../../types"
import AmountButtons from "./AmountButtons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/helpers"
import { useActions } from "../hooks"

const CartItem: FC<CartProduct> = ({ id, image, name, price, amount }) => {
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
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
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
`

export default CartItem
