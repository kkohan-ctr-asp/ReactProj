import { combineReducers } from 'redux';
import types from './menuActionTypes';

function menuReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.ADD_ITEM_SUCCESS:
      return [payload, ...state];

    case types.DELETE_ITEM_SUCCESS:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
}

function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_CATEGORIES_SUCCESS:
      return payload;

    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.DELETE_ITEM_SUCCESS:
    case types.ADD_ITEM_SUCCESS:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: menuReducer,
  categories: categoriesReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
