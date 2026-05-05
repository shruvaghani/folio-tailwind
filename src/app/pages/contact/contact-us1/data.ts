export type ContactCardType = {
  icon: string;
  bgClass: string;
  title: string;
  description: string;
  linkText: string;
  isButton?: boolean;
};

export const contactCardsData: ContactCardType[] = [
  {
    icon: 'phone',
    bgClass: 'bg-pink',
    title: 'Call us',
    description: 'Speak with a member of our team. We’re always ready to assist you.',
    linkText: '+(251) 854-6308',
  },
  {
    icon: 'mail',
    bgClass: 'bg-primary',
    title: 'Mail us',
    description: 'We’re prompt and aim to respond to all inquiries within 24 hours.',
    linkText: 'example@gmail.com',
  },
  {
    icon: 'headset',
    bgClass: 'bg-warning',
    title: 'Support',
    description: 'Check out helpful resources, FAQs and developer tools.',
    linkText: 'Chat now',
    isButton: true,
  },
];