import React from 'react';
import AddItemContainer from '../modules/menu/AddItem/AddItemContainer';

const AddMenuItemPage = ({ history, location }) => (
  <div>
    <h2>AddMenuItem Page</h2>
    <AddItemContainer history={history} location={location} />
  </div>
);

export default AddMenuItemPage;
