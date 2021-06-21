import React, { FC, useState } from "react"
import styled from "styled-components"
import { IProduct } from "../../../types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AmountButtons from "../AmountButtons"
import { formatPrice } from "../../utils/helpers"
import { useActions } from "../../hooks"

interface ProductProps {
  product: IProduct
}

const Product: FC<ProductProps> = ({ product }) => {
  const { name, new: newProduct, type, description, price, image } = product
  const imageData = getImage(image.localFile)
  const { addToCart, openModal, countTotals } = useActions()
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount(prev => prev + 1)
  }
  const decrease = () => {
    setAmount(prev => {
      let moreThanZero = prev - 1
      if (moreThanZero < 1) {
        moreThanZero = 1
      }
      return moreThanZero
    })
  }

  return (
    <Wrapper className="section">
      {imageData && (
        <GatsbyImage image={imageData} alt={name} className="img" />
      )}
      <div className="container">
        <div className="info">
          {newProduct && <p className="subtitle">new product</p>}
          <h2>
            {name} <br />
            {type}
          </h2>
          <p className="desc">{description}</p>
          <h6>{formatPrice(price)}</h6>
          <div className="buttons">
            <AmountButtons
              amount={amount}
              increase={increase}
              decrease={decrease}
              productButtons
            />
            <button
              className="btn"
              onClick={() => {
                addToCart(amount, product)
                openModal()
                countTotals()
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* margin-top: 4rem !important; */
  display: grid;
  grid-gap: 2rem;
  .img {
    border-radius: var(--radius);
  }
  .buttons {
    display: flex;
    height: 3rem;
    .btn {
      margin-left: 1rem;
    }
  }
  .container {
    display: grid;
    place-items: center;
  }
  .info {
    display: grid;
    grid-gap: 1rem;
  }
  .desc {
    opacity: 50%;
  }
  @media screen and (min-width: 768px) {
    /* margin-top: 5.125rem !important; */
    grid-template-columns: 1fr 50vw;
    grid-template-rows: 30rem;
    grid-gap: 4rem;
    .info {
      grid-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 35rem;
    grid-gap: initial;
    /* margin-top: 10rem !important; */
    .info {
      margin-left: 10vw;
    }
  }
`

export default Product
