import React from 'react';
import DishesMenuContainer from '../modules/menu/DishesMenuContainer';

const MenuPage = ({ location, history }) => (
  <div>
    <DishesMenuContainer location={location} history={history} />
  </div>
);

export default MenuPage;
