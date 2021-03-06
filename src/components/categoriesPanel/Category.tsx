import React, { FC } from "react"
import { CategoryItem } from "./Categories"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdChevronRight } from "react-icons/md"

const Category: FC<CategoryItem> = ({ image, type }) => {
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
  position: relative;
  display: grid;
  place-items: center;
  .link {
    padding-bottom: 2rem;
  }
  .img {
    width: 40%;
    max-width: 12rem;
  }
  ::before {
    content: "";
    background-color: var(--gray);
    height: 10.31rem;
    border-radius: var(--radius);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
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
  @media screen and (min-width: 768px) {
    .img {
      width: 60%;
    }
  }
  @media screen and (min-width: 992px) {
    ::before {
      height: 12.75rem;
    }
  }
`

export default Category
