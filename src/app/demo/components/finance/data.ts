const finance01 = 'assets/images/services/finance/01.jpg';
const finance02 = 'assets/images/services/finance/02.jpg';
const finance03 = 'assets/images/services/finance/03.jpg';
const finance04 = 'assets/images/services/finance/04.jpg';

const team01 = 'assets/images/team/01.jpg';
const team02 = 'assets/images/team/02.jpg';
const team03 = 'assets/images/team/03.jpg';
const team04 = 'assets/images/team/04.jpg';


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

export type ValueCardType = {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
};

export const valuesData: ValueCardType[] = [
  {
    icon: 'rocket',
    iconColor: 'text-success fill-success',
    title: 'Integrity',
    description: 'We uphold the highest standards of integrity in all our actions.',
  },
  {
    icon: 'user',
    iconColor: 'text-pink fill-pink',
    title: 'Client approach',
    description: 'Your needs and goals are at the heart of everything we do.',
  },
  {
    icon: 'award',
    iconColor: 'text-info fill-info',
    title: 'Excellence',
    description: 'Our experts are dedicated to delivering the highest quality services.',
  },
  {
    icon: 'flame',
    iconColor: 'text-primary fill-primary',
    title: 'Innovation',
    description: 'Embracing innovation to lead in the dynamic financial landscape.',
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
