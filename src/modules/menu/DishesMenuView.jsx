import React from 'react';
import { Link } from 'react-router-dom';

import Select from 'react-select';
import Filter from './Filter';
import MenuCard from './MenuCard';
import routes from '../../configs/routes';

const DishesMenu = ({
  dishes,
  filter,
  onFilterChange,
  onDelete,
  onShowMoreInfo,
  categoriesOptions,
  onCategoryChange,
  categoryValue,
  location,
  onCategoryReset,
}) => {
  return (
    <div>
      <Filter value={filter} onChange={onFilterChange} />
      <Link
        to={{
          pathname: `${routes.menu.addMenuItem}`,
          state: { from: location },
        }}
      >
        Add menu item
      </Link>

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
      <section>
        {dishes.map(dish => (
          <li key={dish.id}>
            <Link
              to={{
                pathname: `${routes.menu.root}/${dish.id}`,
                state: { from: location },
              }}
            >
              <MenuCard {...dish} />
            </Link>
            <div className="actions">
              <button type="button" onClick={() => onShowMoreInfo(dish.id)}>
                More info
              </button>
              <button type="button" onClick={() => onDelete(dish.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </section>
    </div>
  );
};

export default DishesMenu;
