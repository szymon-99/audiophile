import React, { FC } from "react"
import styled from "styled-components"
import { IProduct } from "../../../types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AmountButtons from "../AmountButtons"
import { formatPrice } from "../../utils/helpers"

interface ProductProps {
  product: IProduct
}

const Product: FC<ProductProps> = ({ product }) => {
  const { name, new: newProduct, type, description, price, image } = product
  const imageData = getImage(image.localFile)

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
            <AmountButtons />
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 4rem;
  display: grid;
  grid-gap: 2rem;
  .img {
    border-radius: var(--radius);
  }
  .buttons {
    display: flex;
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
    margin-top: 5.125rem;
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
    margin-top: 10rem;
    .info {
      margin-left: 10vw;
    }
  }
`

export default Product
