import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {...state, cart: []}
      break;
    case DECREASE:
      let tempCartMinus = []
      if (action.payload.amount === 1) {
        tempCartMinus = state.cart.filter(cartItem => cartItem.id !== action.payload.id)
      } else {
        tempCartMinus = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = {...cartItem, amount: cartItem.amount - 1}
        }
          return cartItem
        })
      }
      return {...state, cart: tempCartMinus}
      break
    case INCREASE:
      let tempCartPlus = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = {...cartItem, amount: cartItem.amount + 1}
        }
        return cartItem
      })
      return {...state, cart: tempCartPlus }
      break
    case REMOVE:
      return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)}
      break
    default:
      
  }
  return state
  
}

export default reducer