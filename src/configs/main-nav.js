import routes from './routes';

const NAV_ITEMS = [
  { name: 'Menu', path: `${routes.menu.root}` },
  { name: 'About', path: routes.about },
  { name: 'Contact', path: routes.contact },
  { name: 'Delivery', path: routes.delivery },
];

export default NAV_ITEMS;
