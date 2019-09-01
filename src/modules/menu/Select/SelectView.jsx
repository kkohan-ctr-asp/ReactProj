import React from 'react';

import Select from 'react-select';

const SelectView = ({
  categoryValue,
  categoriesOptions,
  onCategoryChange,
  onCategoryReset,
}) => (
  <>
    <Select
      value={categoryValue}
      options={categoriesOptions}
      onChange={onCategoryChange}
    />
    <div>Current category: {categoryValue.value}</div>
    {categoryValue.value !== 'all' && (
      <button type="button" onClick={onCategoryReset}>
        Clear category
      </button>
    )}
  </>
);

export default SelectView;
