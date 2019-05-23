import React, { Component } from 'react';
import dishesArr from './menu.json';
import DishesMenu from './DishesMenu';

const filterDishNames = (filter, dishes) =>
  dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

const INITIAL_STATE = {
  filter: '',
};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  state = { ...INITIAL_STATE };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { filter } = this.state;

    const filteredDishes = filterDishNames(filter, dishesArr);

    return (
      <DishesMenu
        dishes={filteredDishes}
        filter={filter}
        onFilterChange={this.handleFilterChange}
      />
    );
  }
}
