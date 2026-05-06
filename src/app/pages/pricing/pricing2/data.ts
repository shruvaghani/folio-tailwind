const rocketImg = 'assets/images/elements/rocket.png';
const fireImg = 'assets/images/elements/fire.png';
const thunderImg = 'assets/images/elements/thunder.png';

export type Feature = {
  text: string;
};

export type PlanType = {
  title: string;
  price: string;
  duration?: string;
  description: string;
  image: string;
  theme?: 'light' | 'dark' | 'gradient';
  buttonText: string;
  features: Feature[];
};

export const plansData: PlanType[] = [
  {
    title: 'Basic plan',
    price: '$59',
    duration: '/month',
    description: 'Ideal for small teams, the Basic plan manages up to 10 projects.',
    image: rocketImg,
    theme: 'light',
    buttonText: 'Purchase',
    features: [
      { text: 'Customizable features' },
      { text: '5 user accounts' },
      { text: 'Customizable features' },
      { text: '10 GB storage' },
      { text: 'Email support' }
    ]
  },
  {
    title: 'Professional plan',
    price: '$99',
    duration: '/month',
    description: 'Get priority email support and access to premium templates for a more comprehensive solution.',
    image: fireImg,
    theme: 'light',
    buttonText: 'Purchase',
    features: [
      { text: 'Access to basic features' },
      { text: '15 user accounts' },
      { text: 'Customizable features' },
      { text: '50 GB storage' },
      { text: 'Dedicated account manager' }
    ]
  },
  {
    title: 'Basic plan',
    price: '$59',
    duration: '/month',
    description: 'Ideal for small teams, the Basic plan manages up to 10 projects.',
    image: rocketImg,
    theme: 'light',
    buttonText: 'Purchase',
    features: [
      { text: 'Customizable features' },
      { text: '5 user accounts' },
      { text: 'Customizable features' },
      { text: '10 GB storage' },
      { text: 'Email support' }
    ]
  },
  {
    title: 'Enterprise plan',
    price: 'Custom',
    description: 'For businesses with unique requirements, our Custom Plan delivers a fully personalized experience.',
    image: thunderImg,
    theme: 'gradient',
    buttonText: 'Contact us',
    features: [
      { text: 'Unlimited projects' },
      { text: 'Custom reporting and analytics' },
      { text: 'Dedicated account manager' },
      { text: 'Tailored support and consulting' },
      { text: 'Personalized onboarding and training' }
    ]
  }
];

export type FeatureType = {
  text: string;
  icon: string;
  color: string;
};

export const featuresData: FeatureType[] = [
  {
    text: 'No hidden fees',
    icon: 'wallet',
    color: 'text-primary',
  },
  {
    text: '24/7 Customer support',
    icon: 'headset',
    color: 'text-pink',
  },
  {
    text: 'Easy upgrade & downgrade',
    icon: 'rocket',
    color: 'text-warning',
  },
  {
    text: 'You can cancel anytime',
    icon: 'clock',
    color: 'text-success',
  },
];

export type FaqType = {
  id: number;
  question: string;
  answer: string;
  active?: boolean;
};

export const faqsData: FaqType[] = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers for custom plans. Our expert team will turn your concept into a working prototype within 24 hours, ensuring rapid progress and immediate feedback.',
    active: true,
  },
  {
    id: 2,
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time from your account settings. We provide a range of tools, guides, and best practices to help you create designs, websites.',
  },
  {
    id: 3,
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial for our Basic and Standard plans. No credit card required.',
  },
  {
    id: 4,
    question: 'How does customer support work?',
    answer:
      'Our Basic plan includes email support, while the Standard and Custom plans offer priority email and dedicated account manager support, respectively.',
  },
  {
    id: 5,
    question: 'Are there any setup fees?',
    answer:
      'No, there are no setup fees for any of our plans. You only pay the monthly subscription fee. We provide a range of tools, guides, and best practices to help you create designs, websites.',
  },
];