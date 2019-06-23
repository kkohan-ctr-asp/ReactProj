import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCategoryFromProps from '../../../utils/getCategoryFromProps';
import DishesMenu from './DishesMenuView';
import { menuSelectors, menuOperations } from '../../../redux/menu';

class DishesMenuContainer extends Component {
  componentDidMount() {
    const { history, location, fetchMenu } = this.props;
    const category = getCategoryFromProps(this.props);

    if (!category) {
      history.replace({
        pathname: location.pathname,
        search: 'category=all',
      });
      return;
    }
    fetchMenu(category);
  }

  async componentDidUpdate(prevProps) {
    const { fetchMenu } = this.props;
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      fetchMenu(nextCategory);
    }
  }

  handleDeleteItem = async id => {
    const { deleteItem } = this.props;
    deleteItem(id);
  };

  render() {
    const { menu, isLoading, error, location } = this.props;

    return (
      <div>
        <DishesMenu
          isLoading={isLoading}
          isError={error}
          dishes={menu}
          onDelete={this.handleDeleteItem}
          location={location}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: menuSelectors.getFilteredItems(state),
  isLoading: menuSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchMenu: menuOperations.fetchItems,
  deleteItem: menuOperations.deleteItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DishesMenuContainer);
