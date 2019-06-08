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
}) => {
  return (
    <div>
      <Filter value={filter} onChange={onFilterChange} />
      <Select
        value={categoryValue}
        options={categoriesOptions}
        onChange={onCategoryChange}
      />
      <section>
        {dishes.map(dish => (
          <li key={dish.id}>
            <Link
              to={{
                pathname: `${routes.menu.root}/${dish.id}`,
                state: { from: location },
              }}
            >
              <MenuCard
                {...dish}
                onDelete={() => onDelete(dish.id)}
                onShowMoreInfo={() => onShowMoreInfo(dish.id)}
              />
            </Link>
          </li>
        ))}
      </section>
    </div>
  );
};

export default DishesMenu;
