import React from 'react';
import Filter from './Filter';
import MenuCard from './MenuCard';

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
            <MenuCard
              name={dish.name}
              price={dish.price}
              image={dish.image}
              onDelete={() => onDelete(dish.id)}
              onShowMoreInfo={() => onShowMoreInfo(dish.id)}
            />
          </li>
        ))}
      </section>
    </div>
  );
};

export default DishesMenu;
