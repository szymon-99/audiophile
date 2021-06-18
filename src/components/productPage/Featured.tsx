import React, { FC } from "react"
import styled from "styled-components"
import { FeaturedProduct } from "../../../types"

interface FeaturedProps {
  featured: FeaturedProduct
}

const Featured: FC<FeaturedProps> = ({ featured }) => {
  return <Wrapper>You may also like</Wrapper>
}

const Wrapper = styled.section``

export default Featured
