import { createSelector } from 'reselect';
import menuSelectors from '../menu/menuSelector';

const getCartItemsIds = state => state.cart.ids;
const getCartItemsAmounts = state => state.cart.amount;

const getCartItemsAmount = createSelector(
  getCartItemsIds,
  ids => {
    return ids.length;
  },
);

const getCartItems = createSelector(
  [getCartItemsIds, menuSelectors.getItemsEntities, getCartItemsAmounts],
  (ids, entities, amounts) =>
    ids.map(id => ({ ...entities[id], amount: amounts[id] })),
);

export default { getCartItems, getCartItemsAmount };
