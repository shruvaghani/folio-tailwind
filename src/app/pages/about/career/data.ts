const step01 = 'assets/images/career/steps/01.jpg';
const step02 = 'assets/images/career/steps/02.jpg';
const step03 = 'assets/images/career/steps/03.jpg';

const avatar01 = 'assets/images/avatar/01.jpg';
const avatar04 = 'assets/images/avatar/04.jpg';
const avatar07 = 'assets/images/avatar/07.jpg';
const avatar09 = 'assets/images/avatar/09.jpg';
const avatar10 = 'assets/images/avatar/10.jpg';

export type FeatureType = {
  icon: string;
  colorClass: string;
  title: string;
};

export const featuresData: FeatureType[] = [
  {
    icon: 'users',
    colorClass: 'text-pink',
    title: 'Collaborative culture',
  },
  {
    icon: 'target',
    colorClass: 'text-purple',
    title: 'Competitive benefits',
  },
  {
    icon: 'boxes',
    colorClass: 'text-success',
    title: 'Impactful projects',
  },
  {
    icon: 'flame',
    colorClass: 'text-primary',
    title: 'Community focused',
  },
  {
    icon: 'gem',
    colorClass: 'text-info',
    title: 'Cutting-Edge technology',
  },
  {
    icon: 'layers',
    colorClass: 'text-warning',
    title: 'Inspiring leadership',
  },
];

export type ProcessTabType = {
  id: string;
  ariaLabel: string;
  image: string;
  title: string;
  description: string;
  isHidden?: boolean;
};

export const processTabsData: ProcessTabType[] = [
  {
    id: 'proceee-one-tab',
    ariaLabel: 'proceee-one',
    image: step01,
    title: 'What to Do',
    description:
      'Submit your application through our online portal. Make sure your resume is up-to-date and tailored to the specific you’re applying for. Include a cover letter if required, highlighting your relevant experience and why you’re interested in joining',
    isHidden: false,
  },
  {
    id: 'process-two-tab',
    ariaLabel: 'process-two',
    image: step02,
    title: 'What to Do',
    description:
      'This interview typically lasts 20-30 minutes and will be conducted via phone or video call. We’ll ask about your previous experience, your understanding of the role, and why you’re interested in working with us.',
    isHidden: true,
  },
  {
    id: 'process-three-tab',
    ariaLabel: 'process-three',
    image: step03,
    title: 'What to Do',
    description:
      'Participate in an initial interview with a member of our HR team. This is your chance to learn more about company and to ask any questions you might have about the or company culture.',
    isHidden: true,
  },
];

export type TabNavType = {
  id: string;
  label: string;
  tabTarget: string;
  isActive?: boolean;
  isDisabled?: boolean;
};

export const tabNavData: TabNavType[] = [
  {
    id: 'proceee-one',
    label: '1. Application Submission',
    tabTarget: '#proceee-one-tab',
    isActive: true,
  },
  {
    id: 'process-two',
    label: '2. Initial Screening',
    tabTarget: '#process-two-tab',
  },
  {
    id: 'process-three',
    label: '3. First Interview',
    tabTarget: '#process-three-tab',
  },
  {
    id: 'process-four',
    label: '4. Technical/Skill Assessment',
    tabTarget: '#process-four-tab',
    isDisabled: true,
  },
  {
    id: 'process-five',
    label: '5. Final Interview',
    tabTarget: '#process-five-tab',
    isDisabled: true,
  },
];

export type JobType = {
  title: string;
  location: string;
  department: string;
  link: string;
};

export const jobsData: JobType[] = [
  {
    title: 'Sales account executive',
    location: 'London',
    department: 'Sales',
    link: '/career/single',
  },
  {
    title: 'General office manager',
    location: 'Remote work',
    department: 'Software development',
    link: '/career/single',
  },
  {
    title: 'Machine learning specialist',
    location: 'New york',
    department: 'Design',
    link: '/career/single',
  },
  {
    title: 'Senior product manager',
    location: 'London',
    department: 'Sales',
    link: '/career/single',
  },
];

export type TestimonialType = {
  rating: number;
  hasHalf?: boolean;
  text: string;
  image: string;
  name: string;
  role: string;
};

export const testimonialData: TestimonialType[] = [
  {
    rating: 4,
    text: 'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
    image: avatar09,
    name: 'Jacqueline Miller',
    role: 'Product designer',
  },
  {
    rating: 5,
    text: 'Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no.',
    image: avatar10,
    name: 'Louis Ferguson',
    role: 'Web Developer',
  },
  {
    rating: 4,
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    image: avatar04,
    name: 'Emma Watson',
    role: 'UI/UX designer',
  },
  {
    rating: 4,
    text: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    image: avatar07,
    name: 'Allen Smith',
    role: 'Manager',
  },
  {
    rating: 4,
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    image: avatar01,
    name: 'Emma Watson',
    role: 'UI/UX designer',
  },
];
