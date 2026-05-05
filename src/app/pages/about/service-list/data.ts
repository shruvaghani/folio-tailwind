const img1 = 'assets/images/services/4by3/01.jpg';
const img2 = 'assets/images/services/4by3/02.jpg';
const img3 = 'assets/images/services/4by3/03.jpg';
const img4 = 'assets/images/services/4by3/04.jpg';

export type ServiceType = {
  title: string;
  description: string;
  image: string;
  align: 'left' | 'right';
  features: string[];
};

export const servicesData: ServiceType[] = [
  {
    title: 'Digital marketing solutions',
    description:
      'Digital marketing is the art and science of reaching, and influencing through online channels.',
    image: img1,
    align: 'left',
    features: [
      'SEO marketing',
      'Data scraping',
      'Facebook marketing',
      'Email marketing',
      'Social marketing',
    ],
  },
  {
    title: 'Brand strategy & identity',
    description: 'Develop comprehensive brand strategies including market research, positioning.',
    image: img2,
    align: 'right',
    features: ['Logo design', 'Brand strategy', 'Visual identity', 'Video animation'],
  },
  {
    title: 'Web design & development',
    description: 'Provide ongoing maintenance, updates, and technical support to ensure websites.',
    image: img3,
    align: 'left',
    features: ['Custom website design', 'E-commerce solutions', 'Maintenance and support'],
  },
  {
    title: 'Database analysis',
    description:
      'Implement systems for collecting data from various sources to ensure accuracy and reliability.',
    image: img4,
    align: 'right',
    features: ['Data collection', 'Data management', 'Reporting', 'Visualization'],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  marginTop: string;
};

export const processData: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial consultation',
    description: 'An initial meeting to understand your vision and objectives.',
    bgColor: 'bg-primary',
    marginTop: 'mt-7.5',
  },
  {
    number: '02',
    title: 'Development and Execution',
    description: 'We begin development and execution based on the agreed plan.',
    bgColor: 'bg-pink',
    marginTop: 'md:mt-0 mt-7.5',
  },
  {
    number: '03',
    title: 'Review and Delivery',
    description: 'Post-delivery support to ensure a smooth transition and continued success',
    bgColor: 'bg-purple',
    marginTop: 'mt-7.5',
  },
];

export const featureList: string[] = [
  'Expand your reach',
  'Exceptional integration',
  'Extensive project connectivity',
  'Connect and Collaborate',
];
