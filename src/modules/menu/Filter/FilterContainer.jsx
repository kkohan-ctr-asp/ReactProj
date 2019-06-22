import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from './FilterView';
import { menuSelectors, menuActions } from '../Redux/menu';

class FilterContainer extends Component {
  handleFilterChange = ({ target }) => {
    const { onFilterChange } = this.props;
    onFilterChange(target.value);
  };

  render() {
    const { filterValue } = this.props;

    return <Filter value={filterValue} onChange={this.handleFilterChange} />;
  }
}

const mapStateToProps = state => ({
  filterValue: menuSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onFilterChange: menuActions.changeFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterContainer);
