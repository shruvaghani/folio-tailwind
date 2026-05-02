const client02 = 'assets/images/client/icons/02.svg';
const client03 = 'assets/images/client/icons/03.svg';
const client04 = 'assets/images/client/icons/04.svg';
const client05 = 'assets/images/client/icons/05.svg';
const client08 = 'assets/images/client/icons/08.svg';
const client09 = 'assets/images/client/icons/09.svg';
const client10 = 'assets/images/client/icons/10.svg';
const client12 = 'assets/images/client/icons/12.svg';

const service01 = 'assets/images/services/geo-shape/01.svg';
const service02 = 'assets/images/services/geo-shape/02.svg';
const service03 = 'assets/images/services/geo-shape/03.svg';
const service04 = 'assets/images/services/geo-shape/04.svg';
const service05 = 'assets/images/services/geo-shape/05.svg';

const portfolio1 = 'assets/images/portfolio/4by4/01.jpg';
const portfolio2 = 'assets/images/portfolio/4by4/02.jpg';
const portfolio3 = 'assets/images/portfolio/4by4/03.jpg';
const portfolio4 = 'assets/images/portfolio/4by4/04.jpg';
const portfolio5 = 'assets/images/portfolio/4by4/05.jpg';

const logoLight05 = 'assets/images/client/logo-light/05.svg';
const logoLight06 = 'assets/images/client/logo-light/06.svg';
const logoLight08 = 'assets/images/client/logo-light/08.svg';
const logoLight02 = 'assets/images/client/logo-light/02.svg';
const logoLight03 = 'assets/images/client/logo-light/03.svg';
const logoDark03 = 'assets/images/client/logo-dark/03.svg';
const logoDark08 = 'assets/images/client/logo-dark/08.svg';
const logoLight09 = 'assets/images/client/logo-light/09.svg';
const logoDark09 = 'assets/images/client/logo-dark/09.svg';
const logoDark02 = 'assets/images/client/logo-dark/02.svg';
const logoLight10 = 'assets/images/client/logo-light/10.svg';
const logoDark10 = 'assets/images/client/logo-dark/10.svg';
const logoDark06 = 'assets/images/client/logo-dark/06.svg';

const wing1 = 'assets/images/elements/wing-1.svg';
const wing2 = 'assets/images/elements/wing-2.svg';

const clutch = 'assets/images/elements/clutch.svg';
const fwa = 'assets/images/elements/fwa.svg';
const dribbble = 'assets/images/elements/dribbble.svg';

export type FeaturesType = {
  title: string;
  description: string;
  bgClass: string;
  iconClass: string;
  icon: string;
};

export const featuresData: FeaturesType[] = [
  {
    title: 'Future-proof solutions',
    description:
      'Our AI solutions are designed with scalability in mind, allowing your business to grow and adapt without the need.',
    bgClass: 'bg-warning/25',
    iconClass: 'text-warning',
    icon: `<svg class="text-warning" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5812 5.73541C42.4755 5.6878 43.2267 6.4001 43.2268 7.29567C43.2269 13.8143 42.6409 18.8998 41.541 22.788C40.441 26.6766 38.7961 29.4729 36.6033 31.2632C32.5146 34.6013 27.199 33.9631 21.9796 32.0571C23.4158 28.3359 25.8081 25.0887 29.3104 23.7778C30.1186 23.4753 30.5285 22.575 30.226 21.7668C29.9235 20.9586 29.0232 20.5486 28.215 20.8511C23.8177 22.4969 21.0169 26.2907 19.3648 30.1898C17.4616 27.1276 16.4531 24.1562 16.4066 21.3509C16.3559 18.2854 17.4583 15.553 19.5442 13.2865C23.6288 8.8482 31.3809 6.27845 41.5812 5.73541ZM19.3648 30.1898C19.168 30.6543 18.9875 31.1203 18.8225 31.5843C18.3369 32.9501 17.9746 34.3281 17.7223 35.6495C17.5234 35.2543 17.3162 34.8545 17.1014 34.4543C16.0691 32.531 14.8248 30.5291 13.4449 28.9866C12.1246 27.5107 10.3818 26.1181 8.33203 26.1181C7.46909 26.1181 6.76953 26.8177 6.76953 27.6806C6.76953 28.5436 7.46909 29.2431 8.33203 29.2431C8.97047 29.2431 9.91593 29.7288 11.1159 31.0701C12.2562 32.3448 13.3641 34.0992 14.348 35.9322C15.3244 37.7513 16.1429 39.5801 16.719 40.9601C17.0063 41.6484 17.2317 42.221 17.3845 42.6196C17.4609 42.8189 17.5191 42.9744 17.5578 43.079C17.5771 43.1313 17.5916 43.1709 17.601 43.1967L17.6113 43.2251L17.6135 43.2314L17.6138 43.2323L17.6139 43.2325L17.6139 43.2326C17.8947 44.0168 18.7414 44.4429 19.5386 44.2011C20.3358 43.9592 20.8031 43.1344 20.6007 42.3262C20.3928 41.4965 20.3128 40.0863 20.4886 38.3158C20.6617 36.5727 21.0725 34.5843 21.7669 32.6311C21.8354 32.4387 21.9062 32.2473 21.9796 32.0571C21.5007 31.8822 21.0225 31.6966 20.5462 31.5024C20.2561 31.3842 20.0082 31.1814 19.8348 30.9205C19.6725 30.6764 19.5158 30.4328 19.3648 30.1898Z" fill="currentColor"></path>
                        </svg>`,
  },
  {
    title: 'Data security and compliance',
    description:
      'We ensure full compliance with industry standards, safeguarding your data at all times.',
    bgClass: 'bg-primary/25',
    iconClass: 'text-primary',
    icon: `<svg class="text-primary" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4979 31.473C10.1631 31.7097 9.86596 31.9497 9.63182 32.1838C7.74117 34.0744 7.08688 36.5528 6.87055 38.4055C6.76034 39.3494 6.75755 40.1826 6.78209 40.7813C6.7944 41.0822 7.01417 42.7876 7.03109 42.9622C7.20559 42.979 8.91109 43.1988 9.2118 43.2111C9.81073 43.2357 10.6437 43.233 11.5877 43.1226C13.4403 42.9063 15.9188 42.2519 17.8094 40.3613C18.0436 40.1272 18.2835 39.8301 18.5203 39.4953C18.6762 39.2749 18.7542 39.1647 18.9789 38.6159C19.4868 37.3761 19.2859 35.0169 18.5758 33.8809C18.2614 33.3782 17.987 33.1036 17.4383 32.5549C16.8895 32.0061 16.6151 31.7317 16.1123 31.4174C14.9762 30.7074 12.6172 30.5065 11.3774 31.0142C10.8286 31.239 10.7184 31.3169 10.4979 31.473Z" fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1041 7.29265C36.9837 6.94724 38.6268 6.82155 39.8045 6.78213C40.5789 6.75622 40.9662 6.74326 41.3677 6.86095C42.1349 7.08586 42.9093 7.86015 43.1341 8.62745C43.2518 9.02893 43.2389 9.41618 43.2129 10.1907C43.1735 11.3683 43.0479 13.0114 42.7024 14.8909C42.0406 18.492 40.5504 23.077 37.1997 26.8837L36.7606 35.3195C36.566 39.0589 33.477 41.9912 29.7324 41.9912C25.9624 41.9912 22.8622 39.0203 22.7014 35.2537L22.6185 33.3108L16.6843 27.3766L14.7413 27.2937C10.9748 27.133 8.00391 24.0326 8.00391 20.2626C8.00391 16.518 10.9361 13.4292 14.6757 13.2345L23.1114 12.7955C26.9181 9.44472 31.5031 7.95447 35.1041 7.29265ZM31.2491 22.9166C31.2491 25.2178 29.3837 27.0833 27.0824 27.0833C24.7812 27.0833 22.9158 25.2178 22.9158 22.9166C22.9158 20.6154 24.7812 18.7499 27.0824 18.7499C29.3837 18.7499 31.2491 20.6154 31.2491 22.9166Z" fill="currentColor"></path>
                        </svg>`,
  },
  {
    title: 'Effortless integration and support',
    description:
      'We prioritize seamless integration of our AI solutions into your existing systems and workflows.',
    bgClass: 'bg-pink/25',
    iconClass: 'text-pink',
    icon: `<svg class="text-pink" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.1449 4.97022C36.5386 4.66956 35.9396 4.73612 35.5349 4.84152C35.1317 4.94645 34.7405 5.13597 34.3922 5.32947C33.7113 5.70762 32.8413 6.3055 31.809 7.01491L9.1608 22.5792C8.49876 23.034 7.89301 23.4503 7.46149 23.8259C7.0684 24.1682 6.38992 24.8263 6.37528 25.8257C6.3692 26.2417 6.46286 26.6532 6.64847 27.0255C7.0943 27.9201 7.99082 28.2195 8.49332 28.3578C9.04499 28.5097 9.77115 28.6226 10.5648 28.7461L18.0475 29.9103L13.063 38.7134C12.4699 39.7607 11.9669 40.649 11.6597 41.3403C11.5021 41.6953 11.351 42.0944 11.2841 42.5011C11.2163 42.9132 11.2083 43.5007 11.5471 44.0667C11.7835 44.4617 12.1204 44.7869 12.5235 45.0094C13.1011 45.3282 13.6879 45.2997 14.0973 45.2174C14.5013 45.1361 14.8951 44.9713 15.2442 44.8013C15.9244 44.4701 16.7944 43.9361 17.8203 43.3067L40.7311 29.2505C41.3947 28.8434 42.0057 28.4686 42.4465 28.1226C42.8538 27.8028 43.5459 27.1922 43.6203 26.213C43.6515 25.8022 43.5849 25.3899 43.4257 25.0099C43.0465 24.1042 42.1972 23.7428 41.7097 23.5678C41.1824 23.3782 40.4842 23.2153 39.7263 23.0382L31.6572 21.1522L36.7682 11.4183C37.3505 10.3093 37.8413 9.37477 38.1363 8.65395C38.2872 8.28508 38.429 7.87418 38.4855 7.46158C38.5424 7.04718 38.5376 6.44439 38.1674 5.87808C37.9134 5.48979 37.5605 5.17637 37.1449 4.97022Z" fill="currentColor"></path>
                        </svg>`,
  },
];

export type TabsType = {
  id: string;
  title: string;
  icon: string;
  active: boolean;
  content: {
    description: string;
    points: string[];
  };
};

export const tabsData: TabsType[] = [
  {
    id: 'mission',
    title: 'Our Mission',
    icon: 'target',
    active: true,
    content: {
      description:
        'We strive to be the trusted partner that helps our clients navigate the complexities of the digital age with confidence and ease',
      points: [
        'Advanced AI technology',
        'Boosting efficiency with optimized workflows',
        'Driving sustainable growth with insights',
      ],
    },
  },
  {
    id: 'vision',
    title: 'Our Vision',
    icon: 'eye',
    active: false,
    content: {
      description:
        "Effective design communicates your brand's identity, cultivates trust, and can significantly impact conversion rates and customer loyalty.",
      points: ['Tailored solutions', 'Proven track Record', 'Cost-effectiveness'],
    },
  },
  {
    id: 'goal',
    title: 'Our Goal',
    icon: 'trophy',
    active: false,
    content: {
      description:
        'We provide a range of tools, guides, and best practices to help you create designs, websites.',
      points: ['Digital pioneers', 'Continuous learning', 'Inspiring transformation'],
    },
  },
];

export type ClientIconType = {
  image: string;
  alt: string;
};

export const clientIconsData: ClientIconType[] = [
  { image: client08, alt: 'Client icon 1' },
  { image: client04, alt: 'Client icon 2' },
  { image: client12, alt: 'Client icon 3' },
  { image: client09, alt: 'Client icon 4' },
  { image: client05, alt: 'Client icon 5' },
  { image: client03, alt: 'Client icon 6' },
  { image: client02, alt: 'Client icon 7' },
  { image: client10, alt: 'Client icon 8' },
];

export type ServiceType = {
  title: string;
  image: string;
  link: string;
};

export const servicesData: ServiceType[] = [
  {
    title: 'AI consulting and strategy',
    image: service01,
    link: '/service/single',
  },
  {
    title: 'Natural language processing (NLP)',
    image: service02,
    link: '/service/single',
  },
  {
    title: 'Custom AI development',
    image: service03,
    link: '/service/single',
  },
  {
    title: 'AI-Powered automation',
    image: service04,
    link: '/service/single',
  },
  {
    title: 'Computer vision solutions',
    image: service05,
    link: '/service/single',
  },
];

export type PortfolioType = {
  image: string;
  logo: string;
  title: string;
  link: string;
};

export const portfolioData: PortfolioType[] = [
  {
    image: portfolio1,
    logo: logoLight05,
    title: 'AI-Driven customer insights platform',
    link: '/portfolio/case-study/v1',
  },
  {
    image: portfolio2,
    logo: logoLight06,
    title: 'Automated customer support with NLP',
    link: '/portfolio/case-study/v1',
  },
  {
    image: portfolio3,
    logo: logoLight08,
    title: 'Smart inventory management for retail',
    link: '/portfolio/case-study/v1',
  },
  {
    image: portfolio4,
    logo: logoLight02,
    title: 'AI-powered fraud detection',
    link: '/portfolio/case-study/v1',
  },
  {
    image: portfolio5,
    logo: logoLight03,
    title: 'AI-Driven customer insights platform',
    link: '/portfolio/case-study/v1',
  },
];

export type CounterType = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  color: string;
  hasLeftDivider?: boolean;
  hasRightDivider?: boolean;
};

export const counterData: CounterType[] = [
  {
    value: 105,
    suffix: '+',
    label: 'Total projects completed',
    color: 'text-primary',
    hasRightDivider: true,
  },
  {
    value: 35,
    suffix: '+',
    label: 'Awards and accolades',
    color: 'text-purple',
  },
  {
    value: 10,
    prefix: '>',
    suffix: 'K',
    label: 'Satisfied users',
    color: 'text-pink',
    hasLeftDivider: true,
  },
];

export type TestimonialType = {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
};

export const testimonialsData: TestimonialType[] = [
  {
    id: 1,
    name: 'Jacqueline Miller',
    role: 'Product designer',
    message: `Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. `,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Louis Ferguson',
    role: 'Web Developer',
    message: `Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Watson',
    role: 'UI/UX designer',
    message: `Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.`,
    rating: 5,
  },
];

export type ClientLogoType = {
  id: number;
  light: string;
  dark: string;
};

export const clientLogosData: ClientLogoType[] = [
  { id: 1, light: logoLight03, dark: logoDark03 },
  { id: 2, light: logoLight08, dark: logoDark08 },
  { id: 3, light: logoLight09, dark: logoDark09 },
  { id: 4, light: logoLight02, dark: logoDark02 },
  { id: 5, light: logoLight10, dark: logoDark10 },
  { id: 6, light: logoLight06, dark: logoDark06 },
];

export type AwardType = {
  title: string;
  year: string;
  logo: string;
  wingLeft: string;
  wingRight: string;
};

export const awardsData: AwardType[] = [
  {
    title: 'Best Website Award',
    year: '2023',
    logo: clutch,
    wingLeft: wing1,
    wingRight: wing2,
  },
  {
    title: 'Digital Vanguard Award',
    year: '2022',
    logo: fwa,
    wingLeft: wing1,
    wingRight: wing2,
  },
  {
    title: 'Website of the day',
    year: '2021',
    logo: dribbble,
    wingLeft: wing1,
    wingRight: wing2,
  },
];
