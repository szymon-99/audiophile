import React, { FC } from "react"
import styled from "styled-components"
import { CartProduct } from "../../types"
import CartItem from "./CartItem"

interface CartProductsProps {
  products: CartProduct[]
  checkout?: true
}

const CartProducts: FC<CartProductsProps> = ({ products, checkout }) => {
  return (
    <Wrapper>
      {products.map(item => (
        <CartItem key={item.id} {...item} checkout={checkout} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: start;
  height: 15rem;
  grid-gap: 1.5rem;
  overflow: scroll;
`

export default CartProducts
