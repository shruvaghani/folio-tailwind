const logoGray1 = 'assets/images/client/logo-gray/01.svg';
const logoGray2 = 'assets/images/client/logo-gray/02.svg';
const logoGray3 = 'assets/images/client/logo-gray/03.svg';
const logoGray4 = 'assets/images/client/logo-gray/04.svg';
const logoGray5 = 'assets/images/client/logo-gray/05.svg';
const logoGray6 = 'assets/images/client/logo-gray/06.svg';

const logoLight1 = 'assets/images/client/logo-light/01.svg';
const logoLight2 = 'assets/images/client/logo-light/02.svg';
const logoLight3 = 'assets/images/client/logo-light/03.svg';
const logoLight4 = 'assets/images/client/logo-light/04.svg';
const logoLight5 = 'assets/images/client/logo-light/05.svg';
const logoLight6 = 'assets/images/client/logo-light/06.svg';

const logoDark1 = 'assets/images/client/logo-dark/01.svg';
const logoDark2 = 'assets/images/client/logo-dark/02.svg';
const logoDark3 = 'assets/images/client/logo-dark/03.svg';
const logoDark4 = 'assets/images/client/logo-dark/04.svg';
const logoDark5 = 'assets/images/client/logo-dark/05.svg';
const logoDark6 = 'assets/images/client/logo-dark/06.svg';

export type pricingTable = {
  plans: {
    name: string;
    btnText: string;
  }[];

  features: {
    name: string;
    values: string[];
  }[];
};

export const pricingTable = {
  plans: [
    { name: 'Basic plan', btnText: 'Get started' },
    { name: 'Standard plan', btnText: 'Get started' },
    { name: 'Enterprise plan', btnText: 'Get started' }
  ],

  features: [
    {
      name: 'Storage space',
      values: ['40GB', '60GB', 'Unlimited']
    },
    {
      name: 'Cloud connected',
      values: ['Yes', 'Yes', 'Yes']
    },
    {
      name: 'Coding tools',
      values: ['check', 'check', 'check']
    },
    {
      name: 'Advance debugging',
      values: ['check', 'check', 'check']
    },
    {
      name: 'Mobile apps',
      values: ['x', 'check', 'check']
    },
    {
      name: 'Web tools',
      values: ['x', 'check', 'check']
    },
    {
      name: 'Version control',
      values: ['x', 'check', 'check']
    },
    {
      name: 'Security',
      values: ['x', 'x', 'check']
    },
    {
      name: 'Team access',
      values: ['x', 'x', 'check']
    }
  ]
};

export type ClientLogo = {
  gray: string;
  light: string;
  dark: string;
};

export const clientLogoData: ClientLogo[] = [
  { gray: logoGray1, light: logoLight1, dark: logoDark1 },
  { gray: logoGray2, light: logoLight2, dark: logoDark2 },
  { gray: logoGray3, light: logoLight3, dark: logoDark3 },
  { gray: logoGray4, light: logoLight4, dark: logoDark4 },
  { gray: logoGray5, light: logoLight5, dark: logoDark5 },
  { gray: logoGray6, light: logoLight6, dark: logoDark6 }
];

export type FaqType = {
  id: number;
  question: string;
  answer: string;
  active?: boolean;
}

export const faqsData: FaqType[] = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers for custom plans. Our expert team will turn your concept into a working prototype within 24 hours, ensuring rapid progress and immediate feedback.',
    active: true
  },
  {
    id: 2,
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time from your account settings. We provide a range of tools, guides, and best practices to help you create designs, websites.'
  },
  {
    id: 3,
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial for our Basic and Standard plans. No credit card required.'
  },
  {
    id: 4,
    question: 'How does customer support work?',
    answer:
      'Our Basic plan includes email support, while the Standard and Custom plans offer priority email and dedicated account manager support, respectively.'
  }
];