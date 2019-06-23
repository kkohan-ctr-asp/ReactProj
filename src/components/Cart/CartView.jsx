import React from 'react';
import s from './Cart.module.css';

const CartView = ({ products = [], removeFromCart }) =>
  products.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {products.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button type="button">+</button>
              {amount}
              <button type="button">-</button>
            </td>
            <td>
              <button type="button" onClick={() => removeFromCart(id)}>
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default CartView;
