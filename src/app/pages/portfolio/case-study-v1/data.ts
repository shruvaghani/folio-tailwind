const portfolio09 = 'assets/images/portfolio/3by4/09.jpg';
const portfolio06 = 'assets/images/portfolio/3by4/06.jpg';
const portfolio01 = 'assets/images/portfolio/3by4/01.jpg';
const portfolio04 = 'assets/images/portfolio/04.jpg';

const img1 = 'assets/images/portfolio/4by4/01.jpg';
const img2 = 'assets/images/portfolio/4by4/02.jpg';
const img3 = 'assets/images/portfolio/4by4/05.jpg';

export type ProjectInfoType = {
  label: string;
  value: string;
};

export const projectInfoData: ProjectInfoType[] = [
  { label: 'Category', value: 'Branding' },
  { label: 'Client', value: 'StackBros Agency' },
  { label: 'Location', value: '489 Depot Road Midland' },
  { label: 'Date', value: 'July 6, 2024' },
];

export type FeatureColumn = {
  items: string[];
};

export const featuresData: FeatureColumn[] = [
  {
    items: ['Brand Development', 'Art Direction', 'Marketing Strategy', 'Mobile App Design'],
  },
  {
    items: ['Content Management', 'System & Guides', 'Graphic Design', 'Brand Development'],
  },
];

export const galleryData: string[] = [portfolio09, portfolio06, portfolio01, portfolio04];


export type StatType = {
  value: string;
  suffix: string;
  className: string;
  description: string;
};

export const statsData: StatType[] = [
  {
    value: '22',
    suffix: '%',
    className: 'text-primary',
    description: 'Increase in time spent on website'
  },
  {
    value: '4.5',
    suffix: 'M',
    className: 'text-purple',
    description: 'View this project got across our social media network'
  },
  {
    value: '$12.8',
    suffix: 'M',
    className: 'text-pink',
    description: 'Total raised in funding so far'
  }
];

export type PortfolioSlideType = {
  image: string;
  title: string;
  category: string;
  link: string;
};

export const portfolioSlidesData: PortfolioSlideType[] = [
  {
    image: img1,
    title: 'Mobile app development',
    category: 'UI/UX design',
    link: '/portfolio/case-studies'
  },
  {
    image: img2,
    title: 'Digital marketing overhaul',
    category: 'Marketing',
    link: '/portfolio/case-studies'
  },
  {
    image: img3,
    title: 'TechWave',
    category: 'Animation',
    link: '/portfolio/case-studies'
  }
];