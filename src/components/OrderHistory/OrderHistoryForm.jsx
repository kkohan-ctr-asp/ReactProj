import React, { Component } from 'react';

const INITIAL_STATE = { price: 0, address: '', rating: 0 };

export default class OrderHistoryForm extends Component {
  state = { ...INITIAL_STATE };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { price, address, rating } = this.state;
    const { onSubmit } = this.props;

    onSubmit(price, address, rating);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { price, address, rating } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Enter price"
          onChange={this.handleChanges}
        />
        <input
          type="text"
          name="address"
          value={address}
          placeholder="Enter address"
          onChange={this.handleChanges}
        />
        <input
          type="number"
          name="rating"
          value={rating}
          placeholder="Enter rating"
          onChange={this.handleChanges}
        />
        <button type="submit">Add order to history</button>
      </form>
    );
  }
}
