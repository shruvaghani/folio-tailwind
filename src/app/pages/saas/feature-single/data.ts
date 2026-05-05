export type StatsType = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
};

export const statsData: StatsType[] = [
  {
    value: 105,
    suffix: '+',
    label: 'New features added',
  },
  {
    value: 10,
    prefix: '>',
    suffix: 'K',
    label: 'Download apk',
  },
  {
    value: 15,
    suffix: 'D',
    label: 'Free trial',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client satisfaction',
  },
];
