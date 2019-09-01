import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';

import Header from './Header/Header';

// import AboutPage from '../pages/About';
// import AccountPage from '../pages/Account';
// import AuthPage from '../pages/Auth';
// import CartPage from '../pages/Cart';
// import CheckoutPage from '../pages/Checkout';
// import ContactPage from '../pages/Contact';
// import DeliveryPage from '../pages/Delivery';
// import FavoritesPage from '../pages/Favorites';
// import MenuPage from '../pages/Menu';
// import MenuItemPage from '../pages/MenuItem';
// import OrderHistoryPage from '../pages/OrderHistory';
// import PlannerPage from '../pages/Planner';
// import Loader from './Loader/Loader';

// import Modal from './Modal/Modal';
// import Tabs from './Tabs/Tabs';
// import tabsData from './Tabs.json';
import routes from '../configs/routes';
import Loader from './Loader/Loader';

// const AsyncMenuPage = Loadable({
//   loader: () => import(/* webpackChunkName: "Menu-page" */ '../pages/Menu'),
//   loading: Loader,
//   timeout: 5000,
//   delay: 300,
// });

// const AsyncMenuItemPage = Loadable({
//   loader: () =>
//     import(/* webpackChunkName: "Menu-item-page" */ '../pages/MenuItem'),
//   loading: Loader,
//   timeout: 5000,
//   delay: 300,
// });

const AsyncMainPage = lazy(() =>
  import(/* webpackChunkName: "Main-page" */ '../pages/Main'),
);
const AsyncMenuPage = lazy(() =>
  import(/* webpackChunkName: "Menu-page" */ '../pages/Menu'),
);
const AsyncMenuItemPage = lazy(() =>
  import(/* webpackChunkName: "Menu-item-page" */ '../pages/MenuItem'),
);

const AsyncAboutPage = lazy(() =>
  import(/* webpackChunkName: "About-page" */ '../pages/About'),
);

const AsyncContactPage = lazy(() =>
  import(/* webpackChunkName: "Contact-page" */ '../pages/Contact'),
);

const AsyncCartPage = lazy(() =>
  import(/* webpackChunkName: "Cart-page" */ '../pages/Cart'),
);

const AsyncDeliveryPage = lazy(() =>
  import(/* webpackChunkName: "Delivery-page" */ '../pages/Delivery'),
);
const AsyncAccountPage = lazy(() =>
  import(/* webpackChunkName: "Account-page" */ '../pages/Account'),
);
const AsyncOrderHistoryPage = lazy(() =>
  import(/* webpackChunkName: "OrderHistory-page" */ '../pages/OrderHistory'),
);
const AsyncPlannerPage = lazy(() =>
  import(/* webpackChunkName: "Planner-page" */ '../pages/Planner'),
);

const AsyncAddMenuItemPage = lazy(() =>
  import(/* webpackChunkName: "AddMenuItem-page" */ '../pages/AddMenuItem'),
);

const AsyncNotFoundPage = lazy(() =>
  import(/* webpackChunkName: "NotFound-page" */ '../pages/NotFound'),
);

const App = () => (
  <>
    <Header />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={AsyncMainPage} />
        <Route exact path={routes.menu.root} component={AsyncMenuPage} />
        <Route
          exact
          path={routes.menu.addMenuItem}
          component={AsyncAddMenuItemPage}
        />
        <Route path={routes.menu.item} component={AsyncMenuItemPage} />
        <Route path={routes.about} component={AsyncAboutPage} />
        <Route path={routes.contact} component={AsyncContactPage} />
        <Route path={routes.delivery} component={AsyncDeliveryPage} />
        <Route path={routes.account} component={AsyncAccountPage} />
        <Route path={routes.orderHistory} component={AsyncOrderHistoryPage} />
        <Route path={routes.planner} component={AsyncPlannerPage} />
        <Route path={routes.cart} component={AsyncCartPage} />
        <Route component={AsyncNotFoundPage} />
      </Switch>
    </Suspense>
  </>
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
