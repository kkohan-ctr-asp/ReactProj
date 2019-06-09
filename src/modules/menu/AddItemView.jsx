import React from 'react';

const AddItemView = ({ onAdd }) => (
  <>
    <form onSubmit={onAdd}>
      <button type="submit">Add item</button>
    </form>
  </>
);

export default AddItemView;
