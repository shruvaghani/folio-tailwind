const avatar01 = 'assets/images/avatar/01.jpg';
const avatar02 = 'assets/images/avatar/02.jpg';
const avatar06 = 'assets/images/avatar/06.jpg';

export type StatsType = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
};

export const statsData: StatsType[] = [
  {
    value: 105,
    suffix: '+',
    label: 'New features added',
  },
  {
    value: 10,
    prefix: '>',
    suffix: 'K',
    label: 'Download apk',
  },
  {
    value: 15,
    suffix: 'D',
    label: 'Free trial',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client satisfaction',
  },
];

export type TestimonialType = {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
};

export const testimonialsData: TestimonialType[] = [
  {
    name: 'Jacqueline Miller',
    role: 'Product designer',
    image: avatar01,
    rating: 4.5,
    content:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh.",
  },
  {
    name: 'Louis Ferguson',
    role: 'Web Developer',
    image: avatar02,
    rating: 4.5,
    content:
      'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
  },
  {
    name: 'Samuel Bishop',
    role: 'UI/UX designer',
    image: avatar06,
    rating: 4.5,
    content:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
};

export const faqData: FaqItem[] = [
  {
    id: 'heading-1',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers for custom plans. Our expert team will turn your concept into a working prototype within 24 hours, ensuring rapid progress and immediate feedback.',
    isOpen: true,
  },
  {
    id: 'heading-2',
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time from your account settings. We provide a range of tools, guides, and best practices to help you create designs, websites.',
  },
  {
    id: 'heading-3',
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial for our Basic and Standard plans. No credit card required.',
  },
  {
    id: 'heading-4',
    question: 'How does customer support work?',
    answer:
      'Our Basic plan includes email support, while the Standard and Custom plans offer priority email and dedicated account manager support, respectively.',
  },
  {
    id: 'heading-5',
    question: 'Are there any setup fees?',
    answer:
      'No, there are no setup fees for any of our plans. You only pay the monthly subscription fee. We provide a range of tools, guides, and best practices to help you create designs, websites.',
  },
];