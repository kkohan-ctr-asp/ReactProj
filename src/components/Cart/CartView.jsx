import React from 'react';
import s from './Cart.module.css';

const CartView = ({
  dishes = [],
  removeFromCart,
  increaseItemAmount,
  decreaseItemAmount,
}) =>
  dishes.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {dishes.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button type="button" onClick={() => increaseItemAmount(id)}>
                +
              </button>
              {amount}
              <button type="button" onClick={() => decreaseItemAmount(id)}>
                -
              </button>
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
