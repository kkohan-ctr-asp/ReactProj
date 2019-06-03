import React, { Component } from 'react';
import DishesMenu from './DishesMenuView';
import * as API from '../../services/menu-api';
import Loader from '../../components/Loader';

const filterDishNames = (filter, dishes) =>
  dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

const INITIAL_STATE = {
  filter: '',
  menu: [],
};

export default class DishesMenuContainer extends Component {
  state = { ...INITIAL_STATE, isLoading: false, error: null };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const menu = await API.getAllMenuItems();
      this.setState({
        menu,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
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

  render() {
    const { filter, menu, isLoading, error } = this.state;

    const filteredDishes = filterDishNames(filter, menu);

    return (
      <div>
        {isLoading && <Loader />}
        {error && <h1>Error</h1>}
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
