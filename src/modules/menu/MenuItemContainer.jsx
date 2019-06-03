import React, { Component } from 'react';
import MenuItemView from './MenuItemView';

export default class MenuItemContainer extends Component {
  state = {};

  render() {
    const { id } = this.props;
    return <MenuItemView id={id} />;
  }
}
