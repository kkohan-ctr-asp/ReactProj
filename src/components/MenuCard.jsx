import React from 'react';

const MenuCard = ({ name, image, price, onShowMoreInfo, onDelete }) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}</p>
    <div className="actions">
      <button type="button" onClick={onShowMoreInfo}>
        More info
      </button>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  </div>
);
export default MenuCard;
