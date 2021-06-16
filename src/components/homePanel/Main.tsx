import React, { FC } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import circles from "../../images/homePanel/circles.svg"
import { SecondaryButton } from "../../styles/Button"

const Main: FC = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../images/homePanel/main.png"
        alt="ZX9 SPEAKER"
        placeholder="blurred"
        className="img"
      />
      <div className="info">
        <h1>ZX9 SPEAKER</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button to="/products/zx-9">see product</Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: var(--peach);
  border-radius: var(--radius);
  background-image: url(${circles});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  grid-row-gap: 2rem;
  place-items: center;
  padding: 3.43rem 1.5rem;
  overflow: hidden;
  .img {
    width: 50%;
    max-width: 12.5rem;
  }
  .info {
    text-align: center;
    max-width: 21.875rem;
  }
  h1 {
    color: var(--white);
  }
  p {
    color: var(--white);
    opacity: 75%;
    margin-top: 1.5rem;
  }
  a {
    margin-top: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    background-position: bottom;
    background-size: 120%;
    grid-row-gap: 4rem;
    padding: 4rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    padding: 0;
    height: 35rem;
    background-size: 80%;
    background-position: top left -50%;
    .img {
      max-width: none;
      width: 60%;
      grid-column: 1 / 8;
      align-self: end;
      transform: translateY(2%);
    }
    .info {
      grid-column: 8 / -1;
      text-align: left;
    }
  }
`
const Button = styled(SecondaryButton)`
  background-color: var(--black);
  color: var(--white);
  :hover {
    background-color: var(--dark-gray);
    box-shadow: none;
  }
`

export default Main
