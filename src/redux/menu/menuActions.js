import { normalize } from 'normalizr';
import types from './menuActionTypes';

import MenuSchema from '../schemas/MenuSchema';

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = items => {
  const normalizedMenu = normalize(items, [MenuSchema]);

  return {
    type: types.FETCH_SUCCESS,
    payload: {
      ids: {
        menu: Object.keys(normalizedMenu.entities.menu),
      },
      entities: normalizedMenu.entities,
    },
  };
};

// const addItemSuccess = item => ({
//   type: types.ADD_ITEM_SUCCESS,
//   payload: item,
// });

const addItemSuccess = item => ({
  type: types.ADD_ITEM_SUCCESS,
  payload: {
    ids: {
      menu: item.id,
    },
    entities: {
      menu: {
        [item.id]: { ...item },
      },
    },
  },
});

const deleteItemSuccess = id => ({
  type: types.DELETE_ITEM_SUCCESS,
  payload: id.toString(),
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
