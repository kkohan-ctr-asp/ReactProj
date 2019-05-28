import React, { Component } from 'react';
import OrderTable from './OrderTable';
import * as API from '../services/orderHistory-api';
import OrderHistoryForm from './OrderHistoryForm';

export default class OrderHistory extends Component {
  state = { orders: [] };

  async componentDidMount() {
    const orders = await API.getOrderHistory();

    this.setState({ orders });
  }

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
    const { orders } = this.state;
    return (
      <div>
        <OrderHistoryForm onSubmit={this.handleAddOrder} />
        <OrderTable
          orders={orders}
          handleDeleteOrder={this.handleDeleteOrder}
        />
      </div>
    );
  }
}
