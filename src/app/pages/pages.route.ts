import { Route } from '@angular/router';
import { About1 } from './about/about1/about1';
import { About2 } from './about/about2/about2';
import { ServiceGrid } from './about/service-grid/service-grid';
import { ServiceList } from './about/service-list/service-list';
import { ServiceSingle } from './about/service-single/service-single';
import { Team } from './about/team/team';
import { Career } from './about/career/career';
import { CareerSingle } from './about/career-single/career-single';
import { ContactUs1 } from './contact/contact-us1/contact-us1';
import { ContactUs2 } from './contact/contact-us2/contact-us2';
import { Pricing1 } from './pricing/pricing1/pricing1';
import { Pricing2 } from './pricing/pricing2/pricing2';

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
  {
    path: 'contact/v1',
    component: ContactUs1,
    data: { title: 'Contact V1' },
  },
  {
    path: 'contact/v2',
    component: ContactUs2,
    data: { title: 'Contact v2' },
  },
  {
    path: 'pricing/v1',
    component: Pricing1,
    data: { title: 'Pricing V1' },
  },
  {
    path: 'pricing/v2',
    component: Pricing2,
    data: { title: 'Pricing V2' },
  },
];
