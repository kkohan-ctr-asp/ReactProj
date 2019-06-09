import React from 'react';

const Filter = ({ value, onChange }) => (
  <>
    <label htmlFor="filter">Filter</label>
    <input type="text" id="filter" value={value} onChange={onChange} />
  </>
);

export default Filter;
