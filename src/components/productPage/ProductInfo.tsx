import React, { FC } from "react"
import { FeatureDescription, IncludedItem } from "../../../types"
import styled from "styled-components"

interface InfoProps {
  info: {
    included: IncludedItem[]
    features: FeatureDescription[]
  }
}

const ProductInfo: FC<InfoProps> = ({ info }) => {
  const { included, features } = info
  return (
    <Wrapper className="section">
      <div className="desc">
        <h3>features</h3>
        {features.map((item, i) => {
          return <p key={i}>{item.desc}</p>
        })}
      </div>
      <div className="items">
        <h3>in the box</h3>
        <div>
          {included.map((item, i) => {
            return (
              <div key={i} className="item">
                <span>{item.quantity}x</span> <p>{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 5.5rem;
  .desc {
    display: grid;
    grid-gap: 1.5rem;
    p {
      opacity: 50%;
    }
  }
  .items {
    display: grid;
    h3 {
      margin-bottom: 2rem;
    }
    .item {
      display: flex;
      margin-bottom: 0.5rem;
      span {
        color: var(--peach);
        margin-right: 1.5rem;
        font-weight: var(--bold);
      }
      p {
        opacity: 50%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .items {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
    grid-gap: 7.81rem;
    .items {
      grid-template-columns: initial;
      grid-template-rows: auto 1fr;
    }
  }
`

export default ProductInfo
