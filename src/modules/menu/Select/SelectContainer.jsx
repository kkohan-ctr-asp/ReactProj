import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import getCategoryFromProps from '../../../utils/getCategoryFromProps';
import SelectView from './SelectView';
import { menuSelectors, menuOperations } from '../../../redux/menu';

class SelectContainer extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  handleCategoryReset = () => {
    const { location, history } = this.props;

    history.push({
      pathname: location.pathname,
      search: `category=all`,
    });
  };

  handleCategoryChange = category => {
    const { location, history } = this.props;
    const { value } = category;

    history.push({
      pathname: location.pathname,
      search: `category=${value}`,
    });
  };

  render() {
    const { categories } = this.props;

    const currentValue = {
      value: getCategoryFromProps(this.props),
      label: getCategoryFromProps(this.props),
    };

    return (
      <SelectView
        categoryValue={currentValue}
        categoriesOptions={categories}
        onCategoryChange={this.handleCategoryChange}
        onCategoryReset={this.handleCategoryReset}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: menuSelectors.getCategories(state),
});

const mapDispatchToProps = {
  fetchCategories: menuOperations.fetchCategories,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SelectContainer),
);
