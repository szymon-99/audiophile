import { IProduct } from "../../../types"
import { CartActionType } from "../action-types"
import {
  AddToCartAction,
  RemoveCartItemAction,
  ToggleCartItemAmountAction,
  ClearCartAction,
  CountCartTotalsAction,
  value,
} from "../actions"

export const addToCart = (
  amount: number,
  product: IProduct
): AddToCartAction => {
  return {
    type: CartActionType.ADD_TO_CART,
    payload: {
      product,
      amount,
    },
  }
}

export const removeCartItem = (id: string): RemoveCartItemAction => {
  return {
    type: CartActionType.REMOVE_CART_ITEM,
    payload: {
      id,
    },
  }
}

export const toggleAmount = (
  id: string,
  value: value
): ToggleCartItemAmountAction => {
  return {
    type: CartActionType.TOGGLE_CART_ITEM_AMOUNT,
    payload: {
      id,
      value,
    },
  }
}

export const clearCart = (): ClearCartAction => {
  return {
    type: CartActionType.CLEAR_CART,
  }
}

export const countTotals = (): CountCartTotalsAction => {
  return {
    type: CartActionType.COUNT_CART_TOTALS,
  }
}
