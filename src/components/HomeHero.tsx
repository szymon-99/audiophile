import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "../styles/Button"
import { graphql, useStaticQuery } from "gatsby"
import mobile from "../images/homeHero/mobile.jpg"
import desktop from "../images/homeHero/desktop.jpg"
import tablet from "../images/homeHero/tablet.jpg"

interface HomeData {
  name: string
  type: string
  desc: string

  slug: string
}
interface HomeQuery {
  data: {
    nodes: HomeData[]
  }
}
export const query = graphql`
  {
    data: allStrapiHomeHero {
      nodes {
        name
        type
        desc
        slug
      }
    }
  }
`

const HomeHero = () => {
  const { data } = useStaticQuery<HomeQuery>(query)
  const { name, type, desc, slug } = data.nodes[0]

  return (
    <Wrapper>
      <div className="hero">
        <div className="info">
          <p className="subtitle">new product</p>
          <div className="title">
            <h1>{name}</h1>
            <h1>{type}</h1>
          </div>
          <p className="desc">{desc}</p>
          <PrimaryButton to={`/products/${slug}`}>see product</PrimaryButton>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--black);
  height: calc(37.5rem - 5.75rem);
  background-image: url(${mobile});
  background-position: bottom;
  background-size: cover;
  margin-bottom: 2.5rem;
  .hero {
    display: grid;
    place-items: center;
    height: 100%;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .info {
    width: 90vw;
    display: grid;
    place-items: center;
    max-width: var(--max-width);
    text-align: center;
  }
  .subtitle {
    color: var(--white);
    opacity: 50%;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .title {
    color: var(--white);
    margin-bottom: 1.5rem;
  }
  .desc {
    color: var(--white);
    opacity: 75%;
    padding: 0 2rem 1.75rem;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${tablet});
    height: calc(45.625rem - 5.75rem);
    margin-bottom: 6rem;
    .subtitle {
      margin-bottom: 1.5rem;
    }
    .desc {
      padding: initial;
      margin-bottom: 2.5rem;
    }
    .info {
      max-width: 50vw;
    }
  }
  @media screen and (min-width: 992px) {
    background-image: url(${desktop});
    margin-bottom: 7.5rem;
    .hero {
      justify-items: left;
    }
    .info {
      place-items: start;
      text-align: left;
      max-width: 22.5rem;
    }
  }
`

export default HomeHero
