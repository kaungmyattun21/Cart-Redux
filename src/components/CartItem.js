import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../actions";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({ img, title, price, amount, remove, increase, decrease }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>remove</button>
      </div>
      <div className="cart-item-container">
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase()}>
          <AddIcon />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease()}>
          <RemoveIcon />
        </button>
      </div>
      
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } })
    
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
