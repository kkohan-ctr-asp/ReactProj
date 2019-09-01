import React, { Component } from 'react';
import OrderTable from './OrderTable';
import * as API from '../../services/orderHistory-api';
import OrderHistoryForm from './OrderHistoryForm';
import Modal from '../Modal/Modal';

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isModalOpen: false,
    orderForModal: '',
    isLoading: false,
  };

  async componentDidMount() {
    const orders = await API.getOrderHistory();

    this.setState({ orders });
  }

  handleOpenModal = async id => {
    this.setState({ isLoading: true });
    const order = await API.getOrderById(id);
    const orderForModal = JSON.stringify(order);
    this.setState({ orderForModal, isModalOpen: true, isLoading: false });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleAddOrder = async (price, address, rating) => {
    const order = {
      date: Date.now(),
      price,
      address,
      rating,
    };

    const res = await API.addOrder(order);

    this.setState(prevState => ({
      orders: [...prevState.orders, res],
    }));
  };

  handleDeleteOrder = async id => {
    const res = await API.deleteOrder(id);
    if (res === 200) {
      this.setState(prevState => ({
        orders: prevState.orders.filter(order => order.id !== id),
      }));
    }
  };

  render() {
    const { orders, isModalOpen, orderForModal, isLoading } = this.state;
    return (
      <div>
        {isLoading && <div>Loading</div>}
        <OrderHistoryForm onSubmit={this.handleAddOrder} />
        <OrderTable
          orders={orders}
          handleDeleteOrder={this.handleDeleteOrder}
          handleOpenModal={this.handleOpenModal}
        />

        {isModalOpen && (
          <Modal onClose={this.handleCloseModal} value={orderForModal} />
        )}
      </div>
    );
  }
}
