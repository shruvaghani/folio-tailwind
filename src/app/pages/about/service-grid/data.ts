const DEVELOPMENT_ICON = 'assets/images/services/3d-icon/development.png';
const MARKETING_ICON = 'assets/images/services/3d-icon/marketing.png';
const BRAND_ICON = 'assets/images/services/3d-icon/brand.png';
const DATABASE_ICON = 'assets/images/services/3d-icon/database.png';
const CONSULTING_ICON = 'assets/images/services/3d-icon/consulting.png';
const APP_DEV_ICON = 'assets/images/services/3d-icon/app-dev.png';

export type ServiceType = {
  icon: string;
  title: string;
  features: string[];
  isNew?: boolean;
}

export const servicesData: ServiceType[] = [
  {
    icon: DEVELOPMENT_ICON,
    title: 'Web design & Development',
    features: [
      'Custom website design',
      'E-commerce solutions',
      'Website maintenance and support'
    ]
  },
  {
    icon: MARKETING_ICON,
    title: 'Digital marketing solutions',
    features: [
      'Fundamentals of SEO',
      'Social media marketing',
      'Pay-Per-Click'
    ]
  },
  {
    icon: BRAND_ICON,
    title: 'Brand strategy & Identity',
    features: [
      'Logo design',
      'Brand strategy',
      'Visual identity'
    ],
    isNew: true
  },
  {
    icon: DATABASE_ICON,
    title: 'Database analysis',
    features: [
      'Data collection and management',
      'Data analysis',
      'Reporting and visualization'
    ]
  },
  {
    icon: CONSULTING_ICON,
    title: 'Consulting services',
    features: [
      'Business strategy',
      'Technology consulting',
      'Operational improvement'
    ]
  },
  {
    icon: APP_DEV_ICON,
    title: 'Mobile app development',
    features: [
      'Custom app design & development',
      'Cross-Platform solutions',
      'Usability testing'
    ]
  }
];

export type FaqType = {
  question: string;
  answer: string;
  isActive?: boolean;
}

export const faqData: FaqType[] = [
  {
    question: 'Rapid prototype development',
    answer: 'Our expert team delivers a functional prototype within 24 hours, ensuring rapid progress and immediate feedback.',
    isActive: true
  },
  {
    question: 'Client-Centric approach',
    answer: 'We provide a range of tools, guides, and best practices to help you create designs, websites.'
  },
  {
    question: '24/7 tech & business support',
    answer: 'We provide a range of tools, guides, and best practices to help you create designs, websites.'
  }
];