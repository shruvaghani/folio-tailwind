const icon05 = 'assets/images/client/icons/05.svg';
const icon11 = 'assets/images/client/icons/11.svg';
const icon10 = 'assets/images/client/icons/10.svg';
const icon04 = 'assets/images/client/icons/04.svg';
const icon07 = 'assets/images/client/icons/07.svg';
const icon08 = 'assets/images/client/icons/08.svg';
const icon09 = 'assets/images/client/icons/09.svg';
const icon01 = 'assets/images/client/icons/01.svg';
const icon03 = 'assets/images/client/icons/03.svg';

export type IntegrationType = {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

export const integrationData: IntegrationType[] = [
  {
    title: 'Graphlo',
    category: 'Productivity',
    description:
      'Integrate with Graphlo to streamline your customer relationship management. Sync contacts, automate workflows, and gain insights with powerful analytics.',
    image: icon05,
    link: '/integration/single',
  },
  {
    title: 'Vectra',
    category: 'CRM',
    description:
      'Seamless email marketing campaigns. Automate email sequences, manage subscriber lists, and track campaign performance.',
    image: icon11,
    link: '/integration/single',
  },
  {
    title: 'Signum',
    category: 'Payment',
    description:
      'Integrate Signum for secure and efficient payment processing. Accept payments, manage subscriptions, and track transactions effortlessly.',
    image: icon10,
    link: '/integration/single',
  },
  {
    title: 'Grapherz',
    category: 'Streaming',
    description:
      'Streamlined accounting and financial management. Track expenses, generate invoices, and manage payroll with ease.',
    image: icon04,
    link: '/integration/single',
  },
  {
    title: 'Imprintify',
    category: 'Productivity',
    description:
      'Imprintify to enhance team communication and collaboration. Receive notifications, share updates, and manage tasks directly within imprintify.',
    image: icon07,
    link: '/integration/single',
  },
  {
    title: 'Logique',
    category: 'e-commerce',
    description:
      'Connect with Logique to enhance your e-commerce operations. Sync inventory, manage orders, and track sales from one platform.',
    image: icon08,
    link: '/integration/single',
  },
  {
    title: 'Optimal',
    category: 'CRM',
    description:
      'Integrate with Optimal to streamline your customer relationship management. Sync contacts, automate workflows, and gain insights with powerful analytics.',
    image: icon09,
    link: '/integration/single',
  },
  {
    title: 'Artistry',
    category: 'Payment',
    description: 'Manage support tickets, track customer interactions, and improve response times.',
    image: icon01,
    link: '/integration/single',
  },
  {
    title: 'Wayline',
    category: 'Streaming',
    description:
      'Sync with Wayline for enhanced project management. Organize tasks, collaborate with your team, and track project progress effortlessly.',
    image: icon03,
    link: '/integration/single',
  },
];

export const filterData: string[] = ['All', 'Productivity', 'CRM', 'Payment', 'e-commerce', 'Streaming'];