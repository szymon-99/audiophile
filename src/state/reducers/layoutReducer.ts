import { Action } from "../actions"
import { ActionType } from "../action-types"

interface LayoutState {
  isNavOpen: boolean
  isCartOpen: boolean
}

const initialState: LayoutState = {
  isCartOpen: false,
  isNavOpen: false,
}

const reducer = (state = initialState, action: Action): LayoutState => {
  if (action.type === ActionType.TOGGLE_SIDEBAR) {
    return { ...state, isNavOpen: !state.isNavOpen }
  }
  if (action.type === ActionType.TOGGLE_CART) {
    return { ...state, isCartOpen: !state.isCartOpen }
  }
  return state
}

export default reducer
