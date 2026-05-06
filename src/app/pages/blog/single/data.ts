const galleryImage01 = 'assets/images/blog/4by4/01.jpg';
const galleryImage03 = 'assets/images/blog/4by4/03.jpg';
const galleryImage04 = 'assets/images/blog/4by4/04.jpg';

const avatar01 = 'assets/images/avatar/01.jpg';
const avatar06 = 'assets/images/avatar/06.jpg';
const avatar04 = 'assets/images/avatar/04.jpg';

const blogImage02 = 'assets/images/blog/4by3/02.jpg';
const blogImage04 = 'assets/images/blog/4by3/04.jpg';
const blogImage03 = 'assets/images/blog/4by3/03.jpg';

export type GalleryType = {
  image: string;
  link: string;
};

export const galleryData: GalleryType[] = [
  {
    image: galleryImage01,
    link: galleryImage01,
  },
  {
    image: galleryImage03,
    link: galleryImage03,
  },
  {
    image: galleryImage04,
    link: galleryImage04,
  },
];

export type TagType = {
  label: string;
  link: string;
};

export const tagData: TagType[] = [
  { label: 'blog', link: '' },
  { label: 'business', link: '' },
  { label: 'bootstrap', link: '' },
  { label: 'data science', link: '' },
  { label: 'deep learning', link: '' },
  { label: 'deep learning', link: '' },
  { label: 'deep learning', link: '' },
];

export type CommentType = {
  name: string;
  date: string;
  message: string;
  avatar: string;
  isReply?: boolean;
  likes?: number;
};

export const commentData: CommentType[] = [
  {
    name: 'Frances Guerrero',
    date: 'June 11, 2021 at 6:01 am',
    message:
      'Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    avatar: avatar01,
    likes: 1,
  },
  {
    name: 'Allen Smith',
    date: 'June 12, 2021 at 7:30 am',
    message: 'Water timed folly right aware if oh truth.',
    avatar: avatar06,
    isReply: true,
  },
  {
    name: 'Judy Nguyen',
    date: 'June 18, 2021 at 11:55 am',
    message:
      'Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther-related bed and passage comfort civilly.',
    avatar: avatar04,
  },
];

export type BlogSliderType = {
  category: string;
  date: string;
  title: string;
  image: string;
  link: string;
};

export const blogSliderData: BlogSliderType[] = [
  {
    category: 'Design',
    date: 'June 28, 2024',
    title: 'Techniques to captivate your audience',
    image: blogImage02,
    link: '/blog/single',
  },
  {
    category: 'Research',
    date: 'July 15, 2024',
    title: "Tips for improving your website's visibility",
    image: blogImage04,
    link: '/blog/single',
  },
  {
    category: 'Research',
    date: 'July 15, 2024',
    title: 'Never underestimate the influence',
    image: blogImage03,
    link: '/blog/single',
  },
];