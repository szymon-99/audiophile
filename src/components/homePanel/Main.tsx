import React, { FC } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import circles from "../../images/homePanel/circles.svg"

const Main: FC = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/homePanel/main.png"
        alt="ZX9 SPEAKER"
        placeholder="blurred"
        className="img"
      />
      <h1>ZX9 SPEAKER</h1>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-image: url(${circles});
  background-position: top;
  display: grid;
  place-items: center;
  .img {
    width: 50%;
  }
`

export default Main
