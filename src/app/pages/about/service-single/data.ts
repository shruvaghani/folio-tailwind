const icon08 = 'assets/images/client/icons/08.svg';
const icon04 = 'assets/images/client/icons/04.svg';
const icon12 = 'assets/images/client/icons/12.svg';
const icon09 = 'assets/images/client/icons/09.svg';
const icon05 = 'assets/images/client/icons/05.svg';
const icon03 = 'assets/images/client/icons/03.svg';
const icon02 = 'assets/images/client/icons/02.svg';
const icon10 = 'assets/images/client/icons/10.svg';

const discoveryImg = 'assets/images/discovery.jpg';
const designImg = 'assets/images/design.jpg';
const developmentImg = 'assets/images/development.jpg';
const testingImg = 'assets/images/testing.jpg';

const portfolio1 = 'assets/images/portfolio/4by4/01.jpg';
const portfolio2 = 'assets/images/portfolio/4by4/03.jpg';

const logoLight1 = 'assets/images/client/logo-light/01.svg';
const logoDark1 = 'assets/images/client/logo-dark/01.svg';

const logoLight2 = 'assets/images/client/logo-light/05.svg';
const logoDark2 = 'assets/images/client/logo-dark/05.svg';

const avatar1 = 'assets/images/avatar/09.jpg';
const avatar2 = 'assets/images/avatar/10.jpg';
const avatar3 = 'assets/images/avatar/04.jpg';
const avatar4 = 'assets/images/avatar/07.jpg';
const avatar5 = 'assets/images/avatar/01.jpg';

export type FeatureItem = {
  title: string;
  description: string;
};

export const featuresData: FeatureItem[] = [
  {
    title: 'Custom Design',
    description:
      "We create tailor-made websites that reflect your brand's identity and engage your audience.",
  },
  {
    title: 'Scalability',
    description: 'Our solutions are built to grow with your business, ensuring long-term success.',
  },
  {
    title: 'Performance optimization',
    description: 'We ensure fast loading times and smooth user experiences to boost.',
  },
  {
    title: 'SEO-friendly',
    description:
      'Our websites are optimized for search engines to help you rank higher and attract more traffic.',
  },
];

export type AccordionItem = {
  id: number;
  title: string;
  content: string;
  isActive: boolean;
};

export const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: 'Frontend development',
    content:
      'We use the latest technologies like HTML5, CSS3, JavaScript, and frameworks such as React and Angular to create stunning interfaces that provide seamless user experiences across all devices.',
    isActive: true,
  },
  {
    id: 2,
    title: 'Backend development',
    content:
      'We build robust and scalable backend systems that power your website. Our expertise includes server-side scripting, database management, and API integration using technologies like Node.js, Python, Ruby on Rails, and PHP. We ensure your website performs efficiently and securely.',
    isActive: false,
  },
  {
    id: 3,
    title: 'E-commerce solutions',
    content:
      'Transform your business with our comprehensive e-commerce solutions. We develop custom online stores with features like product catalogs, shopping carts, payment gateways, and inventory management. Our solutions are designed to enhance user experience and boost sal',
    isActive: false,
  },
  {
    id: 4,
    title: 'Content management systems (CMS)',
    content:
      'We offer custom CMS development and integration services to give you full control over your website content. Our expertise includes popular platforms like WordPress, Joomla, and Drupal. We create intuitive interfaces that make it easy to update and manage your website.',
    isActive: false,
  },
  {
    id: 5,
    title: 'Custom web applications',
    content:
      'Our team develops bespoke web applications tailored to your specific business needs. Whether you need a custom CRM, ERP, or any other type of web application, we leverage the latest technologies to deliver solutions that enhance your business processes.',
    isActive: false,
  },
];

export const clientIconsData: string[] = [
  icon08,
  icon04,
  icon12,
  icon09,
  icon05,
  icon03,
  icon02,
  icon10,
];

export type StepType = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
};

export const stepsData: StepType[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We begin by understanding your business goals, target audience, and project requirements.',
    image: discoveryImg,
  },
  {
    id: 'design',
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates wireframes and prototypes based on the project plan.',
    image: designImg,
  },
  {
    id: 'development',
    number: '03',
    title: 'Development',
    description:
      'In this phase, our developers bring the design to life using the latest technologies and best practices.',
    image: developmentImg,
  },
  {
    id: 'testing',
    number: '04',
    title: 'Testing & Launch',
    description: 'Before going live, we conduct thorough testing to identify and fix any issues.',
    image: testingImg,
  },
];

export type CaseStudyType = {
  title: string;
  description: string;
  progress: string;
  progressText: string;
  image: string;
  clientLogoLight: string;
  clientLogoDark: string;
};

export const caseStudiesData: CaseStudyType[] = [
  {
    title: 'Corporate website for consulting',
    description:
      'Consulting wanted a professional online presence to attract high-profile clients.',
    progress: '40%',
    progressText: 'Increase in web traffic.',
    image: portfolio1,
    clientLogoLight: logoLight1,
    clientLogoDark: logoDark1,
  },
  {
    title: 'AI-Driven customer insights platform',
    description:
      'Consulting wanted a professional online presence to attract high-profile clients.',
    progress: '60%',
    progressText: 'Increase in web traffic.',
    image: portfolio2,
    clientLogoLight: logoLight2,
    clientLogoDark: logoDark2,
  },
];

export type TestimonialType = {
  name: string;
  role: string;
  message: string;
  rating: number;
  avatar: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    name: 'Jacqueline Miller',
    role: 'Product designer',
    rating: 4.5,
    avatar: avatar1,
    message:
      'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
  },
  {
    name: 'Louis Ferguson',
    role: 'Web Developer',
    rating: 5,
    avatar: avatar2,
    message:
      'Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no.',
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX designer',
    rating: 4.5,
    avatar: avatar3,
    message:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
  {
    name: 'Allen Smith',
    role: 'Manager',
    rating: 4.5,
    avatar: avatar4,
    message: `Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.`,
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX designer',
    rating: 4.5,
    avatar: avatar5,
    message:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
];
