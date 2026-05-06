const img1 = 'assets/images/portfolio/3by4/01.jpg';
const img2 = 'assets/images/portfolio/3by4/02.jpg';
const img3 = 'assets/images/portfolio/3by4/03.jpg';
const img4 = 'assets/images/portfolio/3by4/04.jpg';
const img5 = 'assets/images/portfolio/3by4/05.jpg';
const img6 = 'assets/images/portfolio/3by4/06.jpg';
const img7 = 'assets/images/portfolio/3by4/07.jpg';
const img8 = 'assets/images/portfolio/3by4/08.jpg';
const img9 = 'assets/images/portfolio/3by4/09.jpg';

export type FilterType = {
  name: string;
  value: string;
};

export const filtersData: FilterType[] = [
  { name: 'All', value: 'all' },
  { name: 'Selected', value: 'selected' },
  { name: 'Digital', value: 'digital' },
  { name: 'Branding', value: 'branding' },
  { name: 'Web design', value: 'web' },
];

export type PortfolioType = {
  title: string;
  category: string;
  image: string;
  link: string;
};

export const portfolioData: PortfolioType[] = [
  {
    title: 'Design blast',
    category: 'UI/UX design',
    image: img1,
    link: '/portfolio/case-study/v1',
  },
  {
    title: 'Media mastery',
    category: 'SEO',
    image: img9,
    link: '/portfolio/case-study/v1',
  },
  {
    title: 'Brand revamp',
    category: 'Logo design',
    image: img3,
    link: '/portfolio/case-study/v1',
  },
  {
    title: 'ShopSmart',
    category: 'E-commerce',
    image: img4,
    link: '/portfolio/case-study/v1',
  },
  {
    title: 'Surge Tech',
    category: 'UI/UX design',
    image: img5,
    link: '/portfolio/case-study/v1',
  },
  {
    title: 'App Innovation',
    category: 'Development',
    image: img7,
    link: '/portfolio/case-study/v1',
  },
  { title: 'Momentum', category: 'Design', image: img2, link: '/portfolio/case-study/v1' },
  {
    title: 'TechWave',
    category: 'Animation',
    image: img6,
    link: '/portfolio/case-study/v1',
  },
  {
    title: 'Cropo stone',
    category: 'Packaging',
    image: img8,
    link: '/portfolio/case-study/v1',
  },
];
