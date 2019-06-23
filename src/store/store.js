import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../redux/rootReducerModule';

const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(reducer, enhancer);

export default store;
