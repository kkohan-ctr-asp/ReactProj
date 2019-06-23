import * as api from '../../services/menu-api';
import actions from './menuActions';

// const fetchItems = () => async dispatch => {
//   dispatch(actions.fetchRequest());

//   try {
//     const items = await api.getAllMenuItems();

//     dispatch(actions.fetchSuccess(items));
//   } catch (error) {
//     dispatch(actions.fetchError(error));
//   }
// };

const fetchItems = category => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const items = await api.getMenuItemsWithCategory(category);

    dispatch(actions.fetchSuccess(items));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchCategories = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const items = await api.getCategories();

    dispatch(actions.fetchCategoriesSuccess(items));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addItem = item => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await api.addMenuItem(item);

    dispatch(actions.addItemSuccess(response));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const deleteItem = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const res = await api.deleteMenuItem(id);
    if (res) {
      dispatch(actions.deleteItemSuccess(id));
    }
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchItemById = id => async dispatch => {
  try {
    const res = await api.getMenuItemById(id);

    dispatch(actions.fetchItemSuccess(res));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default {
  fetchCategories,
  fetchItemById,
  fetchItems,
  addItem,
  deleteItem,
};
