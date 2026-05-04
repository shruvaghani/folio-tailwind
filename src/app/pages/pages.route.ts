import { Route } from '@angular/router';
import { About1 } from './about/about1/about1';
import { About2 } from './about/about2/about2';
import { ServiceGrid } from './about/service-grid/service-grid';
import { ServiceList } from './about/service-list/service-list';
import { ServiceSingle } from './about/service-single/service-single';
import { Team } from './about/team/team';
import { Career } from './about/career/career';
import { CareerSingle } from './about/career-single/career-single';

export const PAGES_ROUTES: Route[] = [
  {
    path: 'about/v1',
    component: About1,
    data: { title: 'About v1' },
  },
  {
    path: 'about/v2',
    component: About2,
    data: { title: 'About v2' },
  },
  {
    path: 'service/grid',
    component: ServiceGrid,
    data: { title: 'Service Grid' },
  },

  {
    path: 'service/list',
    component: ServiceList,
    data: { title: 'Service List' },
  },
  {
    path: 'service/single',
    component: ServiceSingle,
    data: { title: 'Service Single' },
  },
  {
    path: 'team',
    component: Team,
    data: { title: 'Team' },
  },
  {
    path: 'career',
    component: Career,
    data: { title: 'Career' },
  },
  {
    path: 'career/single',
    component: CareerSingle,
    data: { title: 'Career Single' },
  },
];
