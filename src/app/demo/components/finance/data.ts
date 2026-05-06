const finance01 = 'assets/images/services/finance/01.jpg';
const finance02 = 'assets/images/services/finance/02.jpg';
const finance03 = 'assets/images/services/finance/03.jpg';
const finance04 = 'assets/images/services/finance/04.jpg';

const team01 = 'assets/images/team/01.jpg';
const team02 = 'assets/images/team/02.jpg';
const team03 = 'assets/images/team/03.jpg';
const team04 = 'assets/images/team/04.jpg';

const avatar01 = 'assets/images/avatar/01.jpg';
const avatar02 = 'assets/images/avatar/02.jpg';
const avatar03 = 'assets/images/avatar/03.jpg';
const avatar08 = 'assets/images/avatar/08.jpg';
const avatar09 = 'assets/images/avatar/09.jpg';

const clientDark01 = 'assets/images/client/logo-dark/01.svg';
const clientLight01 = 'assets/images/client/logo-light/01.svg';

const clientDark02 = 'assets/images/client/logo-dark/02.svg';
const clientLight02 = 'assets/images/client/logo-light/02.svg';

const clientDark03 = 'assets/images/client/logo-dark/03.svg';
const clientLight03 = 'assets/images/client/logo-light/03.svg';

const clientDark04 = 'assets/images/client/logo-dark/04.svg';
const clientLight04 = 'assets/images/client/logo-light/04.svg';

const clientDark05 = 'assets/images/client/logo-dark/05.svg';
const clientLight05 = 'assets/images/client/logo-light/05.svg';

const clientDark06 = 'assets/images/client/logo-dark/06.svg';
const clientLight06 = 'assets/images/client/logo-light/06.svg';

const clientDark07 = 'assets/images/client/logo-dark/07.svg';
const clientLight07 = 'assets/images/client/logo-light/07.svg';

const clientDark08 = 'assets/images/client/logo-dark/08.svg';
const clientLight08 = 'assets/images/client/logo-light/08.svg';

const clientDark09 = 'assets/images/client/logo-dark/09.svg';
const clientLight09 = 'assets/images/client/logo-light/09.svg';

const clientDark10 = 'assets/images/client/logo-dark/10.svg';
const clientLight10 = 'assets/images/client/logo-light/10.svg';

const clientDark11 = 'assets/images/client/logo-dark/11.svg';
const clientLight11 = 'assets/images/client/logo-light/11.svg';



export type ServiceLinkType = {
  label: string;
  link: string;
};

export type ServiceColumnType = {
  items: ServiceLinkType[];
};

export const serviceLinksData: ServiceColumnType[] = [
  {
    items: [
      { label: 'Financial advisory', link: '/service/single' },
      { label: 'Consulting', link: '/service/single' },
      { label: 'Management', link: '/service/single' },
      { label: 'Data analysis', link: '/service/single' },
      { label: 'Debt management', link: '/service/single' },
    ],
  },
  {
    items: [
      { label: 'Legal & Tax', link: '/service/single' },
      { label: 'Business consulting', link: '/service/single' },
      { label: 'Risk advisory', link: '/service/single' },
    ],
  },
];

export type FinanceServiceType = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export const financeServicesData: FinanceServiceType[] = [
  {
    image: finance01,
    title: 'Healthcare industry',
    description:
      'Our team provides specialized financial consulting for healthcare providers, ensuring sustainable.',
    link: '',
  },
  {
    image: finance03,
    title: 'Real estate sector',
    description:
      'From property management to development projects, we deliver expert financial advice to maximize.',
    link: '',
  },
  {
    image: finance02,
    title: 'Manufacturing industry',
    description:
      'Our financial experts understand the unique challenges of the manufacturing sector industry.',
    link: '',
  },
  {
    image: finance04,
    title: 'Retail sector',
    description:
      'We support retail businesses with comprehensive financial services, including inventory management.',
    link: '',
  },
];

export type TeamMemberType = {
  image: string;
  name: string;
  role: string;
  social: {
    type: 'lucide' | 'iconify';
    icon: string;
  }[];
};

export const teamData: TeamMemberType[] = [
  {
    image: team01,
    name: 'Jane Doe',
    role: 'Chief Financial Officer',
    social: [
      { type: 'lucide', icon: 'facebook' },
      { type: 'iconify', icon: 'tabler:brand-x' },
      { type: 'lucide', icon: 'instagram' },
    ],
  },
  {
    image: team02,
    name: 'Michael Brown',
    role: 'Investment Strategist',
    social: [
      { type: 'lucide', icon: 'facebook' },
      { type: 'lucide', icon: 'instagram' },
    ],
  },
  {
    image: team03,
    name: 'Louis Ferguson',
    role: 'Tax Specialist',
    social: [
      { type: 'lucide', icon: 'facebook' },
      { type: 'iconify', icon: 'tabler:brand-x' },
    ],
  },
  {
    image: team04,
    name: 'Amanda Reed',
    role: 'Senior Financial Advisor',
    social: [
      { type: 'lucide', icon: 'facebook' },
      { type: 'iconify', icon: 'tabler:brand-x' },
      { type: 'lucide', icon: 'instagram' },
    ],
  },
];

export const avatarsData: string[] = [
  avatar01,
  avatar02,
  avatar03,
  avatar08,
  avatar09,
];

export type ClientLogoType = {
  dark: string;
  light: string;
};

export const clientLogoData: ClientLogoType[] = [
  { dark: clientDark01, light: clientLight01 },
  { dark: clientDark07, light: clientLight07 },
  { dark: clientDark08, light: clientLight08 },
  { dark: clientDark02, light: clientLight02 },
  { dark: clientDark03, light: clientLight03 },
  { dark: clientDark04, light: clientLight04 },
  { dark: clientDark05, light: clientLight05 },
  { dark: clientDark11, light: clientLight11 },
  { dark: clientDark10, light: clientLight10 },
  { dark: clientDark06, light: clientLight06 },
  { dark: clientDark09, light: clientLight09 },
];