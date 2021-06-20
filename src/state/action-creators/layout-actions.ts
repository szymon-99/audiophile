import { ActionType } from "../action-types"
import { ToggleCartAction, ToggleSidebarAction } from "../actions"

export const toggleCart = (): ToggleCartAction => {
  return { type: ActionType.TOGGLE_CART }
}

export const toggleSidebar = (): ToggleSidebarAction => {
  return {
    type: ActionType.TOGGLE_SIDEBAR,
  }
}
