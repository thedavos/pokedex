import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "MainLayout" */ '../layouts/MainLayout'),
    redirect: {
      name: 'welcome',
    },
    children: [
      {
        name: 'welcome',
        path: '',
        component: () =>
          import(/* webpackChunkName: "Welcome" */ '../views/Welcome'),
      },
      {
        name: 'pokedex',
        path: 'pokedex',
        component: () =>
          import(/* webpackChunkName: "Pokedex" */ '../views/Pokedex'),
      },
    ],
  },
];

export default routes;
