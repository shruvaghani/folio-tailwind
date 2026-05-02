export type FooterLink = {
  label: string;
  link: string;
  icon?: string;
  badge?: {
    text: string;
    class: string;
  };
};

export type FooterType = {
  title: string;
  links: FooterLink[];
};

export const footerData: FooterType[] = [
  {
    title: 'Company',
    links: [
      { label: 'About us', link: '/about/v1' },
      { label: 'Contact us', link: '/contact-us' },
      {
        label: 'Career',
        link: '/career',
        badge: {
          text: 'We are hiring!',
          class: 'bg-success text-white',
        },
      },
      { label: 'Career detail', link: '/career/single' },
      { label: 'Become a partner', link: '/contact-us/v2' },
      { label: 'Services', link: '/service/v1' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case studies', link: '/portfolio/case-study/v1' },
      { label: 'Pricing', link: '/pricing/v1' },
      { label: 'Blogs', link: '/blog/minimal' },
      { label: 'Blog detail', link: '/blog/single' },
      { label: 'Success stories', link: '/contact-us/v2' },
      {
        label: 'Services',
        link: '/service/v1',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Documentation', link: '', icon: 'file-text' },
      {
        label: 'Changelog',
        link: '',
        icon: 'target',
        badge: {
          text: 'v2.0.0',
          class: 'bg-primary text-white',
        },
      },
      { label: 'Supports', link: '', icon: 'message-square' },
      { label: 'Newsletter', link: '', icon: 'send' },
      { label: 'Help center', link: '', icon: 'life-buoy' },
    ],
  },
];

export type SocialLinkType = {
  icon?: string; 
  iconify?: string;
  link: string;
};


export const socialLinkData: SocialLinkType[] = [
  {
    icon: 'facebook',
    link: '',
  },
  {
    icon: 'instagram',
    link: '',
  },
  {
    iconify: 'tabler:brand-x',
    link: '',
  },
  {
    icon: 'linkedin',
    link: '',
  },
];
