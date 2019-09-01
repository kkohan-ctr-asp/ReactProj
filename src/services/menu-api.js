import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
const MENU_PATH = '/menu';
const CATEGORY_PATH = '/categories';

export const getAllMenuItems = async () => {
  const res = await axios.get(MENU_PATH);

  return res.data;
};

export const getMenuItemById = async id => {
  const res = await axios.get(`${MENU_PATH}/${id}`);

  return res.data;
};

export const deleteMenuItem = async id => {
  const res = await axios.delete(`${MENU_PATH}/${id}`);

  return res.status === 200;
};

export const addMenuItem = async item => {
  const res = await axios.post(MENU_PATH, item);

  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get(CATEGORY_PATH);
  return res.data;
};

export const getMenuItemsWithCategory = async category => {
  let res;
  if (category !== 'all') {
    res = await axios.get(`${MENU_PATH}?category=${category}`);
  } else {
    res = await axios.get(MENU_PATH);
  }
  return res.data;
};
