import React from 'react';
import MenuItem from '../modules/menu/MenuItem/MenuItemContainer';

const MenuItemPage = ({ match, location, history }) => (
  <div>
    <MenuItem id={match.params.id} location={location} history={history} />
  </div>
);

export default MenuItemPage;
