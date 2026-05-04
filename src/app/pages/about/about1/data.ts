export type CounterType = {
  title: string;
  value: number;
  showIcon?: boolean;
};

export const countersData: CounterType[] = [
  {
    title: 'Engaging users across our 2024 platforms',
    value: 3500,
  },
  {
    title: 'Showcasing creative excellence in every project',
    value: 105,
    showIcon: true,
  },
  {
    title: 'Track and analyze business reports',
    value: 97,
  },
  {
    title: 'Enhanced growth in onboarding conversions',
    value: 68,
  },
];

export type TeamMemberType = {
  name: string;
  role: string;
  image: string;
  socials: {
    type: 'lucide' | 'iconify';
    icon: string;
    class?: string;
  }[];
};

export const teamMembersData: TeamMemberType[] = [
  {
    name: 'Emma Watson',
    role: 'Co-Founder / CEO',
    image: 'assets/images/team/01.jpg',
    socials: [
      { type: 'lucide', icon: 'facebook', class: 'fill-white' },
      { type: 'iconify', icon: 'tabler:brand-x' },
      { type: 'lucide', icon: 'instagram' },
    ],
  },
  {
    name: 'Allen Smith',
    role: 'Finance',
    image: 'assets/images/team/02.jpg',
    socials: [
      { type: 'lucide', icon: 'facebook', class: 'fill-white' },
      { type: 'iconify', icon: 'tabler:brand-x' },
      { type: 'lucide', icon: 'instagram' },
    ],
  },
  {
    name: 'Louis Ferguson',
    role: 'Recruiting',
    image: 'assets/images/team/04.jpg',
    socials: [
      { type: 'lucide', icon: 'facebook', class: 'fill-white' },
      { type: 'iconify', icon: 'tabler:brand-x' },
    ],
  },
  {
    name: 'Frances Guerrero',
    role: 'Product Manager',
    image: 'assets/images/team/03.jpg',
    socials: [
      { type: 'lucide', icon: 'facebook', class: 'fill-white' },
      { type: 'lucide', icon: 'instagram' },
    ],
  },
  {
    name: 'Amanda Reed',
    role: 'Solution Engineer',
    image: 'assets/images/team/05.jpg',
    socials: [
      { type: 'iconify', icon: 'tabler:brand-x' },
      { type: 'lucide', icon: 'instagram' },
    ],
  },
];

export type ClientLogoType = {
  image: string;
  alt?: string;
  link?: any[];
};

export const clientLogosData: ClientLogoType[] = [
  { image: 'assets/images/client/icons/08.svg', alt: 'icon' },
  { image: 'assets/images/client/icons/04.svg', alt: 'icon' },
  { image: 'assets/images/client/icons/12.svg', alt: 'icon' },
  { image: 'assets/images/client/icons/09.svg', alt: 'icon' },
  { image: 'assets/images/client/icons/05.svg', alt: 'icon' },
  { image: 'assets/images/client/icons/03.svg', alt: 'icon' },
  { image: 'assets/images/client/icons/02.svg', alt: 'icon' },
  { image: 'assets/images/client/icons/10.svg', alt: 'icon' },
];

