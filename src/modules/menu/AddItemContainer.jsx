import React, { Component } from 'react';

import AddItemView from './AddItemView';
import * as API from '../../services/menu-api';

const INITIAL_STATE = {
  name: '',
  description: '',
  image: '',
  price: 0,
  category: '',
  ingredients: [],
};

const TEST_ITEM = {
  name: 'Test',
  description: 'TestTestTestTestTestTestTest',
  image: '',
  price: 124,
  category: 'salad',
  ingredients: ['Test', 'Test', 'Test'],
};

export default class AddItemContainer extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = async event => {
    event.preventDefault();
    await API.addMenuItem(TEST_ITEM);

    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push({
      pathname: '/menu',
      search: `?category=all`,
    });
  };

  render() {
    return <AddItemView onAdd={this.handleSubmit} />;
  }
}
