import { Action } from "../actions"
import { ActionType } from "../action-types"
import { CartProduct } from "../../../types"

interface CartState {
  products: CartProduct[]
  totalAmount: number
  totalPrice: number
  shipping: number
}

const initialState: CartState = {
  products: [],
  totalAmount: 0,
  totalPrice: 0,
  shipping: 5000,
}

const reducer = (state = initialState, action: Action): CartState => {
  if (action.type === ActionType.CLEAR_CART) {
    return { ...state, products: [] }
  }
  if (action.type === ActionType.ADD_TO_CART) {
    const { product, amount } = action.payload
    const isProductInCart = state.products.find(item => item.id === product.id)
    if (!isProductInCart) {
      const { name, id, image, price } = product
      const newProduct: CartProduct = {
        name,
        id,
        image,
        price,
        amount,
      }
      return { ...state, products: [...state.products, newProduct] }
    }
    const updateProducts = state.products.map(item => {
      if (item.id === product.id) {
        return { ...item, amount: (item.amount += amount) }
      }
      return item
    })
    return { ...state, products: updateProducts }
  }
  if (action.type === ActionType.REMOVE_CART_ITEM) {
    const { id } = action.payload
    const updateProducts = state.products.filter(item => item.id !== id)
    return { ...state, products: updateProducts }
  }
  if (action.type === ActionType.COUNT_CART_TOTALS) {
    const { totalAmount, totalPrice } = state.products.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        total.totalAmount += amount
        total.totalPrice += amount * price
        return total
      },
      { totalAmount: 0, totalPrice: 0 }
    )
    return { ...state, totalAmount, totalPrice }
  }
  if (action.type === ActionType.TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const updateProducts = state.products.map(item => {
      if (item.id !== id) return item
      const { amount } = item
      let tempAmount: number
      if (value === "increase") {
        tempAmount = amount + 1
      } else {
        tempAmount = amount - 1
        //need to handle when amount === 0
        // if(tempAmount === 0) return
      }
      return { ...item, amount: tempAmount }
    })
    return { ...state, products: updateProducts }
  }
  return state
}

export default reducer
