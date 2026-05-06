const portfolio09 = 'assets/images/portfolio/3by4/09.jpg';
const portfolio06 = 'assets/images/portfolio/3by4/06.jpg';
const portfolio03 = 'assets/images/portfolio/03.jpg';
const portfolio08 = 'assets/images/portfolio/3by4/08.jpg';
const portfolio003 = 'assets/images/portfolio/4by4/03.jpg';
const portfolio04 = 'assets/images/portfolio/04.jpg';

export type PortfolioCard = {
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
};

export type PortfolioType = {
  type: 'layout1' | 'layout2';
  items: PortfolioCard[];
};

export const portfolioGridData: PortfolioType[] = [
  {
    type: 'layout1',
    items: [
      {
        title: 'Mobile app development',
        category: 'UI/UX design',
        year: '2024',
        image: portfolio09,
        link: '/portfolio/case-study/v1',
      },
      {
        title: 'Media mastery',
        category: 'SEO',
        year: '2024',
        image: portfolio06,
        link: '/portfolio/case-study/v1',
      },
    ],
  },
  {
    type: 'layout2',
    items: [
      {
        title: 'Brand Identity Development',
        category: 'Logo design',
        year: '2022',
        image: portfolio03,
        link: '/portfolio/case-study/v1',
      },
      {
        title: 'ShopSmart',
        category: 'E-commerce',
        year: '2023',
        image: portfolio08,
        link: '/portfolio/case-study/v1',
      },
    ],
  },
  {
    type: 'layout2',
    items: [
      {
        title: 'TechWave',
        category: 'Animation',
        year: '2022',
        image: portfolio003,
        link: '/portfolio/case-study/v1',
      },
      {
        title: 'Digital marketing overhaul',
        category: 'Marketing',
        year: '2021',
        image: portfolio04,
        link: '/portfolio/case-study/v1',
      },
    ],
  },
];
