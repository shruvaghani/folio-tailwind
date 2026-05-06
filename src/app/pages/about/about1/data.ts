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

