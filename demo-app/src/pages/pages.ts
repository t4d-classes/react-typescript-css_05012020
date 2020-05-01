import { MenuItem } from '../models/menu';

import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';
import { ProductsPage } from './ProductsPage';

export const pages: MenuItem[] = [
  { url: '/', caption: 'Home', PageComponent: HomePage },
  { url: '/products', caption: 'Products', PageComponent: ProductsPage },
  { url: '/about', caption: 'About', PageComponent: AboutPage },
  { url: '/contact', caption: 'Contact', PageComponent: ContactPage },
];