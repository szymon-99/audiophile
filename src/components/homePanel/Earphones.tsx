import React, { FC } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Earphones: FC = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/homePanel/earphones.jpg"
        alt="YX1 EARPHONES"
        placeholder="blurred"
        className="img"
      />
      <div className="info">
        <div className="panel">
          <h4>YX1 EARPHONES</h4>
          <Link className="btn secondary" to="/products/yx-1-wireless">
            see product
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .img,
  .info {
    border-radius: var(--radius);
  }
  overflow: hidden;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: 12.5rem 12.5rem;
  .info {
    background-color: var(--gray);
    display: grid;
    align-items: center;
  }
  .panel {
    margin-left: 1.5rem;
    h4 {
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20rem;
    grid-gap: 1rem;
    .panel {
      margin-left: 2.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    grid-gap: 2rem;
    .panel {
      margin-left: 6rem;
    }
  }
`
export default Earphones
