const portfolioImage1 = 'assets/images/portfolio/list/02.jpg';
const portfolioImage2 = 'assets/images/portfolio/3by4/08.jpg';
const portfolioImage3 = 'assets/images/portfolio/4by4/03.jpg';
const portfolioImage4 = 'assets/images/portfolio/04.jpg';

const blogImage1 = 'assets/images/blog/4by4/03.jpg';
const blogImage2 = 'assets/images/blog/4by4/01.jpg';
const blogImage3 = 'assets/images/blog/4by4/06.jpg';
const blogImage4 = 'assets/images/blog/4by4/05.jpg';

export type ServiceType = {
  title: string;
  description: string;
  icon: string;
  className: string;
  bgClass: string;
};

export const serviceData: ServiceType[] = [
  {
    title: 'Web application development',
    description:
      'Building robust and scalable web applications tailored to your business processes.',
    icon: 'monitor',
    className: 'bg-warning',
    bgClass: 'bg-warning/15',
  },
  {
    title: 'UI/UX design',
    description: 'I focus on creating interfaces that are both visually appealing and easy to use.',
    icon: 'pen-tool',
    className: 'bg-pink',
    bgClass: 'bg-pink/15',
  },
  {
    title: 'Web maintenance & support',
    description: 'From regular updates to troubleshooting and security checks',
    icon: 'globe',
    className: 'bg-info',
    bgClass: 'bg-info/15',
  },
  {
    title: 'E-commerce solutions',
    description:
      'Powerful e-commerce platforms that drive sales and enhance the shopping experience.',
    icon: 'shopping-cart',
    className: 'bg-success',
    bgClass: 'bg-success/15',
  },
];

export type PortfolioType = {
  title: string;
  category: string;
  year: string;
  image: string;
  widthClass?: string;
  link: string;
};

export const portfolioData: PortfolioType[] = [
  {
    title: 'Brand Identity Development',
    category: 'Logo design',
    year: '@2022',
    image: portfolioImage1,
    link: '/portfolio/case-study/v2',
  },
  {
    title: 'ShopSmart',
    category: 'E-commerce',
    year: '@2023',
    image: portfolioImage2,
    widthClass: 'lg:w-110.5 mx-auto',
    link: '/portfolio/case-study/v2',
  },
  {
    title: 'TechWave',
    category: 'Animation',
    year: '@2022',
    image: portfolioImage3,
    widthClass: 'lg:w-114.25 mx-auto',
    link: '/portfolio/case-study/v2',
  },
  {
    title: 'Digital marketing overhaul',
    category: 'Marketing',
    year: '@2021',
    image: portfolioImage4,
    link: '/portfolio/case-study/v2',
  },
];

export type CounterType = {
  value: number;
  label: string;
};

export const counterData: CounterType[] = [
  { value: 68, label: 'Successful projects' },
  { value: 105, label: 'Satisfied clients' },
];

export type BlogType = {
  title: string;
  image: string;
  date: string;
  readTime: string;
  link: string;
};

export const blogData: BlogType[] = [
  {
    title: '10 essential tips for crafting a stunning website',
    image: blogImage1,
    date: 'Aug 28, 2024',
    readTime: '5 min read',
    link: '/blog/single',
  },
  {
    title: 'The future of UI/UX design: trends to watch in 2024',
    image: blogImage2,
    date: 'Aug 18, 2024',
    readTime: '5 min read',
    link: '/blog/single',
  },
  {
    title: 'Behind the scenes of my latest web project',
    image: blogImage3,
    date: 'Aug 12, 2024',
    readTime: '5 min read',
    link: '/blog/single',
  },
  {
    title: 'How to optimize your website for SEO in 2024',
    image: blogImage4,
    date: 'Aug 12, 2024',
    readTime: '5 min read',
    link: '/blog/single',
  },
];
