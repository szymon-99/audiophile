import { LayoutActionType } from "../action-types"
import {
  ToggleCartAction,
  OpenModalAction,
  CloseModalAction,
  ToggleSidebarAction,
  OpenSummaryAction,
  CloseSummaryAction,
} from "../actions"

export const toggleCart = (): ToggleCartAction => {
  return { type: LayoutActionType.TOGGLE_CART }
}

export const toggleSidebar = (): ToggleSidebarAction => {
  return {
    type: LayoutActionType.TOGGLE_SIDEBAR,
  }
}

export const openModal = (): OpenModalAction => {
  return {
    type: LayoutActionType.OPEN_MODAL,
  }
}

export const closeModal = (): CloseModalAction => {
  return {
    type: LayoutActionType.CLOSE_MODAL,
  }
}
export const openSummary = (): OpenSummaryAction => {
  return {
    type: LayoutActionType.OPEN_SUMMARY,
  }
}
export const closeSummary = (): CloseSummaryAction => {
  return {
    type: LayoutActionType.CLOSE_SUMMARY,
  }
}
