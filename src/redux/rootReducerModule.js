import { combineReducers } from 'redux';
import menuReducer from './menu/menuReducer';
import entityReducer from './menu/entityReducer';

export default combineReducers({
  entities: entityReducer,
  menu: menuReducer,
});
