const appleIcon = 'assets/images/elements/apple.svg';
const microsoftIcon = 'assets/images/elements/microsoft.svg';
const androidIcon = 'assets/images/elements/android.svg';
const linuxIcon = 'assets/images/elements/linux.svg';

export type FooterLink = {
  label: string;
  link: string;
  icon?: string;
  badge?: {
    text: string;
    class: string;
  };
};

export type Footer1Type = {
  title: string;
  links: FooterLink[];
};

export const footer1Data: Footer1Type[] = [
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

export type Footer2Link = {
  label: string;
  url: string;
  badge?: string;
  badgeClass?: string;
  external?: boolean;
};

export type Footer2Type = {
  title: string;
  links: Footer2Link[];
};

export const footer2Data: Footer2Type[] = [
  {
    title: 'Company',
    links: [
      { label: 'About us', url: '/about/v1' },
      { label: 'Contact us', url: '/contact-us' },
      { label: 'Career', url: '/career', badge: '2 job', badgeClass: 'bg-primary ms-2' },
      { label: 'Career detail', url: '/career/single' },
      { label: 'Become a partner', url: '/contact-us/v2' },
      { label: 'Services', url: '/service/v1' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case studies', url: '/portfolio/case-study/v1' },
      { label: 'Pricing', url: '/pricing/v1', badge: 'New', badgeClass: 'bg-success ms-1' },
      { label: 'Blogs', url: '/blog/minimal' },
      { label: 'Blog detail', url: '/blog/single' },
      { label: 'Success stories', url: '/contact-us/v2' },
      { label: 'Services', url: '/service/v1', external: true },
    ],
  },
];

export type FooterLinkType = {
  label: string;
  link: string;
  badge?: {
    text: string;
    class: string;
  };
  externalIcon?: boolean;
};

export type Footer3Type = {
  title: string;
  links: FooterLinkType[];
};

export const footer3Data: Footer3Type[] = [
  {
    title: 'Company',
    links: [
      { label: 'About us', link: '/about/v1' },
      { label: 'Contact us', link: '/contact-us' },
      {
        label: 'Career',
        link: '/career',
        badge: { text: '2 job', class: 'bg-primary' },
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
      {
        label: 'Pricing',
        link: '/pricing/v1',
        badge: { text: 'New', class: 'bg-success' },
      },
      { label: 'Blogs', link: '/blog/minimal' },
      { label: 'Blog detail', link: '/blog/single' },
      { label: 'Success stories', link: '/contact-us/v2' },
      {
        label: 'Services',
        link: '/service/v1',
        externalIcon: true,
      },
    ],
  },
];

export type PlatformType = {
  name: string;
  icon: string;
};

export const platformData: PlatformType[] = [
  {
    name: 'IOS',
    icon: appleIcon,
  },
  {
    name: 'Microsoft',
    icon: microsoftIcon,
  },
  {
    name: 'Android',
    icon: androidIcon,
  },
  {
    name: 'Linux',
    icon: linuxIcon,
  },
];

export type SocialItem = {
  iconType: 'lucide' | 'iconify';
  icon: string;
  bgClass: string;
  link: string;
};

export const socialData: SocialItem[] = [
  {
    iconType: 'lucide',
    icon: 'facebook',
    bgClass: 'bg-[#5d82d1]',
    link: '/',
  },
  {
    iconType: 'lucide',
    icon: 'instagram',
    bgClass: 'bg-pink',
    link: '/',
  },
  {
    iconType: 'iconify',
    icon: 'tabler:brand-x',
    bgClass: 'bg-black',
    link: '/',
  },
  {
    iconType: 'lucide',
    icon: 'linkedin',
    bgClass: 'bg-info',
    link: '/',
  },
];

export const footer7Data: Footer3Type[] = [
  {
    title: 'Company',
    links: [
      { label: 'About us', link: '/about/v1' },
      { label: 'Contact us', link: '/contact-us' },
      {
        label: 'Career',
        link: '/career',
        badge: { text: '2 job', class: 'bg-primary' },
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
      {
        label: 'Pricing',
        link: '/pricing/v1',
        badge: { text: 'New', class: 'bg-success' },
      },
      { label: 'Blogs', link: '/blog/minimal' },
      { label: 'Blog detail', link: '/blog/single' },
      { label: 'Success stories', link: '/contact-us/v2', externalIcon: true },
    ],
  },
];