const team01 = 'assets/images/team/3by4/01.jpg';
const team02 = 'assets/images/team/3by4/02.jpg';
const team03 = 'assets/images/team/3by4/03.jpg';
const team04 = 'assets/images/team/3by4/04.jpg';
const team05 = 'assets/images/team/3by4/05.jpg';
const team06 = 'assets/images/team/3by4/06.jpg';
const team07 = 'assets/images/team/3by4/07.jpg';
const team08 = 'assets/images/team/3by4/08.jpg';

export type SocialType = {
  icon: string;
  type: 'lucide' | 'iconify';
  bgClass: string;
};

export type TeamType = {
  image: string;
  name: string;
  role: string;
  socials: SocialType[];
};

export const teamData: TeamType[] = [
  {
    image: team03,
    name: 'Emma Watson',
    role: 'Founder',
    socials: [
      {
        icon: 'instagram',
        type: 'lucide',
        bgClass:
          'bg-[radial-gradient(circle_at_20%_130%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
      },
      {
        icon: 'linkedin',
        type: 'lucide',
        bgClass: 'bg-[#0A66C2]',
      },
    ],
  },
  {
    image: team02,
    name: 'Allen Smith',
    role: 'Co-Founder',
    socials: [
      { icon: 'facebook', type: 'lucide', bgClass: 'bg-[#5d82d1]' },
      {
        icon: 'instagram',
        type: 'lucide',
        bgClass:
          'bg-[radial-gradient(circle_at_20%_130%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
      },
      { icon: 'linkedin', type: 'lucide', bgClass: 'bg-[#0A66C2]' },
    ],
  },
  {
    image: team04,
    name: 'Louis Ferguson',
    role: 'Creative Director',
    socials: [
      { icon: 'facebook', type: 'lucide', bgClass: 'bg-[#5d82d1]' },
      { icon: 'linkedin', type: 'lucide', bgClass: 'bg-[#0A66C2]' },
    ],
  },
  {
    image: team06,
    name: 'Emily Johnson',
    role: 'Marketing Strategist',
    socials: [
      {
        icon: 'instagram',
        type: 'lucide',
        bgClass:
          'bg-[radial-gradient(circle_at_20%_130%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
      },
      { icon: 'linkedin', type: 'lucide', bgClass: 'bg-[#0A66C2]' },
      { icon: 'tabler:brand-x', type: 'iconify', bgClass: 'bg-dark' },
    ],
  },
  {
    image: team01,
    name: 'Michael Brown',
    role: 'Lead Developer',
    socials: [
      {
        icon: 'instagram',
        type: 'lucide',
        bgClass:
          'bg-[radial-gradient(circle_at_20%_130%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
      },
      { icon: 'tabler:brand-x', type: 'iconify', bgClass: 'bg-dark' },
    ],
  },
  {
    image: team08,
    name: 'Sarah Davis',
    role: 'Content Specialist',
    socials: [
      {
        icon: 'instagram',
        type: 'lucide',
        bgClass:
          'bg-[radial-gradient(circle_at_20%_130%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
      },
      { icon: 'tabler:brand-x', type: 'iconify', bgClass: 'bg-dark' },
      { icon: 'facebook', type: 'lucide', bgClass: 'bg-[#5d82d1]' },
    ],
  },
  {
    image: team05,
    name: 'Samuel Bishop',
    role: 'Product designer',
    socials: [
      {
        icon: 'instagram',
        type: 'lucide',
        bgClass:
          'bg-[radial-gradient(circle_at_20%_130%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
      },
      { icon: 'facebook', type: 'lucide', bgClass: 'bg-[#5d82d1]' },
    ],
  },
  {
    image: team07,
    name: 'Alex Green',
    role: 'Account Manager',
    socials: [
      {
        icon: 'instagram',
        type: 'lucide',
        bgClass:
          'bg-[radial-gradient(circle_at_20%_130%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
      },
      { icon: 'tabler:brand-x', type: 'iconify', bgClass: 'bg-dark' },
      { icon: 'facebook', type: 'lucide', bgClass: 'bg-[#5d82d1]' },
    ],
  },
];

export type CounterItemType = {
  value: number;
  suffix?: string;
  label: string;
  colSpan?: string;
  mbClass?: string;
};

export const counterData: CounterItemType[] = [
  {
    value: 80,
    suffix: '+',
    label: 'Total employees',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Total awards',
  },
];
