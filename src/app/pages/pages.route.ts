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
import { FeatureSingle } from './saas/feature-single/feature-single';
import { Integration } from './saas/integration/integration';
import { IntegrationSingle } from './saas/integration-single/integration-single';
import { Grid } from './portfolio/grid/grid';
import { List } from './portfolio/list/list';
import { Modern } from './portfolio/modern/modern';
import { CaseStudyV1 } from './portfolio/case-study-v1/case-study-v1';
import { CaseStudyV2 } from './portfolio/case-study-v2/case-study-v2';
import { Minimal } from './blog/minimal/minimal';
import { Single } from './blog/single/single';
import { Error } from './error/error';
import { ComingSoon } from './coming-soon/coming-soon';

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
  {
    path: 'feature/single',
    component: FeatureSingle,
    data: { title: 'Feature Single' },
  },
  {
    path: 'integrations',
    component: Integration,
    data: { title: 'Integration' },
  },
  {
    path: 'integration/single',
    component: IntegrationSingle,
    data: { title: 'Integration Single' },
  },
  {
    path: 'portfolio/grid',
    component: Grid,
    data: { title: 'Portfolio Grid' },
  },
  {
    path: 'portfolio/list',
    component: List,
    data: { title: 'Portfolio List' },
  },
  {
    path: 'portfolio/modern',
    component: Modern,
    data: { title: 'Portfolio Modern' },
  },
  {
    path: 'portfolio/case-study/v1',
    component: CaseStudyV1,
    data: { title: 'Portfolio Case Study V1' },
  },
  {
    path: 'portfolio/case-study/v2',
    component: CaseStudyV2,
    data: { title: 'Portfolio Case Study V2' },
  },
  {
    path: 'blog/minimal',
    component: Minimal,
    data: { title: 'Blog Minimal' },
  },
  {
    path: 'blog/single',
    component: Single,
    data: { title: 'Blog Single' },
  },
  {
    path: 'error-404',
    component: Error,
    data: { title: 'Error 404' },
  },
  {
    path: 'coming-soon',
    component: ComingSoon,
    data: { title: 'Coming Soon' },
  }
];
