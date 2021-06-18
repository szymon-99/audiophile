import React, { FC } from "react"
import styled from "styled-components"
import { Image } from "../../../types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface GalleryProps {
  images: Image[]
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <Wrapper className="section">
      {images.map((image, index) => {
        const imageData = getImage(image.localFile)

        if (imageData) {
          return (
            <GatsbyImage
              image={imageData}
              alt="gallery image"
              className={index === 2 ? "img big" : "img"}
              key={index}
            />
          )
        }
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  .img {
    border-radius: var(--radius);
  }
  @media screen and (min-width: 768px) {
    grid-auto-rows: 10.875rem;
    .big {
      grid-area: 1 / 2 / 3 / 3;
    }
  }
  @media screen and (min-width: 992px) {
    grid-auto-rows: 17.5rem;
  }
`

export default Gallery
