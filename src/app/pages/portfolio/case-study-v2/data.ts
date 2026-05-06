export type ProjectInfoType = {
  label: string;
  value: string;
};

export const projectInfoData: ProjectInfoType[] = [
  {
    label: 'Client',
    value: 'StackBros Agency',
  },
  {
    label: 'Category',
    value: 'UI/UX design',
  },
  {
    label: 'Location',
    value: '489 Depot Road Midland',
  },
  {
    label: 'Time spent',
    value: '2023, 4 months',
  },
];

export const featureListData: string[] = [
  'Integrating multiple third-party services seamlessly.',
  'Ensuring robust security and privacy for user data.',
  'Meeting strict project deadlines while maintaining quality.',
  'Providing a consistent user experience across all devices and platforms.',
  'Designing for scalability to handle increased user traffic and data',
];

export type StatsType = {
  value: string;
  prefix?: string;
  suffix: string;
  description: string;
};

export const statsData: StatsType[] = [
  {
    value: '22',
    suffix: '%',
    description: 'Increase in time spent on website',
  },
  {
    value: '4.5',
    suffix: 'M',
    description: 'View this project got across our social media network',
  },
  {
    value: '12.8',
    prefix: '$',
    suffix: 'M',
    description: 'Total raised in funding so far',
  },
];
