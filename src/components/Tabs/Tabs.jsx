import React, { Component } from 'react';

import Tab from './Tab';
import style from './Tabs.module.css';

export default class Tabs extends Component {
  state = { activeTabIndex: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    const { activeTabIndex } = this.state;
    return nextState.activeTabIndex !== activeTabIndex;
  }

  changeActiveTabIndex = idx => {
    this.setState({ activeTabIndex: idx });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const { title, text } = items[activeTabIndex].content;

    return (
      <div className={style.container}>
        <div className={style.actions}>
          {items.map((item, idx) => (
            <button
              className={idx === activeTabIndex ? style.active : style.button}
              type="button"
              key={item.label}
              onClick={() => this.changeActiveTabIndex(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <Tab title={title} text={text} />
      </div>
    );
  }
}
