import { ActionType } from "../action-types"
import { IProduct } from "../../../types"
export type value = "increase" | "decrease"

export interface AddToCartAction {
  type: ActionType.ADD_TO_CART
  payload: {
    product: IProduct
    amount: number
  }
}

export interface RemoveCartItemAction {
  type: ActionType.REMOVE_CART_ITEM
  payload: {
    id: string
  }
}

export interface ToggleCartItemAmountAction {
  type: ActionType.TOGGLE_CART_ITEM_AMOUNT
  payload: {
    id: string
    value: value
  }
}

export interface ClearCartAction {
  type: ActionType.CLEAR_CART
}

export interface CountCartTotalsAction {
  type: ActionType.COUNT_CART_TOTALS
}

export interface ToggleCartAction {
  type: ActionType.TOGGLE_CART
}

export interface ToggleSidebarAction {
  type: ActionType.TOGGLE_SIDEBAR
}
export interface OpenModalAction {
  type: ActionType.OPEN_MODAL
}
export interface CloseModalAction {
  type: ActionType.CLOSE_MODAL
}

export type Action =
  | AddToCartAction
  | RemoveCartItemAction
  | ToggleCartItemAmountAction
  | ClearCartAction
  | CountCartTotalsAction
  | ToggleCartAction
  | ToggleSidebarAction
  | OpenModalAction
  | CloseModalAction
