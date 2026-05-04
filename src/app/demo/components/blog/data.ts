const blogImage1 = 'assets/images/blog/4by3/03.jpg';
const blogImage2 = 'assets/images/blog/4by3/04.jpg';

const avatar5 = 'assets/images/avatar/05.jpg';
const avatar9 = 'assets/images/avatar/09.jpg';

const blogCardImage1 = 'assets/images/blog/4by4/01.jpg';
const blogCardImage2 = 'assets/images/blog/4by4/02.jpg';
const blogCardImage3 = 'assets/images/blog/4by4/03.jpg';
const blogCardImage4 = 'assets/images/blog/4by4/04.jpg';

const teamImage1 = 'assets/images/team/01.jpg';
const teamImage2 = 'assets/images/team/02.jpg';
const teamImage3 = 'assets/images/team/03.jpg';

const blogHighlightImage1 = 'assets/images/blog/01.jpg';
const blogHighlightImage2 = 'assets/images/blog/02.jpg';

export type FeaturedBlogType = {
  title: string;
  category: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  link: string;
};

export const featuredBlogData: FeaturedBlogType[] = [
  {
    title: 'Building a strong identity for your business',
    category: 'Lifestyle',
    image: blogImage1,
    author: 'Louis',
    authorImage: avatar5,
    date: 'June 28, 2024',
    readTime: '5 min read',
    link: '/blog/single',
  },
  {
    title: "Tips for improving your website's visibility",
    category: 'Research',
    image: blogImage2,
    author: 'Amanda',
    authorImage: avatar9,
    date: 'July 15, 2024',
    readTime: '5 min read',
    link: '/blog/single',
  },
];

export type CategoryType = {
  name: string;
  link: string | any[];
};

export const categoriesData: CategoryType[] = [
  { name: 'blog', link: [] },
  { name: 'business', link: [] },
  { name: 'bootstrap', link: [] },
  { name: 'data science', link: [] },
  { name: 'deep learning', link: [] },
  { name: 'Adventure', link: [] },
  { name: 'Community', link: [] },
  { name: 'Tutorials', link: [] },
  { name: 'Interview', link: [] },
  { name: 'Photography', link: [] },
  { name: 'Classic', link: [] },
];

export type SocialMediaType = {
  icon: string;
  iconType: 'lucide' | 'iconify';
  bgColor: string;
  link: string | any[];
};

export const socialMediaData: SocialMediaType[] = [
  { icon: 'facebook', iconType: 'lucide', bgColor: 'bg-[#5d82d1]', link: [] },
  { icon: 'instagram', iconType: 'lucide', bgColor: 'bg-[#c22b72]', link: [] },
  { icon: 'tabler:brand-x', iconType: 'iconify', bgColor: 'bg-[#40bff5]', link: [] },
  { icon: 'linkedin', iconType: 'lucide', bgColor: 'bg-[#238cc8]', link: [] },
];

export type TopicType = {
  name: string;
  count: number;
};

export const topicData: TopicType[] = [
  { name: 'All topics', count: 48 },
  { name: 'Digital', count: 12 },
  { name: 'Marketing', count: 5 },
  { name: 'Development', count: 10 },
  { name: 'Technology', count: 9 },
  { name: 'UI/UX design', count: 4 },
  { name: 'Lifestyle', count: 3 },
];

export type BlogCardType = {
  title: string;
  image: string;
  category: string;
  categoryClass: string;
  readTime: string;
  author: string;
  link: string;
};

export const blogCardsData: BlogCardType[] = [
  {
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    image: blogCardImage1,
    category: 'Technology',
    categoryClass: 'bg-primary text-white',
    readTime: '5 min read',
    author: 'Carolyn Ortiz',
    link: '/blog/single',
  },
  {
    title: '5 investment doubts you should clarify',
    image: blogCardImage2,
    category: 'Lifestyle',
    categoryClass: 'bg-info text-white',
    readTime: '10 min read',
    author: 'Amanda Reed',
    link: '/blog/single',
  },
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    image: blogCardImage3,
    category: 'Design',
    categoryClass: 'bg-purple text-white',
    readTime: '7 min read',
    author: 'Joan Wallace',
    link: '/blog/single',
  },
  {
    title: 'Effortless Web Development with Folio',
    image: blogCardImage4,
    category: 'Marketing',
    categoryClass: 'bg-pink text-white',
    readTime: '12 min read',
    author: 'Lori Stevens',
    link: '/blog/single',
  },
];

export type SocialIcon = {
  type: 'lucide' | 'iconify';
  icon: string;
  link: any[];
};

export type TeamType = {
  name: string;
  image: string;
  blogs: string;
  socials: SocialIcon[];
};

export const teamData: TeamType[] = [
  {
    name: 'Emma Watson',
    image: teamImage1,
    blogs: '36 Blogs',
    socials: [
      { type: 'lucide', icon: 'facebook', link: [] },
      { type: 'iconify', icon: 'tabler:brand-x', link: [] },
      { type: 'lucide', icon: 'instagram', link: [] },
    ],
  },
  {
    name: 'Allen Smith',
    image: teamImage2,
    blogs: '25 Blogs',
    socials: [
      { type: 'lucide', icon: 'facebook', link: [] },
      { type: 'iconify', icon: 'tabler:brand-x', link: [] },
      { type: 'lucide', icon: 'instagram', link: [] },
    ],
  },
  {
    name: 'Louis Ferguson',
    image: teamImage3,
    blogs: '15 Blogs',
    socials: [
      { type: 'lucide', icon: 'facebook', link: [] },
      { type: 'iconify', icon: 'tabler:brand-x', link: [] },
    ],
  },
];

export type BlogHighlightType = {
  title: string;
  category?: string;
  type: 'image' | 'youtube' | 'vimeo';
  image?: string;
  videoUrl?: string;
  link: string;
};

export const blogHighlightData: BlogHighlightType[] = [
  {
    title: 'Techniques to captivate your audience',
    category: 'Lifestyle',
    type: 'image',
    image: blogHighlightImage1,
    link: '/blog/single',
  },
  {
    title: 'Never underestimate the influence',
    type: 'youtube',
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    link: '/blog/single',
  },
  {
    title: '10 things you need to know about Folio',
    type: 'vimeo',
    videoUrl: "https://player.vimeo.com/video/167434033?title=0&amp;byline=0&amp;portrait=0",
    link: '/blog/single',
  },
  {
    title: 'Tips for improving your website\'s visibility',
    category: 'Lifestyle',
    type: 'image',
    image: blogHighlightImage2,
    link: '/blog/single',
  },
];