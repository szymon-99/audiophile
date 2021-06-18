import React, { FC } from "react"
import styled from "styled-components"
import { IProduct } from "../../../types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AmountButtons from "../AmountButtons"

interface ProductProps {
  product: IProduct
}

const Product: FC<ProductProps> = ({ product }) => {
  const {
    name,
    new: newProduct,
    type,
    slug,
    description,
    price,
    image,
  } = product
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
          <h6>{price}</h6>
          <div className="buttons">
            <AmountButtons />
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Product
