const logoGray01 = 'assets/images/client/logo-gray/01.svg';
const logoGray02 = 'assets/images/client/logo-gray/02.svg';
const logoGray03 = 'assets/images/client/logo-gray/03.svg';
const logoGray04 = 'assets/images/client/logo-gray/04.svg';
const logoGray05 = 'assets/images/client/logo-gray/05.svg';
const logoGray06 = 'assets/images/client/logo-gray/06.svg';
const logoGray07 = 'assets/images/client/logo-gray/07.svg';
const logoGray08 = 'assets/images/client/logo-gray/08.svg';

const logoLight01 = 'assets/images/client/logo-light/01.svg';
const logoLight02 = 'assets/images/client/logo-light/02.svg';
const logoLight03 = 'assets/images/client/logo-light/03.svg';
const logoLight04 = 'assets/images/client/logo-light/04.svg';
const logoLight05 = 'assets/images/client/logo-light/05.svg';
const logoLight06 = 'assets/images/client/logo-light/06.svg';
const logoLight07 = 'assets/images/client/logo-light/07.svg';
const logoLight08 = 'assets/images/client/logo-light/08.svg';

const logoDark01 = 'assets/images/client/logo-dark/01.svg';
const logoDark02 = 'assets/images/client/logo-dark/02.svg';
const logoDark03 = 'assets/images/client/logo-dark/03.svg';
const logoDark04 = 'assets/images/client/logo-dark/04.svg';
const logoDark05 = 'assets/images/client/logo-dark/05.svg';
const logoDark06 = 'assets/images/client/logo-dark/06.svg';
const logoDark07 = 'assets/images/client/logo-dark/07.svg';
const logoDark08 = 'assets/images/client/logo-dark/08.svg';

const fwaLight = 'assets/images/elements/fwa-light.svg';
const clutchLight = 'assets/images/elements/clutch-light.svg';
const webby = 'assets/images/elements/webby.svg';

const avatar02 = 'assets/images/avatar/02.jpg';
const avatar05 = 'assets/images/avatar/05.jpg';
const avatar10 = 'assets/images/avatar/10.jpg';
const avatar09 = 'assets/images/avatar/09.jpg';
const avatar06 = 'assets/images/avatar/06.jpg';

export type ClientLogoType = {
  gray: string;
  light: string;
  dark: string;
};

export const clientLogoData: ClientLogoType[] = [
  { gray: logoGray01, light: logoLight01, dark: logoDark01 },
  { gray: logoGray02, light: logoLight02, dark: logoDark02 },
  { gray: logoGray03, light: logoLight03, dark: logoDark03 },
  { gray: logoGray04, light: logoLight04, dark: logoDark04 },
  { gray: logoGray05, light: logoLight05, dark: logoDark05 },
  { gray: logoGray06, light: logoLight06, dark: logoDark06 },
  { gray: logoGray07, light: logoLight07, dark: logoDark07 },
  { gray: logoGray08, light: logoLight08, dark: logoDark08 },
];

export type AwardType = {
  image: string;
  title: string;
};

export const awardsData: AwardType[] = [
  {
    image: fwaLight,
    title: 'Digital vanguard award',
  },
  {
    image: clutchLight,
    title: 'Best website of the week',
  },
  {
    image: webby,
    title: '5X developer awards',
  },
];

export type HistoryType = {
  title: string;
  description: string;
};

export const historyData: HistoryType[] = [
  {
    title: 'Present - 2024',
    description:
      'With a vision for the future, we are excited to explore new opportunities, expand our services, and continue delivering exceptional visual solutions that inspire and engage.',
  },
  {
    title: '2022 - Reaching new heights',
    description:
      'Our commitment to quality and innovation continued to drive our growth and solidify our position as industry leaders.',
  },
  {
    title: '2020 - Adapting and innovating',
    description:
      'This year marked a significant pivot towards digital solutions, ensuring we stayed at the forefront of industry trends embracing new collaboration tools.',
  },
  {
    title: '2014 - Industry recognition',
    description:
      'These accolades not only highlighted our capabilities but also motivated us to continue pushing the boundaries of design.',
  },
  {
    title: '2008 - The Beginning',
    description:
      'It was founded with a vision to revolutionize the visual design industry. Starting as a small team of passionate designers, we set out to deliver creative solutions that make a difference.',
  },
];

export const avatarsData: string[] = [avatar02, avatar05, avatar10, avatar09, avatar06];

export type TestimonialType = {
  image: string;
  name: string;
  username: string;
  message: string;
  date: string;
};

export type TestimonialColumnType = {
  items: TestimonialType[];
};

export const testimonialsData: TestimonialColumnType[] = [
  {
    items: [
      {
        image: 'assets/images/avatar/09.jpg',
        name: 'Jacqueline Miller',
        username: '@jaqmilr56',
        message:
          'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
        date: 'Feb 22, 2024',
      },
      {
        image: 'assets/images/avatar/08.jpg',
        name: 'Michael Davis',
        username: '@Davischhotu',
        message:
          "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
        date: 'Jan 21, 2024',
      },
      {
        image: 'assets/images/avatar/05.jpg',
        name: 'Allen Smith',
        username: '@smith4u',
        message:
          'Working with this team has been an absolute pleasure. They took the time to understand our vision and delivered beyond our expectations. The creativity and professionalism they bring to the table are unmatched.',
        date: 'Jan 21, 2024',
      },
    ],
  },
  {
    items: [
      {
        image: 'assets/images/avatar/02.jpg',
        name: 'Louis Ferguson',
        username: '@fregulois2589',
        message:
          'Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no.',
        date: 'Jan 28, 2024',
      },
      {
        image: 'assets/images/avatar/04.jpg',
        name: 'Emma Watson',
        username: '@Emson589',
        message:
          'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
        date: 'Jan 21, 2024',
      },
      {
        image: 'assets/images/avatar/01.jpg',
        name: 'Allen Smith',
        username: '@Brownmunde',
        message:
          'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
        date: 'Jan 21, 2024',
      },
    ],
  },
  {
    items: [
      {
        image: 'assets/images/avatar/06.jpg',
        name: 'Samuel Bishop',
        username: '@samshop',
        message:
          'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
        date: 'Jan 28, 2024',
      },
      {
        image: 'assets/images/avatar/05.jpg',
        name: 'Allen Smith',
        username: '@smith4u',
        message:
          'Working with this team has been an absolute pleasure. They took the time to understand our vision and delivered beyond our expectations. The creativity and professionalism they bring to the table are unmatched.',
        date: 'Jan 21, 2024',
      },
      {
        image: 'assets/images/avatar/08.jpg',
        name: 'Michael Davis',
        username: '@Davischhotu',
        message:
          "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
        date: 'Jan 21, 2024',
      },
    ],
  },
];