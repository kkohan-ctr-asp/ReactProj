import React from 'react';
import { Link } from 'react-router-dom';

import Select from '../Select/SelectContainer';
import Filter from '../Filter/FilterContainer';
import MenuCard from '../MenuCard/MenuCard';
import routes from '../../../configs/routes';
import Loader from '../../../components/Loader/Loader';

import s from './DishesMenu.module.css';

const DishesMenu = ({ dishes, onDelete, location, isLoading, error }) => {
  return (
    <div>
      <Filter />
      <Link
        to={{
          pathname: `${routes.menu.addMenuItem}`,
          state: { from: location },
        }}
      >
        Add menu item
      </Link>
      <Select />

      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className={s.menu}>
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
                  <button type="button" onClick={() => onDelete(dish.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {error && <h1>Error!</h1>}
      </section>
    </div>
  );
};

export default DishesMenu;
