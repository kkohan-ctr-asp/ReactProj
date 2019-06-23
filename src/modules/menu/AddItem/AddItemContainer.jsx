import React, { Component } from 'react';

import { connect } from 'react-redux';
import { menuOperations } from '../../../redux/menu';

import AddItemView from './AddItemView';

// const INITIAL_STATE = {
//   name: '',
//   description: '',
//   image: '',
//   price: 0,
//   category: '',
//   ingredients: [],
// };

const TEST_ITEM = {
  id: 'test',
  name: 'Test',
  description: 'TestTestTestTestTestTestTest',
  image: '',
  price: 124,
  category: 'salad',
  ingredients: ['Test', 'Test', 'Test'],
};

class AddItemContainer extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { addItem } = this.props;
    addItem(TEST_ITEM);

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

const mapDispatchToProps = {
  addItem: menuOperations.addItem,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddItemContainer);
