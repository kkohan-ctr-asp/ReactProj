import React from 'react';
import { Link } from 'react-router-dom';

import Filter from './Filter';
import MenuCard from './MenuCard';
import routes from '../../configs/routes';

const DishesMenu = ({
  dishes,
  filter,
  onFilterChange,
  onDelete,
  onShowMoreInfo,
}) => {
  return (
    <div>
      <Filter value={filter} onChange={onFilterChange} />
      <section>
        {dishes.map(dish => (
          <li key={dish.id}>
            <Link to={`${routes.menu.root}/${dish.id}`}>
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
