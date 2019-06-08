import React from 'react';
import MenuItem from '../modules/menu/MenuItemContainer';

const MenuItemPage = ({ match, location, history }) => (
  <div>
    <MenuItem id={match.params.id} location={location} history={history} />
  </div>
);

export default MenuItemPage;
