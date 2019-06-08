import React from 'react';

const MenuItemView = ({
  image,
  name,
  price,
  description,
  ingredients,
  handleGoBack,
}) => (
  <div>
    <img src={image} alt={name} width={400} height={300} />
    <h2>{name}</h2>
    <span>Price: {price}$</span>
    <p>{description}</p>
    <h3>Ingredients</h3>

    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
    <button type="button" onClick={handleGoBack}>
      Back to menu
    </button>
  </div>
);

export default MenuItemView;
