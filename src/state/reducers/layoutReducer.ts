import { Action } from "../actions"
import { ActionType } from "../action-types"

interface LayoutState {
  isNavOpen: boolean
  isCartOpen: boolean
  showModal: boolean
}

const initialState: LayoutState = {
  isCartOpen: false,
  isNavOpen: false,
  showModal: false,
}

const reducer = (state = initialState, action: Action): LayoutState => {
  if (action.type === ActionType.TOGGLE_SIDEBAR) {
    return { ...state, isNavOpen: !state.isNavOpen }
  }
  if (action.type === ActionType.TOGGLE_CART) {
    return { ...state, isCartOpen: !state.isCartOpen }
  }
  if (action.type === ActionType.CLOSE_MODAL) {
    return { ...state, showModal: false }
  }
  if (action.type === ActionType.OPEN_MODAL) {
    return { ...state, showModal: true }
  }
  return state
}

export default reducer
