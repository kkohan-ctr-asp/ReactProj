import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  containerRef = createRef();

  componentDidMount() {
    this.containerRef.current.addEventListener(
      'click',
      this.handleBackdropClick,
    );
    window.addEventListener('keydown', this.handleCloseEsc);
  }

  componentWillUnmount() {
    this.containerRef.current.removeEventListener(
      'click',
      this.handleBackdropClick,
    );

    window.removeEventListener('keydown', this.handleCloseEsc);
  }

  handleCloseEsc = e => {
    const { onClose } = this.props;
    const isEsc = e.keyCode === 27;

    if (isEsc) {
      onClose();
    }
  };

  handleBackdropClick = e => {
    const { onClose } = this.props;

    const isTargetOutsideContainer = this.containerRef.current === e.target;

    if (isTargetOutsideContainer) {
      onClose();
    }
  };

  render() {
    const { onClose, value } = this.props;

    return (
      <div className={styles.backdrop} ref={this.containerRef}>
        <div className={styles.container}>
          <p>{value}</p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
