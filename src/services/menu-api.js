import axios from 'axios';

const BASE_URL = 'http://localhost:3001/menu';

const getAllMenuItems = async () => {
  const res = await axios.get(BASE_URL);

  return res.data;
};

const getMenuItemById = async id => {
  const res = await axios.get(`${BASE_URL}/${id}`);

  return res.data;
};

const deleteMenuItem = async id => {
  const res = await axios.delete(`${BASE_URL}/${id}`);

  return res.status === 200;
};

const addMenuItem = async item => {
  const res = await axios.post(BASE_URL, item);

  return res.data;
};

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };
