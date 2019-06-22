import React, { Component } from 'react';
import { connect } from 'react-redux';

import queryString from 'query-string';

import DishesMenu from './DishesMenuView';
import { menuSelectors, menuOperations, menuActions } from '../Redux/menu';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class DishesMenuContainer extends Component {
  componentDidMount() {
    const { history, location, fetchMenu, fetchCategories } = this.props;
    const category = getCategoryFromProps(this.props);

    if (!category) {
      history.replace({
        pathname: location.pathname,
        search: 'category=all',
      });
      return;
    }
    fetchCategories();
    fetchMenu(category);
  }

  async componentDidUpdate(prevProps) {
    const { fetchMenu, fetchCategories } = this.props;
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      fetchCategories();
      fetchMenu(nextCategory);
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
    const { deleteItem } = this.props;
    deleteItem(id);
  };

  // handleShowMoreInfo = async id => {
  //   // const item = await API.getMenuItemById(id);
  //   // console.log(item);
  // };

  handleFilterChange = ({ target }) => {
    const { onFilterChange } = this.props;
    onFilterChange(target.value);
  };

  handleCategoryReset = () => {
    const { location, history } = this.props;

    history.push({
      pathname: location.pathname,
      search: `category=all`,
    });
  };

  render() {
    const {
      filterValue,
      menu,
      isLoading,
      error,
      categories,
      location,
    } = this.props;

    // const filteredDishes = filterDishNames(filter, menu);

    const currentValue = {
      value: getCategoryFromProps(this.props),
      label: getCategoryFromProps(this.props),
    };

    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {error && <h1>Error!</h1>}
        <DishesMenu
          dishes={menu}
          filter={filterValue}
          onFilterChange={this.handleFilterChange}
          onDelete={this.handleDeleteItem}
          categoriesOptions={categories}
          onCategoryChange={this.handleCategoryChange}
          categoryValue={currentValue}
          location={location}
          onCategoryReset={this.handleCategoryReset}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: menuSelectors.getFilteredItems(state),
  isLoading: menuSelectors.getLoading(state),
  categories: menuSelectors.getCategories(state),
  filterValue: menuSelectors.getFilter(state),
});

const mapDispatchToProps = {
  fetchMenu: menuOperations.fetchItems,
  fetchCategories: menuOperations.fetchCategories,
  deleteItem: menuOperations.deleteItem,
  onFilterChange: menuActions.changeFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DishesMenuContainer);
