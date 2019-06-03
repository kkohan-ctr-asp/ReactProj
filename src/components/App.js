import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';

import AboutPage from '../pages/About';
import AccountPage from '../pages/Account';
// import AuthPage from '../pages/Auth';
// import CartPage from '../pages/Cart';
// import CheckoutPage from '../pages/Checkout';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
// import FavoritesPage from '../pages/Favorites';
import MenuPage from '../pages/Menu';
// import MenuItemPage from '../pages/MenuItem';
import OrderHistoryPage from '../pages/OrderHistory';
import PlannerPage from '../pages/Planner';

// import Modal from './Modal/Modal';
// import Tabs from './Tabs/Tabs';
// import tabsData from './Tabs.json';

import routes from '../configs/routes';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path={routes.menu.root} component={MenuPage} />
      <Route path={routes.about} component={AboutPage} />
      <Route path={routes.contact} component={ContactPage} />
      <Route path={routes.delivery} component={DeliveryPage} />
      <Route path={routes.account} component={AccountPage} />
      <Route path={routes.orderHistory} component={OrderHistoryPage} />
      <Route path={routes.planner} component={PlannerPage} />
    </Switch>
  </div>
);

export default App;
// export default class App extends Component {
//   // state = { isModalOpen: false };

//   // handleOpenModal = () => {
//   //   this.setState({ isModalOpen: true });
//   // };

//   // handleCloseModal = () => {
//   //   this.setState({ isModalOpen: false });
//   // };

//   render() {
//     // const { isModalOpen } = this.state;
//     return (
//       <div>
//         <Header />
//         {/* <button type="button" onClick={this.handleOpenModal}>
//           Open modal
//         </button>
//         {isModalOpen && <Modal onClose={this.handleCloseModal} />}
//         <Tabs items={tabsData} /> */}
//       </div>
//     );
//   }
// }
