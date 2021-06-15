import React, { FC } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { SecondaryButton } from "../../styles/Button"

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
          <SecondaryButton to="/products/yx-1">see product</SecondaryButton>
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
    .panel {
      margin-left: 1.5rem;
      h4 {
        margin-bottom: 2rem;
      }
    }
  }
`
export default Earphones
