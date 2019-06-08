import React, { Component } from 'react';
import MenuItemView from './MenuItemView';
import * as API from '../../services/menu-api';

export default class MenuItemContainer extends Component {
  state = {
    item: {
      name: '',
      description: '',
      image: '',
      price: 0,
      category: '',
      ingredients: [],
    },
  };

  async componentDidMount() {
    const { id } = this.props;

    const item = await API.getMenuItemById(id);

    await this.setState({
      item: {
        ...item,
      },
    });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    const { item } = this.state;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push({
      pathname: '/menu',
      search: `?category=${item.category}`,
    });
  };

  render() {
    const { item } = this.state;
    return <MenuItemView {...item} handleGoBack={this.handleGoBack} />;
  }
}
