import React from 'react';
import OrderHistory from './OrderHistory';
import orders from './order-history.json';

const App = () => <OrderHistory orders={orders} />;

export default App;
