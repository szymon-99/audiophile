import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FeaturedProduct } from "../../../types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface FeaturedProps {
  featured: FeaturedProduct[]
}

const Featured: FC<FeaturedProps> = ({ featured }) => {
  return (
    <Wrapper className="section">
      <h3 className="title">you may also like</h3>
      <div className="container">
        {featured.map(item => {
          const { name, slug, image } = item
          const imageData = getImage(image.localFile)
          return (
            <article key={slug}>
              <div className="img-container">
                {imageData && (
                  <GatsbyImage image={imageData} alt={name} className="img" />
                )}
              </div>
              <h3>{name}</h3>
              <Link to={`/products/${slug}`} className="btn">
                see product
              </Link>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  .title {
    margin-bottom: 2.5rem;
  }
  .container {
    display: grid;
    grid-gap: 3.5rem;
  }
  article {
    h3 {
      padding: 2rem 0;
    }
  }
  .img-container {
    display: flex;
    justify-content: center;
    background-color: var(--gray);
  }
  .img {
    max-width: 40%;
  }

  @media screen and (min-width: 768px) {
    .title {
      margin-bottom: 4rem;
    }
    .container {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.8rem;
    }
    .img {
      max-width: none;
      min-height: 20rem;
    }
    article {
      h3 {
        padding: 2.5rem 0 2rem;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .container {
      grid-gap: 2rem;
    }
  }
`

export default Featured
