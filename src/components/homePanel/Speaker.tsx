import React, { FC } from "react"
import styled from "styled-components"
import mobile from "../../images/homePanel/speaker-mobile.jpg"
import tablet from "../../images/homePanel/speaker-tablet.jpg"
import desktop from "../../images/homePanel/speaker-desktop.jpg"
import { Link } from "gatsby"

const Speaker: FC = () => {
  return (
    <Wrapper>
      <div>
        <h4>ZX7 SPEAKER</h4>
        <Link className="btn secondary" to="/products/zx-7">
          see product
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  border-radius: var(--radius);
  background-image: url(${mobile});
  background-position: center;
  background-size: cover;
  display: grid;
  align-items: center;
  height: 20rem;
  div {
    margin-left: 1.5rem;
    h4 {
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    background-image: url(${tablet});
    div {
      margin-left: 4rem;
    }
  }
  @media screen and (min-width: 992px) {
    background-image: url(${desktop});
    div {
      margin-left: 6rem;
    }
  }
`
export default Speaker
