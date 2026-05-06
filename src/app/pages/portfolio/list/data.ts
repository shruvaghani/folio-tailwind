const img1 = 'assets/images/portfolio/list/01.jpg';
const img2 = 'assets/images/portfolio/list/02.jpg';
const img3 = 'assets/images/portfolio/list/03.jpg';
const img4 = 'assets/images/portfolio/list/04.jpg';

const logo1D = 'assets/images/client/logo-dark/01.svg';
const logo1L = 'assets/images/client/logo-light/01.svg';
const logo3D = 'assets/images/client/logo-dark/03.svg';
const logo3L = 'assets/images/client/logo-light/03.svg';
const logo5D = 'assets/images/client/logo-dark/05.svg';
const logo5L = 'assets/images/client/logo-light/05.svg';
const logo8D = 'assets/images/client/logo-dark/08.svg';
const logo8L = 'assets/images/client/logo-light/08.svg';

export type PortfolioListType = {
  id: number;
  title: string;
  description: string;
  year: string;
  tags: string[];
  image: string;
  logoDark: string;
  logoLight: string;
};

export const portfolioListData: PortfolioListType[] = [
  {
    id: 1,
    title: 'Mobile app development',
    description:
      'The app received positive feedback for its functionality and user experience, helping the client reach a wider audience.',
    year: '2024',
    tags: ['Branding', 'Packaging', 'UI/UX design'],
    image: img4,
    logoDark: logo1D,
    logoLight: logo1L,
  },
  {
    id: 2,
    title: 'Brand identity development',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: '2023',
    tags: ['Graphics', 'UI/UX design'],
    image: img2,
    logoDark: logo3D,
    logoLight: logo3L,
  },
  {
    id: 3,
    title: 'Transforming ideas into reality',
    description:
      "The website significantly improved the client's online sales and customer engagement.",
    year: '2021',
    tags: ['Web Design', 'Branding', 'UI/UX design'],
    image: img3,
    logoDark: logo8D,
    logoLight: logo8L,
  },
  {
    id: 4,
    title: 'Digital marketing overhaul',
    description: 'Designed and developed a responsive e-commerce platform for folio agency retail.',
    year: '2020',
    tags: ['Marketing', 'SEO', 'Social media'],
    image: img1,
    logoDark: logo5D,
    logoLight: logo5L,
  },
];
