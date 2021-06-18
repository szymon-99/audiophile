import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { CategoryProduct } from "../../../types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface ProductProps {
  product: CategoryProduct
  reverse?: true
}

const Product: FC<ProductProps> = ({ product, reverse }) => {
  const { name, slug, description, type, new: newProduct, image } = product
  const imageData = getImage(image.localFile)
  return (
    <Wrapper reverse={reverse}>
      {imageData && (
        <GatsbyImage image={imageData} alt={name} className="img" />
      )}
      <div className="info">
        {newProduct && <p className="subtitle">new product</p>}
        <h2>
          {name} <br />
          {type}
        </h2>
        <p className="desc">{description}</p>
        <Link className="btn" to={`/products/${slug}`}>
          see product
        </Link>
      </div>
    </Wrapper>
  )
}
interface ArticleProps {
  reverse?: true
}

const Wrapper = styled.article<ArticleProps>`
  display: grid;
  grid-gap: 2rem;
  .info {
    text-align: center;
    .desc {
      opacity: 50%;
    }
  }
  p,
  h2 {
    margin-bottom: 1.5rem;
  }
  .img {
    max-height: 22rem;
    border-radius: var(--radius);
  }
  @media screen and (min-width: 768px) {
    grid-gap: 3rem;
    h2 {
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: ${props =>
      props.reverse ? "auto 1fr" : "1fr auto"};
    grid-template-rows: 35rem;
    grid-gap: 7.81rem;

    .img {
      max-height: none;
      grid-area: ${props => (props.reverse ? " 1 / 2 / 2 / 3" : "auto")};
    }
    .info {
      align-self: center;
      text-align: left;
      width: 27.81rem;
      grid-area: ${props => (props.reverse ? " 1 / 1 / 2 / 2" : "auto")};
    }
    .desc {
      margin-bottom: 2.5rem;
    }
  }
`

export default Product
