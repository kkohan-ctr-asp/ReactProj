import queryString from 'query-string';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default getCategoryFromProps;
