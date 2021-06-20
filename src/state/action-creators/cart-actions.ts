import { IProduct } from "../../../types"
import { ActionType } from "../action-types"
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
    type: ActionType.ADD_TO_CART,
    payload: {
      product,
      amount,
    },
  }
}

export const removeCartItem = (id: string): RemoveCartItemAction => {
  return {
    type: ActionType.REMOVE_CART_ITEM,
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
    type: ActionType.TOGGLE_CART_ITEM_AMOUNT,
    payload: {
      id,
      value,
    },
  }
}

export const clearCart = (): ClearCartAction => {
  return {
    type: ActionType.CLEAR_CART,
  }
}

export const countTotals = (): CountCartTotalsAction => {
  return {
    type: ActionType.COUNT_CART_TOTALS,
  }
}
