import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {...state, cart: []}
      break;
    case DECREASE:
      console.log('u decrease amount');
      break
    case INCREASE:
      console.log('u increase  amount');
      break
    case REMOVE:
      return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)}
      break
    default:
      
  }
  return state
  
}

export default reducer