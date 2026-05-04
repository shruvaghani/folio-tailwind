const hourglassIcon = 'assets/images/elements/hourglass.png';
const reportBookIcon = 'assets/images/elements/report-book.png';

const step1 = 'assets/images/elements/saas-decoration/step-1.png';
const step2_1 = 'assets/images/elements/saas-decoration/step-2-1.png';
const step2_2 = 'assets/images/elements/saas-decoration/step-2-2.png';
const step3 = 'assets/images/elements/saas-decoration/step-3.png';

const avatar02 = 'assets/images/avatar/02.jpg';
const avatar05 = 'assets/images/avatar/05.jpg';
const avatar10 = 'assets/images/avatar/10.jpg';
const avatar09 = 'assets/images/avatar/09.jpg';

const blog1 = 'assets/images/blog/4by3/01.jpg';
const blog2 = 'assets/images/blog/4by3/02.jpg';
const blog3 = 'assets/images/blog/4by3/03.jpg';
const blog4 = 'assets/images/blog/4by3/04.jpg';

export type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

export const featuresData: FeatureType[] = [
  {
    icon: hourglassIcon,
    title: 'Real-time data insights',
    description: 'Monitor key metrics, track performance, and gain actionable insights instantly.',
  },
  {
    icon: reportBookIcon,
    title: 'Customizable reports',
    description: 'With our customizable reporting tools, you can dive deep into specific',
  },
];

export type StepType = {
  title: string;
  description: string;
  images: {
    src: string;
    class?: string;
  }[];
  wrapperClass?: string;
}

export const stepsData: StepType[] = [
  {
    title: 'Sign up and customize',
    description: 'Create your account and customize your dashboard to fit your business needs.',
    images: [
      {
        src: step1,
        class: 'flex m-auto',
      },
    ],
  },
  {
    title: 'Integrate and collect data',
    description: 'Start collecting valuable data from all your user business processes instantly.',
    images: [
      {
        src: step2_1,
        class: '-mt-12 rounded-2xl',
      },
      {
        src: step2_2,
        class: 'ms-auto flex -me-18 -mt-12 rounded-xl',
      },
    ],
  },
  {
    title: 'Analyze and optimize',
    description: 'Use the analytics to make informed decisions and drive growth.',
    wrapperClass: 'relative',
    images: [
      {
        src: step3,
        class: 'absolute mt-2 ms-2 rounded-2xl',
      },
    ],
  },
];

export const avatarsData: string[] = [
  avatar02,
  avatar05,
  avatar10,
  avatar09,
];

export type PricingContentType = {
  id: string;
  ariaLabelledby: string;
  active?: boolean;
  features: string[];
}

export const pricingContentData: PricingContentType[] = [
  {
    id: 'tabs-with-underline-1',
    ariaLabelledby: 'tabs-with-underline-item-1',
    active: true,
    features: [
      'Customizable features',
      '5 user accounts',
      'Customizable features',
      '10 GB storage',
      'Email support',
    ],
  },
  {
    id: 'tabs-with-underline-2',
    ariaLabelledby: 'tabs-with-underline-item-2',
    features: [
      'Access to basic features',
      '15 user accounts',
      'Customizable features',
      '50 GB storage',
      'Email support',
      'Dedicated account manager',
    ],
  },
  {
    id: 'tabs-with-underline-3',
    ariaLabelledby: 'tabs-with-underline-item-3',
    features: [
      'Access to basic features',
      '30 user accounts',
      'Customizable features',
      '100 GB storage',
      'Email support',
      'Dedicated account manager',
    ],
  },
];

export type BlogType = {
  badge: string;
  image: string;
  title: string;
  author: string;
  link: string;
}

export const blogData: BlogType[] = [
  {
    badge: 'Lifestyle',
    image: blog1,
    title: 'Harnessing the power of real-time analytics',
    author: 'Carolyn Ortiz',
    link: '/blog/single',
  },
  {
    badge: 'Research',
    image: blog2,
    title: 'The ultimate guide to customizable reports',
    author: 'Louis Ferguson',
    link: '/blog/single',
  },
  {
    badge: 'Research',
    image: blog3,
    title: 'Sleek and Responsive - Designing with Bootstrap and Folio',
    author: 'Carolyn Ortiz',
    link: '/blog/single',
  },
  {
    badge: 'Design',
    image: blog4,
    title: 'Interactive Web Design with Bootstrap and StackBros',
    author: 'Louis Ferguson',
    link: '/blog/single',
  },
];
