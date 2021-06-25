import { CartAction } from "../actions"
import { CartActionType } from "../action-types"
import { CartProduct } from "../../../types"

interface CartState {
  products: CartProduct[]
  totalAmount: number
  totalPrice: number
  shipping: number
}

const getLocalStorage = (): CartProduct[] => {
  if (typeof window !== "undefined") {
    const products = window.localStorage.getItem("products")
    if (products) return JSON.parse(products)
  }
  return []
}

const initialState: CartState = {
  products: getLocalStorage(),
  totalAmount: 0,
  totalPrice: 0,
  shipping: 5000,
}

const reducer = (state = initialState, action: CartAction): CartState => {
  if (action.type === CartActionType.CLEAR_CART) {
    return { ...state, products: [] }
  }
  if (action.type === CartActionType.ADD_TO_CART) {
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
  if (action.type === CartActionType.REMOVE_CART_ITEM) {
    const { id } = action.payload
    const updateProducts = state.products.filter(item => item.id !== id)
    return { ...state, products: updateProducts }
  }
  if (action.type === CartActionType.COUNT_CART_TOTALS) {
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
  if (action.type === CartActionType.TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const updateProducts = state.products.map(item => {
      if (item.id !== id) return item
      const { amount } = item
      let tempAmount: number
      if (value === "increase") {
        tempAmount = amount + 1
      } else {
        tempAmount = amount - 1
      }
      return { ...item, amount: tempAmount }
    })
    return { ...state, products: updateProducts }
  }
  return state
}

export default reducer
