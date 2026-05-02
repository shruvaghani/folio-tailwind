const avatar02 = 'assets/images/avatar/02.jpg';
const avatar05 = 'assets/images/avatar/05.jpg';
const avatar06 = 'assets/images/avatar/06.jpg';
const avatar09 = 'assets/images/avatar/09.jpg';
const avatar10 = 'assets/images/avatar/10.jpg';

const stepImg1 = 'assets/images/mobile-app/step-1.jpg';
const stepImg2 = 'assets/images/mobile-app/step-2.jpg';
const stepImg3 = 'assets/images/mobile-app/step-3.jpg';

const screen01 = 'assets/images/mobile-app/screen/s-01.jpg';
const screen02 = 'assets/images/mobile-app/screen/s-02.jpg';
const screen03 = 'assets/images/mobile-app/screen/s-03.jpg';
const screen04 = 'assets/images/mobile-app/screen/s-04.jpg';
const screen05 = 'assets/images/mobile-app/screen/s-05.jpg';
const screen06 = 'assets/images/mobile-app/screen/s-06.jpg';
const screen07 = 'assets/images/mobile-app/screen/s-07.jpg';
const screen08 = 'assets/images/mobile-app/screen/s-08.jpg';

const blogImg01 = 'assets/images/blog/4by3/01.jpg';
const blogImg02 = 'assets/images/blog/4by3/02.jpg';
const blogImg03 = 'assets/images/blog/4by3/03.jpg';
const blogImg04 = 'assets/images/blog/4by3/04.jpg';

const team01 = 'assets/images/team/01.jpg';
const team03 = 'assets/images/team/03.jpg';
const team04 = 'assets/images/team/04.jpg';

export const avatarListData: string[] = [
   avatar02,
   avatar05,
   avatar10,
   avatar09,
   avatar06,
];

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type FeatureSectionType = {
  left: FeatureItem[];
  right: FeatureItem[];
};

export const featureData: FeatureSectionType = {

  left: [
    {
      title: 'Instant money transfers',
      description: 'Transfer money to friends, family, or businesses quickly and securely.',
      icon: 'banknote-arrow-down',
      color: 'text-success',
    },
    {
      title: 'Easy bill payments',
      description: 'Pay utility bills, credit card bills, and more with just a few taps.',
      icon: 'receipt',
      color: 'text-purple',
    },
    {
      title: 'Real-time notifications',
      description: 'Stay updated with real-time alerts for transactions and account activities.',
      icon: 'bell',
      color: 'text-warning',
    },
  ],

  right: [
    {
      title: 'Account management',
      description:
        'Monitor your account balance, transaction history, and manage your finances efficiently.',
      icon: 'id-card',
      color: 'text-info',
    },
    {
      title: 'Budgeting tools',
      description: 'Use built-in tools to set budgets, track spending, and save more effectively.',
      icon: 'settings',
      color: 'text-primary',
    },
    {
      title: '24/7 customer support',
      description:
        'Get help anytime with our dedicated customer support team, available around the clock.',
      icon: 'headset',
      color: 'text-pink',
    },
  ],
};

export const stepSlidesData: string[] = [
  stepImg1,
  stepImg2,
  stepImg3,
];

export type PhaseSlideType = {
  phase: string;
  title: string;
  description: string;
};

export const phaseSlidesData: PhaseSlideType[] = [
  {
    phase: 'Phase 1',
    title: 'Sign up and secure your account',
    description:
      'Create an account using your email or phone number. Complete the straightforward verification process to ensure your account is protected. Follow the simple verification process to secure your account. This ensures a personalized and seamless banking experience.',
  },
  {
    phase: 'Phase 2',
    title: 'Enter your personal and financial getails',
    description:
      'Provide the necessary information to set up your profile. This ensures a personalized and seamless banking experience tailored to your needs. This ensures a personalized and seamless banking experience.',
  },
  {
    phase: 'Phase 3',
    title: 'Explore the full range of banking features',
    description:
      'Discover all the app’s functionalities, from instant money transfers to convenient bill payments, and start managing your finances with ease and efficiency. This ensures a personalized and seamless banking experience. Follow the simple verification process to secure your account.',
  },
];

export type StatsType = {
  value: number;
  suffix: string;
  color: string;
  text: string;
};

export const statsData: StatsType[] = [
  {
    value: 98,
    suffix: '%',
    color: 'text-pink',
    text: 'Customer satisfaction rate',
  },
  {
    value: 60,
    suffix: '%',
    color: 'text-success',
    text: 'Serving countries worldwide',
  },
];

export const screenData: string[] = [
  screen01,
  screen02,
  screen03,
  screen04,
  screen05,
  screen06,
  screen07,
  screen08  
];

export type BlogSlideType = {
  img: string;
  title: string;
  description: string;
  link: string;
};

export const blogSlidesData: BlogSlideType[] = [
  {
    img: blogImg01,
    title: 'Tips for secure online banking',
    description: 'Learn essential tips to keep your online banking experience safe and secure.',
    link: '/blog/single',
  },
  {
    img: blogImg02,
    title: 'The future of digital banking',
    description:
      'Explore the latest trends in digital banking and how they are shaping the future.',
    link: '/blog/single',
  },
  {
    img: blogImg03,
    title: 'How to maximize your savings with our app',
    description: 'Discover practical strategies to save more money using the features of our app.',
    link: '/blog/single',
  },
  {
    img: blogImg04,
    title: 'Understanding mobile payment solutions',
    description: 'Get a comprehensive overview of mobile payment solutions and how they work.',
    link: '/blog/single',
  },
];

export type TestimonialCardType = {
  img: string;
  rating: number;
  text: string;
  name: string;
  role: string;
};

export const testimonialCardsData: TestimonialCardType[] = [
  {
    img: team01,
    rating: 4.5,
    text: `I've been using this app for over a year now, and it has made managing my finances so much easier. The user interface is incredibly intuitive.`,
    name: 'Emma Watson',
    role: 'UI/UX Designer',
  },
  {
    img: team04,
    rating: 4.5,
    text: `The app is fast, reliable, and customer support is always there when I need help. Highly recommended!`,
    name: 'Louis Ferguson',
    role: 'Web Developer',
  },
  {
    img: team03,
    rating: 5,
    text: `The budgeting tools in this app have helped me save more and spend wisely.`,
    name: 'Jacqueline Miller',
    role: 'Product designer',
  },
];
