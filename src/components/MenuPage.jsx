import React, { Component } from 'react';
import DishesMenu from './DishesMenu';
import * as API from '../services/menu-api';

const filterDishNames = (filter, dishes) =>
  dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

const INITIAL_STATE = {
  filter: '',
  menu: [],
};

// eslint-disable-next-line react/prefer-stateless-function
export default class MenuPage extends Component {
  state = { ...INITIAL_STATE };

  async componentDidMount() {
    const menu = await API.getAllMenuItems();
    this.setState({
      menu,
    });
  }

  handleDeleteItem = async id => {
    const isOk = await API.deleteMenuItem(id);
    if (!isOk) return;

    this.setState(state => ({
      menu: state.menu.filter(item => item.id !== id),
    }));
  };

  handleShowMoreInfo = async id => {
    const item = await API.getMenuItemById(id);
    console.log(item);
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleAddMenuItem = async () => {
    const item = {
      name: `New name ${Date.now()}`,
      price: Math.random(),
      image: 'https://placeimg.com/640/480/animals',
    };

    const newItem = await API.addMenuItem(item);
    this.setState(state => ({
      menu: [...state.menu, newItem],
    }));
  };

  render() {
    const { filter, menu } = this.state;

    const filteredDishes = filterDishNames(filter, menu);

    return (
      <div>
        <button type="button" onClick={this.handleAddMenuItem}>
          Add menu item
        </button>

        <DishesMenu
          dishes={filteredDishes}
          filter={filter}
          onFilterChange={this.handleFilterChange}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}
