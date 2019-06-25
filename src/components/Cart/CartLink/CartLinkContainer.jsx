import { connect } from 'react-redux';

import { cartSelectors } from '../../../redux/cart';
import CartLink from './CartLinkView';

const mapStateToProps = state => ({
  amount: cartSelectors.getCartItemsAmount(state),
});

export default connect(mapStateToProps)(CartLink);
