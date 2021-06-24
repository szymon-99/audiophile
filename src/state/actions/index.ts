import { CartActionType, LayoutActionType } from "../action-types"
import { IProduct } from "../../../types"
export type value = "increase" | "decrease"

export interface AddToCartAction {
  type: CartActionType.ADD_TO_CART
  payload: {
    product: IProduct
    amount: number
  }
}

export interface RemoveCartItemAction {
  type: CartActionType.REMOVE_CART_ITEM
  payload: {
    id: string
  }
}

export interface ToggleCartItemAmountAction {
  type: CartActionType.TOGGLE_CART_ITEM_AMOUNT
  payload: {
    id: string
    value: value
  }
}

export interface ClearCartAction {
  type: CartActionType.CLEAR_CART
}

export interface CountCartTotalsAction {
  type: CartActionType.COUNT_CART_TOTALS
}

export interface ToggleCartAction {
  type: LayoutActionType.TOGGLE_CART
}

export interface ToggleSidebarAction {
  type: LayoutActionType.TOGGLE_SIDEBAR
}
export interface OpenModalAction {
  type: LayoutActionType.OPEN_MODAL
}
export interface CloseModalAction {
  type: LayoutActionType.CLOSE_MODAL
}
export interface OpenSummaryAction {
  type: LayoutActionType.OPEN_SUMMARY
}
export interface CloseSummaryAction {
  type: LayoutActionType.CLOSE_SUMMARY
}

export type CartAction =
  | AddToCartAction
  | RemoveCartItemAction
  | ToggleCartItemAmountAction
  | ClearCartAction
  | CountCartTotalsAction

export type LayoutAction =
  | ToggleSidebarAction
  | OpenModalAction
  | CloseModalAction
  | ToggleCartAction
  | OpenSummaryAction
  | CloseSummaryAction
