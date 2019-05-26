import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import avatarImg from '../avatar.png';

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

    if (isDropDownOpen && !isTargetInsideContainer) {
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
    const { userName } = this.props;
    const { isDropDownOpen } = this.state;

    return (
      // eslint-disable-next-line
      <div
        onClick={this.openDropdown}
        className="UserMenu"
        ref={this.containerRef}
      >
        <Avatar logoImage={avatarImg} />
        <span className="UserName">{userName}</span>
        {isDropDownOpen && <Dropdown />}
      </div>
    );
  }
}
