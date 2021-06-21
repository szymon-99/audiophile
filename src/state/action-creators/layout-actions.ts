import { ActionType } from "../action-types"
import {
  ToggleCartAction,
  OpenModalAction,
  CloseModalAction,
  ToggleSidebarAction,
} from "../actions"

export const toggleCart = (): ToggleCartAction => {
  return { type: ActionType.TOGGLE_CART }
}

export const toggleSidebar = (): ToggleSidebarAction => {
  return {
    type: ActionType.TOGGLE_SIDEBAR,
  }
}

export const openModal = (): OpenModalAction => {
  return {
    type: ActionType.OPEN_MODAL,
  }
}

export const closeModal = (): CloseModalAction => {
  return {
    type: ActionType.CLOSE_MODAL,
  }
}
