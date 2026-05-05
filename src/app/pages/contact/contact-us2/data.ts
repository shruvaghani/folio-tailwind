export type SocialType = {
  icon: string;
  bgClass: string;
};

export const socialData: SocialType[] = [
  {
    icon: 'tabler:brand-facebook',
    bgClass: 'bg-[#5d82d1]',
  },
  {
    icon: 'lucide:instagram',
    bgClass: 'bg-pink',
  },
  {
    icon: 'tabler:brand-x',
    bgClass: 'bg-black',
  },
  {
    icon: 'lucide:linkedin',
    bgClass: 'bg-info',
  },
];

export type ContactInfoType = {
  icon: string;
  text: string;
  values: string[];
  isList?: boolean; 
};

export const contactInfoData: ContactInfoType[] = [
  {
    icon: 'phone',
    text: 'Feel free to call us.',
    values: ['+(251) 854-6308', '+(469) 537-2410'],
    isList: true,
  },
  {
    icon: 'mail',
    text: 'Join our growing team.',
    values: ['example@gmail.com'],
  },
  {
    icon: 'user',
    text: 'Are you ready for coffee?',
    values: ['55/123 Norman street, Banking road, Sydney NSW 5000'],
  },
];
