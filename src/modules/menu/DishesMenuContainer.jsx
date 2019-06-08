import React, { Component } from 'react';

import queryString from 'query-string';

import DishesMenu from './DishesMenuView';
import * as API from '../../services/menu-api';

const INITIAL_STATE = {
  filter: '',
  menu: [],
};

const filterDishNames = (filter, dishes) =>
  dishes.filter(dish => dish.name.toLowerCase().includes(filter.toLowerCase()));

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class DishesMenuContainer extends Component {
  state = { ...INITIAL_STATE, isLoading: false, error: null, categories: [] };

  async componentDidMount() {
    try {
      const category = getCategoryFromProps(this.props);
      this.setState({ isLoading: true });
      const categories = await API.getCategories();
      const { history, location } = this.props;

      if (!category) {
        history.replace({
          pathname: location.pathname,
          search: 'category=all',
        });

        return this.setState({
          isLoading: false,
        });
      }
      const menu = await API.getMenuItemsWithCategory(category);

      return this.setState({
        menu,
        categories,
        isLoading: false,
      });
    } catch (error) {
      return this.setState({
        error,
        isLoading: false,
      });
    }
  }

  async componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      const menu = await API.getMenuItemsWithCategory(nextCategory);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ menu });
    }
  }

  handleCategoryChange = category => {
    const { location, history } = this.props;
    const { value } = category;

    history.push({
      pathname: location.pathname,
      search: `category=${value}`,
    });
  };

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
    const { filter, menu, isLoading, error, categories } = this.state;
    const { location } = this.props;

    const filteredDishes = filterDishNames(filter, menu);

    const currentValue = {
      value: getCategoryFromProps(this.props),
      label: getCategoryFromProps(this.props),
    };

    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {error && <h1>Error!</h1>}
        <DishesMenu
          dishes={filteredDishes}
          filter={filter}
          onFilterChange={this.handleFilterChange}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
          categoriesOptions={categories}
          onCategoryChange={this.handleCategoryChange}
          categoryValue={currentValue}
          location={location}
        />
      </div>
    );
  }
}
