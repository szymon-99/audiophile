import React, { FC } from "react"
import styled from "styled-components"

interface HeroProps {
  category: string
}

const CategoryHero: FC<HeroProps> = ({ category }) => {
  return (
    <Wrapper>
      <div className="section">
        <h2>{category}</h2>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--black);
  .section {
    display: grid;
    place-items: center;
    height: 6.375rem;
    h2 {
      color: var(--white);
    }
  }
  @media screen and (min-width: 768px) {
    .section {
      height: 15rem;
    }
  }
`

export default CategoryHero
