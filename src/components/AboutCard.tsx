import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const AboutCard = () => {
  return (
    <Wrapper className="section">
      <StaticImage
        src="../images/staticImages/about.jpg"
        alt="customer"
        placeholder="blurred"
        className="img"
      />
      <article>
        <div className="info">
          <h2>
            Bringing you the <span>best </span>
            audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 300px auto;
  text-align: center;
  margin-bottom: 7.5rem;
  article {
    margin-top: 2.5rem;
    p {
      padding: 2rem 1rem 0;
      opacity: 50%;
    }
    span {
      color: var(--peach);
    }
  }
  .img {
    border-radius: var(--radius);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 992px) {
    margin-bottom: 12.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 36.75rem;
    .img {
      grid-area: 1 / 2 / 2 / 3;
    }
    article {
      grid-area: 1 / 1 / 2 / 2;
      text-align: left;
      display: flex;
      align-items: center;
      div {
        max-width: 28rem;
      }
      p {
        padding: 2rem 0 0;
      }
    }
  }
`

export default AboutCard
