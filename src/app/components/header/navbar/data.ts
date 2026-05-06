export type NavbarType = {
  title: string;
  type: 'mega' | 'nested' |  'link';
  url?: string;

  megaColumns?: {
    links: { label: string; url: string }[];
  }[];

  nestedLinks?: {
    label: string;
    url?: string;
    badge?: string;
    children?: { label: string; url: string }[];
  }[];
};

export const navbarData: NavbarType[] = [
  {
    title: 'Demos',
    type: 'mega',
    megaColumns: [
      {
        links: [
          { label: 'Classic Default', url: '/home/default' },
          { label: 'Software Company', url: '/home/software-company' },
          { label: 'Finance Consulting', url: '/home/finance-consulting' },
          { label: 'AI Agency', url: '/home/ai-agency' },
          { label: 'Product Landing', url: '/home/product-landing' },
        ],
      },
      {
        links: [
          { label: 'SaaS', url: '/home/saas' },
          { label: 'SaaS AI Chatbot', url: '/home/ai-chatbot' },
          { label: 'Application Showcase', url: '/home/application-showcase' },
          { label: 'Personal Portfolio', url: '/home/personal-portfolio' },
          { label: 'Blog home', url: '/home/blog' },
        ],
      },
    ],
  },

  {
    title: 'Pages',
    type: 'nested',
    nestedLinks: [
      {
        label: 'About',
        children: [
          { label: 'About v.1', url: '/about/v1' },
          { label: 'About v.2', url: '/about/v2' },
          { label: 'Services Grid', url: '/services/grid' },
          { label: 'Services List', url: '/services/list' },
          { label: 'Service Single', url: '/services/single' },
          { label: 'Team', url: '/team' },
          { label: 'Career', url: '/career' },
          { label: 'Career Single', url: '/career/single' },
        ],
      },
      { label: 'Contact Us v1', url: '/contact/v1' },
      { label: 'Contact Us v2', url: '/contact/v2' },
      { label: 'Pricing v1', url: '/pricing/v1' },
      { label: 'Pricing v2', url: '/pricing/v2' },

      {
        label: 'SaaS Pages',
        children: [
          { label: 'Feature Single', url: '/feature/single' },
          { label: 'Integrations', url: '/integrations' },
          { label: 'Integrations Single', url: '/integration/single' },
        ],
      },
      {
        label: 'Portfolio',
        children: [
          { label: 'Portfolio Grid', url: '/portfolio/grid' },
          { label: 'Portfolio List', url: '/portfolio/list' },
          { label: 'Portfolio Modern', url: '/portfolio/modern' },
          { label: 'Portfolio case study v1', url: '/portfolio/case-study/v1' },
          { label: 'Portfolio case study v2', url: '/portfolio/case-study/v2' },
        ],
      },
      {
        label: 'Blog',
        children: [
          { label: 'Blog Minimal', url: '/blog/minimal' },
          { label: 'Blog Single', url: '/blog/single' },
        ],
      },

      { label: 'Error 404', url: '/error-404' },
      { label: 'Coming soon', url: '/coming-soon' },

      {
        label: 'Authentication',
        children: [
          { label: 'Sign in', url: '/auth/sign-in' },
          { label: 'Sign up', url: '/auth/sign-up' },
          { label: 'Forgot Password', url: '/auth/forgot-password' },
        ],
      },
    ],
  },
  {
    title: 'Contact us',
    type: 'link',
    url: '/contact/v1',
  },
];