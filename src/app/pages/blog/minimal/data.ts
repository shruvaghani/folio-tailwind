const blogImage01 = 'assets/images/blog/4by3/01.jpg';
const blogImage02 = 'assets/images/blog/4by3/02.jpg';
const blogImage03 = 'assets/images/blog/4by3/03.jpg';
const blogImage04 = 'assets/images/blog/4by3/04.jpg';

export type BlogType = {
  category: string;
  date: string;
  title: string;
  image: string;
  link: string;
};

export const blogData: BlogType[] = [
  {
    category: 'Technology',
    date: 'June 28, 2024',
    title: 'Building a strong identity for your business',
    image: blogImage01,
    link: '/blog/single',
  },
  {
    category: 'Research',
    date: 'July 15, 2024',
    title: "Tips for improving your website's visibility",
    image: blogImage04,
    link: '/blog/single',
  },
];

export const blog2Data: BlogType[] = [
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
    title: 'Never underestimate the influence',
    image: blogImage03,
    link: '/blog/single',
  },
];