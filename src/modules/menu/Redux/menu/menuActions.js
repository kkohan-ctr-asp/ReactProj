import types from './menuActionTypes';

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = items => ({
  type: types.FETCH_SUCCESS,
  payload: items,
});

const addItemSuccess = item => ({
  type: types.ADD_ITEM_SUCCESS,
  payload: item,
});

const deleteItemSuccess = id => ({
  type: types.DELETE_ITEM_SUCCESS,
  payload: id,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const fetchCategoriesSuccess = items => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  payload: items,
});

export default {
  fetchCategoriesSuccess,

  addItemSuccess,
  deleteItemSuccess,
  changeFilter,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
