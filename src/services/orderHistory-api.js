import axios from 'axios';

const BASE_URL = 'http://localhost:3001/order-history';

const getOrderHistory = async () => {
  const res = await axios.get(BASE_URL);

  return res.data;
};

const getOrderById = async id => {
  const res = await axios.get(`${BASE_URL}/${id}`);

  return res.data;
};

const deleteOrder = async id => {
  const res = await axios.delete(`${BASE_URL}/${id}`);

  return res.status;
};

const addOrder = async order => {
  const res = await axios.post(`${BASE_URL}`, order);

  return res.data;
};

export { getOrderHistory, getOrderById, deleteOrder, addOrder };
