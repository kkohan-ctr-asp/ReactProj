import { connect } from 'react-redux';

import { cartActions, cartSelectors } from '../../redux/cart';
import Cart from './CartView';

const mapStateToProps = state => ({
  dishes: cartSelectors.getCartItems(state),
});

const mapDispatchToProps = {
  addToCart: cartActions.addToCart,
  increaseItemAmount: cartActions.increaseAmount,
  decreaseItemAmount: cartActions.decreaseAmount,
  removeFromCart: cartActions.removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
