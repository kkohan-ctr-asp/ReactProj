import { createSelector } from 'reselect';

const getItems = state => state.menu.items;
const getItemsIds = state => state.menu.items;
const getItemsEntities = state => state.entities.menu;

const getFilter = state => state.menu.filter;

const getLoading = state => state.menu.loading;

const getCategories = state => state.menu.categories;
const getItem = state => state.menu.currentItem;

const getFilteredItems = createSelector(
  [getItemsIds, getItemsEntities, getFilter],
  (ids, entities, filter) => {
    const allItems = ids.map(id => entities[id]);
    const filteredItems = allItems.filter(item => {
      const filterToLower = filter.toLowerCase();
      const nameToLower = item.name.toLowerCase();

      return nameToLower.includes(filterToLower);
    });

    return filteredItems;
  },
);

// const getFilteredItems = createSelector(
//   [getItems, getFilter],
//   (items, filter) => {
//     return items.filter(item => {
//       const filterToLower = filter.toLowerCase();
//       const nameToLower = item.name.toLowerCase();

//       return nameToLower.includes(filterToLower);
//     });
//   },
// );

export default {
  getItemsEntities,
  getCategories,
  getItems,
  getFilter,
  getFilteredItems,
  getItem,
  getLoading,
};
