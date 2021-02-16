import { ComponentType } from 'react';

import IndexPage from './pages/index';
import StatePage from './pages/state'

export interface IRoute {
    path: string;
    component: ComponentType<any>;
    exact?: boolean;
}

const routes : IRoute[] = [
    {
        path: '/',
        component: IndexPage,
        exact: true
    },
    {
        path: '/estados/:sigla',
        component: StatePage,
        exact: true
    }
]

export default routes;