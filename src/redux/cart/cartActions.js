import * as types from './cartActionTypes';

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: {
    id,
  },
});

const increaseAmount = id => ({
  type: types.INCREASE_AMOUNT,
  payload: {
    id,
  },
});

const decreaseAmount = id => ({
  type: types.DECREASE_AMOUNT,
  payload: {
    id,
  },
});

const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export default { addToCart, increaseAmount, decreaseAmount, removeFromCart };
