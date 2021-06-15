import React, { FC } from "react"
import { FeaturedItem } from "./FeaturedProducts"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdChevronRight } from "react-icons/md"

const Product: FC<FeaturedItem> = ({ image, type }) => {
  const pathToImg = getImage(image.localFile)
  return (
    <Wrapper>
      {pathToImg && (
        <GatsbyImage image={pathToImg} alt={type} className="img" />
      )}

      <div className="link">
        <h6>{type}</h6>
        <Link to={`/${type}`}>
          shop <span>{<MdChevronRight />}</span>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: var(--gray);
  height: 10.31rem;
  position: relative;
  border-radius: var(--radius);
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    max-width: 15rem;
    transform: translate(-50%, -40%);
  }
  .link {
    margin-top: 5rem;
    a {
      display: flex;
      padding-top: 1rem;
      align-items: center;
      justify-content: center;
      font-size: 0.8125rem;
      line-height: 1.125rem;
      letter-spacing: 0.0625rem;
      font-weight: var(--bold);
      text-transform: uppercase;
      transition: var(--transition);
      color: rgba(0, 0, 0, 0.5);
      svg {
        display: block;
        font-size: 1.25rem;
        color: var(--peach);
      }
      :hover {
        color: var(--peach);
      }
    }
  }
  @media screen and (min-width: 768px) {
    .img {
      width: 75%;
    }
  }
  @media screen and (min-width: 992px) {
    height: 12.75rem;
  }
`

export default Product
