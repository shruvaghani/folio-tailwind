// Client Logos
const logoGray01 = 'assets/images/client/logo-gray/01.svg';
const logoGray02 = 'assets/images/client/logo-gray/02.svg';
const logoGray03 = 'assets/images/client/logo-gray/03.svg';
const logoGray04 = 'assets/images/client/logo-gray/04.svg';
const logoGray05 = 'assets/images/client/logo-gray/05.svg';
const logoGray06 = 'assets/images/client/logo-gray/06.svg';

const logoLight01 = 'assets/images/client/logo-light/01.svg';
const logoLight02 = 'assets/images/client/logo-light/02.svg';
const logoLight03 = 'assets/images/client/logo-light/03.svg';
const logoLight04 = 'assets/images/client/logo-light/04.svg';
const logoLight05 = 'assets/images/client/logo-light/05.svg';
const logoLight06 = 'assets/images/client/logo-light/06.svg';

const logoDark01 = 'assets/images/client/logo-dark/01.svg';
const logoDark02 = 'assets/images/client/logo-dark/02.svg';
const logoDark03 = 'assets/images/client/logo-dark/03.svg';
const logoDark04 = 'assets/images/client/logo-dark/04.svg';
const logoDark05 = 'assets/images/client/logo-dark/05.svg';
const logoDark06 = 'assets/images/client/logo-dark/06.svg';

// Portfolio Images
const portfolio01 = 'assets/images/portfolio/01.jpg';
const portfolio02 = 'assets/images/portfolio/02.jpg';
const portfolio03 = 'assets/images/portfolio/03.jpg';
const portfolio04 = 'assets/images/portfolio/04.jpg';

// Blog Images
const blog01 = 'assets/images/blog/01.jpg';
const blog02 = 'assets/images/blog/02.jpg';

// Avatar Images
const avatar01 = 'assets/images/avatar/01.jpg';
const avatar09 = 'assets/images/avatar/09.jpg';
const avatar10 = 'assets/images/avatar/10.jpg';

export type ClientType = {
  grayLogo: string;
  lightLogo: string;
  darkLogo: string;
};

export const clientData: ClientType[] = [
  { grayLogo: logoGray01, lightLogo: logoLight01, darkLogo: logoDark01 },
  { grayLogo: logoGray02, lightLogo: logoLight02, darkLogo: logoDark02 },
  { grayLogo: logoGray03, lightLogo: logoLight03, darkLogo: logoDark03 },
  { grayLogo: logoGray04, lightLogo: logoLight04, darkLogo: logoDark04 },
  { grayLogo: logoGray05, lightLogo: logoLight05, darkLogo: logoDark05 },
  { grayLogo: logoGray06, lightLogo: logoLight06, darkLogo: logoDark06 },
];


export type ServiceType = {
  icon: string;
  iconBgColor: string;
  title: string;
  link: string;
};

export const serviceData: ServiceType[] = [
  {
    icon: `<svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0625 7.24609L9.39428 8.47457C8.84539 8.61902 8.57095 8.69124 8.36249 8.85973C8.29398 8.91511 8.23152 8.97758 8.17614 9.04609C8.00764 9.25454 7.93542 9.52899 7.79098 10.0779L5.15533 20.0933C4.4819 22.6524 4.14518 23.9319 4.6738 24.7443C4.84027 25.0002 5.05844 25.2183 5.31429 25.3848C6.12669 25.9134 7.40621 25.5767 9.96526 24.9033L19.9807 22.2676C20.5296 22.1232 20.8041 22.0509 21.0125 21.8825C21.081 21.8271 21.1435 21.7646 21.1989 21.6961C21.3674 21.4876 21.4396 21.2132 21.584 20.6643L22.8125 15.9961M14.0625 7.24609L22.8125 15.9961M14.0625 7.24609L16.2215 5.08708C16.8844 4.42422 17.2158 4.09279 17.617 4.02925C17.7465 4.00873 17.8785 4.00873 18.008 4.02925C18.4092 4.09279 18.7406 4.42422 19.4035 5.08708L24.9715 10.6551C25.6344 11.318 25.9658 11.6494 26.0293 12.0506C26.0499 12.1801 26.0499 12.3121 26.0293 12.4416C25.9658 12.8428 25.6344 13.1742 24.9715 13.8371L22.8125 15.9961"
            stroke="currentColor"
            stroke-width="1.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12.3438 17.7206C11.4377 16.8145 11.4377 15.3454 12.3438 14.4393C13.2498 13.5332 14.7189 13.5332 15.625 14.4393C16.5311 15.3454 16.5311 16.8145 15.625 17.7206C14.7189 18.6267 13.2498 18.6267 12.3438 17.7206ZM12.3438 17.7206L9.0625 21.0018"
            stroke="currentColor"
            stroke-width="1.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>`,
    iconBgColor: 'bg-pink',
    title: 'Web design & Development',
    link: '/service-single',
  },
  {
    icon: ` <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0236 9.15987C12.8183 10.2735 12.6237 12.4046 12.6237 13.5372C12.6237 14.6698 12.6751 16.8374 13.0236 17.9146M13.0236 9.15987L15.299 7.16619C18.129 4.68654 19.5441 3.44671 20.7529 3.6875C21.1289 3.7624 21.4826 3.92277 21.7868 4.15622C22.7645 4.90675 22.7645 6.7881 22.7645 10.5508V16.4976C22.7645 20.205 22.7645 22.0587 21.7959 22.8094C21.4946 23.0429 21.1431 23.2047 20.7698 23.2817C19.5697 23.5294 18.1624 22.3248 15.348 19.9155C14.0552 18.8089 13.0945 17.9836 13.0236 17.9146M13.0236 9.15987C12.5257 9.12504 10.2889 9.12435 8.13707 9.1327C6.35394 9.13961 5.46238 9.14307 4.82351 9.58696C4.57708 9.75818 4.36167 9.97443 4.1914 10.2215C3.75 10.8621 3.75 11.7571 3.75 13.5472V13.5472C3.75 15.3457 3.75 16.2449 4.19408 16.8868C4.36538 17.1344 4.58193 17.3507 4.8297 17.5218C5.47203 17.9652 6.368 17.9643 8.15993 17.9625C10.3048 17.9603 12.5274 17.9493 13.0236 17.9146M6.28564 17.9574L6.25808 24.37C6.25362 25.4068 7.09318 26.2496 8.13001 26.249V26.249C9.16293 26.2485 10 25.411 10 24.3781V17.958M25.2997 8.44266C26.5673 12.2636 26.5673 14.8109 25.2997 18.6318"
            stroke="currentColor"
            stroke-width="1.875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`,
    iconBgColor: 'bg-warning',
    title: 'Digital marketing solutions',
    link: '/service-single',
  },
  {
    icon: `<svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0041 5.00246C22.0992 5.05566 17.8007 5.50793 14.5526 8.32076C14.4071 8.44676 14.3344 8.50976 14.2594 8.54588C14.2332 8.55852 14.2104 8.56769 14.1827 8.57675C14.1037 8.60266 14.0151 8.60727 13.838 8.61649L8.85257 8.87597C7.10702 8.96682 5.73828 10.4086 5.73828 12.1566C5.73828 13.9163 7.12504 15.3636 8.88323 15.4386L10.0921 15.4902C10.1694 15.4935 10.2081 15.4951 10.2451 15.5012C10.3491 15.5183 10.447 15.5613 10.5298 15.6263C10.5593 15.6495 10.5867 15.6769 10.6415 15.7316L10.6415 15.7316L14.2629 19.353L14.2629 19.3531C14.3176 19.4078 14.345 19.4352 14.3682 19.4647C14.4332 19.5475 14.4762 19.6455 14.4933 19.7494C14.4994 19.7864 14.501 19.8251 14.5043 19.9025L14.5559 21.1113C14.631 22.8695 16.0782 24.2562 17.838 24.2562C19.5859 24.2562 21.0277 22.8875 21.1185 21.1419L21.378 16.1565C21.3873 15.9794 21.3919 15.8908 21.4178 15.8118C21.4268 15.7841 21.436 15.7613 21.4486 15.7351C21.4848 15.6601 21.5478 15.5874 21.6738 15.4419C24.4866 12.1938 24.9389 7.89535 24.9921 5.99042C25.0026 5.6128 25.0079 5.42399 24.8849 5.25275C24.8499 5.20402 24.7905 5.14459 24.7418 5.1096C24.5705 4.98664 24.3817 4.99191 24.0041 5.00246Z"
            stroke="currentColor"
            stroke-width="1.875"
            stroke-linejoin="round"
          />
          <path
            d="M5.00001 24.1078C5.00041 24.4188 5.00061 24.5743 5.11981 24.7383C5.15137 24.7817 5.21443 24.8448 5.25785 24.8764C5.42182 24.9956 5.57733 24.9958 5.88834 24.9962C6.94742 24.9975 8.77939 24.7975 10.0235 23.5534C10.0865 23.4904 10.1482 23.4246 10.2084 23.3563C11.0252 22.4301 10.674 21.0685 9.80083 20.1953V20.1953C8.92763 19.3221 7.56609 18.971 6.63989 19.7878C6.5716 19.848 6.50574 19.9097 6.44279 19.9726C5.19864 21.2168 4.99864 23.0487 5.00001 24.1078Z"
            stroke="currentColor"
            stroke-width="1.875"
            stroke-linejoin="round"
          />
          <path
            d="M15.0985 14.8971C15.7081 15.5066 16.6964 15.5066 17.3059 14.8971V14.8971C17.9155 14.2875 17.9155 13.2992 17.3059 12.6896V12.6896C16.6964 12.0801 15.7081 12.0801 15.0985 12.6896V12.6896C14.4889 13.2992 14.4889 14.2875 15.0985 14.8971V14.8971Z"
            stroke="currentColor"
            stroke-width="1.875"
            stroke-linejoin="round"
          />
        </svg>`,
    iconBgColor: 'bg-primary',
    title: 'Brand strategy & Identity',
    link: '/service-single',
  },
];

export type faqType = {
  id: string;
  title: string;
  description: string;
  isActive?: boolean;
};

export const faqsData: faqType[] = [
  {
    id: '01',
    title: 'Consultation & Strategy',
    description:
      'We begin by understanding your goals, challenges, and vision. Through in-depth consultation, we craft a tailored strategy that aligns with your objectives.',
    isActive: true,
  },
  {
    id: '02',
    title: 'Implementation & Development',
    description:
      'We provide a range of tools, guides, and best practices to help you create designs, websites, and content that are inclusive and accessible to all individuals, regardless of their visual abilities.',
  },
  {
    id: '03',
    title: 'Refinement & Delivery',
    description:
      'This crucial process ensures that content is easily readable and perceivable by individuals with varying degrees of visual impairment. By adhering to accessibility standards, you create a more inclusive and user-friendly experience for all users, regardless of their visual abilities, and contribute to a more accessible digital environment.',
  },
];

export type CounterType = {
  count: number;
  suffix: string;
  color: string;
  text: string;
  divider?: boolean;
  prefix?: string;
};

export const countersData: CounterType[] = [
  {
    count: 22,
    suffix: '+',
    color: 'text-primary',
    text: 'Years of experience',
    divider: true,
  },
  {
    count: 200,
    suffix: '+',
    color: 'text-pink',
    text: `In-house projects </br> completed`,
    divider: true,
  },
  {
    count: 32,
    suffix: '+',
    color: 'text-info',
    text: 'Awards and counting',
    divider: true,
  },
  {
    prefix: '>',
    count: 10,
    suffix: 'K',
    color: 'text-warning',
    text: 'Satisfied users',
  },
];

export type PortfolioType = {
  col: string;
  img: string;
  category: string;
  title: string;
  link: string;
};

export const portfolioData: PortfolioType[] = [
  {
    col: 'md:col-span-7',
    img: portfolio01,
    category: 'Technology',
    title: 'Brand Identity Development',
    link: '/portfolio/case-study/v1',
  },
  {
    col: 'md:col-span-5',
    img: portfolio02,
    category: 'Technology',
    title: 'E-commerce platform launch',
    link: '/portfolio/case-study/v1',
  },
  {
    col: 'md:col-span-5',
    img: portfolio03,
    category: 'Technology',
    title: 'Mobile app development',
    link: '/portfolio/case-study/v1',
  },
  {
    col: 'md:col-span-7',
    img: portfolio04,
    category: 'Technology',
    title: 'Digital marketing overhaul',
    link: '/portfolio/case-study/v1',
  },
];

export type TestimonialType = {
  img: string;
  text: string;
  rating: number;
  name: string;
  role: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    img: avatar09,
    text: `Our passion for customer excellence is just one reason why we are the market leader...`,
    rating: 4.5,
    name: 'Jacqueline Miller',
    role: 'Product designer',
  },
  {
    img: avatar10,
    text: `Their team went above and beyond to understand our needs...`,
    rating: 5,
    name: 'Louis Ferguson',
    role: 'Web Developer',
  },
  {
    img: avatar01,
    text: `Was out laughter raptures returned outweigh...`,
    rating: 4.5,
    name: 'Emma Watson',
    role: 'UI/UX designer',
  },
];

export type BlogType = {
  type: string;
  link: string;
  image?: string;
  category: string;
  title: string;
  buttonText: string;
};

export const blogData: BlogType[] = [
  {
    type: 'image-card',
    link: '/blog/single',
    image: blog01,
    category: 'Lifestyle',
    title: 'Techniques to captivate your audience',
    buttonText: 'Read more',
  },
  {
    type: 'gradient-card',
    link: '/blog/single',
    category: 'Research',
    title: 'Building a strong identity for your business',
    buttonText: 'Read more',
  },
  {
    type: 'image-card',
    link: '/blog/single',
    image: blog02,
    category: 'Lifestyle',
    title: "Tips for improving your website's visibility",
    buttonText: 'Read more',
  },
];

