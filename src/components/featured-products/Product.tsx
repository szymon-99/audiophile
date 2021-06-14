import React, { FC } from "react"
import { FeaturedItem } from "./FeaturedProducts"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Product: FC<FeaturedItem> = ({ image, type }) => {
  const pathToImg = getImage(image.localFile)
  return (
    <Wrapper>
      {pathToImg && (
        <GatsbyImage image={pathToImg} alt={type} className="img" />
      )}
      {type}
    </Wrapper>
  )
}

const Wrapper = styled.article``

export default Product
