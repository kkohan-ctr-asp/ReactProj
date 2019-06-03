import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Avatar from '../../../components/Avatar/Avatar';
import styles from './UserMenu.module.css';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const { isDropDownOpen } = this.state;
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const isTargetLink = e.target.nodeName === 'A';

    if ((isDropDownOpen && !isTargetInsideContainer) || isTargetLink) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropDownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropDownOpen: false });
  };

  render() {
    const { userName, avatarImg } = this.props;
    const { isDropDownOpen } = this.state;

    return (
      // eslint-disable-next-line
      <div
        className={styles.container}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        <Avatar logoImage={avatarImg} />
        <span className={styles.name}>{userName}</span>
        {isDropDownOpen && <Dropdown />}
      </div>
    );
  }
}
