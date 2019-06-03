import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
const BASE_PATH = '/menu';

const getAllMenuItems = async () => {
  const res = await axios.get(BASE_PATH);

  return res.data;
};

const getMenuItemById = async id => {
  const res = await axios.get(`${BASE_PATH}/${id}`);

  return res.data;
};

const deleteMenuItem = async id => {
  const res = await axios.delete(`${BASE_PATH}/${id}`);

  return res.status === 200;
};

const addMenuItem = async item => {
  const res = await axios.post(BASE_PATH, item);

  return res.data;
};

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
