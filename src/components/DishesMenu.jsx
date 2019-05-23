import React from 'react';
import Filter from './Filter';

const DishesMenu = ({ dishes, filter, onFilterChange }) => {
  return (
    <div>
      <Filter value={filter} onChange={onFilterChange} />
      <section>
        {dishes.map(dish => {
          const { id, name, image, description, price, ingredients } = dish;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <p>{description}</p>
              <img src={image} alt={name} width="100" height="100" />
              <span>{price}</span>
              <p>
                {ingredients.map(ingredient => `${ingredient.toLowerCase()}, `)}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default DishesMenu;
