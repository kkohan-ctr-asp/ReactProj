import React from 'react';

const OrderHistory = ({ orders }) => (
  <table>
    <thead>
      <th>Date</th>
      <th>Price</th>
      <th>Delivery address</th>
      <th>Rating</th>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.id}>
          <td>{order.date}</td>
          <td>{order.price}</td>
          <td>{order.address}</td>
          <td>{order.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderHistory;
