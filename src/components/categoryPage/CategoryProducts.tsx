import React, { FC } from "react"
import styled from "styled-components"
import { CategoryProduct } from "../../../types"
import { sortProducts } from "../../utils/helpers"
import Product from "./Product"

interface CategoryProductsProps {
  products: CategoryProduct[]
}

const CategoryProducts: FC<CategoryProductsProps> = ({ products }) => {
  const productsOrder = sortProducts(products)

  return (
    <Wrapper className="section">
      {productsOrder.map((product, index) => {
        if (index % 2 === 1) {
          return <Product key={product.id} product={product} reverse />
        }
        return <Product key={product.id} product={product} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-gap: 7.5rem;

  @media screen and (min-width: 992px) {
    grid-gap: 10rem;
  }
`

export default CategoryProducts
