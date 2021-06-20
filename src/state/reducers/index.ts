import { combineReducers } from "redux"
import CartReducer from "./cartReducer"
import LayoutReducer from "./layoutReducer"

export const reducers = combineReducers({
  cart: CartReducer,
  layout: LayoutReducer,
})

export type RootState = ReturnType<typeof reducers>
