import React from 'react';
import { Link } from 'react-router-dom';
import s from './CartLink.module.css';

const CartView = ({ amount }) => (
  <div className={s.container}>
    <Link to="/cart">
      <img
        src="https://image.flaticon.com/icons/svg/2/2772.svg"
        width="40"
        alt="cart"
      />
      <span className={s.amount}>{amount}</span>
    </Link>
  </div>
);

export default CartView;
