import React, { Component } from 'react';

import Header from './Header';
import Modal from './Modal';

export default class App extends Component {
  state = { isModalOpen: false };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <Header />
        <button type="button" onClick={this.handleOpenModal}>
          Open modal
        </button>
        {isModalOpen && <Modal onClose={this.handleCloseModal} />}
      </div>
    );
  }
}
