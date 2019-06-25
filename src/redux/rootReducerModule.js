import { combineReducers } from 'redux';
import menuReducer from './menu/menuReducer';
import entityReducer from './menu/entityReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
  entities: entityReducer,
  menu: menuReducer,
  cart: cartReducer,
});
