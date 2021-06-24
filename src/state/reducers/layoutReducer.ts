import { LayoutAction } from "../actions"
import { LayoutActionType } from "../action-types"

interface LayoutState {
  isNavOpen: boolean
  isCartOpen: boolean
  showModal: boolean
  showSummary: boolean
}

const initialState: LayoutState = {
  isCartOpen: false,
  isNavOpen: false,
  showModal: false,
  showSummary: false,
}

const reducer = (state = initialState, action: LayoutAction): LayoutState => {
  if (action.type === LayoutActionType.TOGGLE_SIDEBAR) {
    return { ...state, isNavOpen: !state.isNavOpen }
  }
  if (action.type === LayoutActionType.TOGGLE_CART) {
    return { ...state, isCartOpen: !state.isCartOpen }
  }
  if (action.type === LayoutActionType.CLOSE_MODAL) {
    return { ...state, showModal: false }
  }
  if (action.type === LayoutActionType.OPEN_MODAL) {
    return { ...state, showModal: true }
  }
  if (action.type === LayoutActionType.OPEN_SUMMARY) {
    return { ...state, showSummary: true }
  }
  if (action.type === LayoutActionType.CLOSE_SUMMARY) {
    return { ...state, showSummary: false }
  }
  return state
}

export default reducer
