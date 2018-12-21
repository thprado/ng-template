import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Título Brabo',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Hello World Zika',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  }
];
