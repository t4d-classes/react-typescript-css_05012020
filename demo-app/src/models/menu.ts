import { ComponentClass, FC } from 'react';

export interface MenuItem {
  url: string;
  caption: string;
  PageComponent: ComponentClass | FC;
}