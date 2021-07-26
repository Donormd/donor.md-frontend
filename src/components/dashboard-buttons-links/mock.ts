export interface IRoutsItem {
  key: number;
  text: string;
  href: string;
}

export type RoutsKey = 'details' | 'donations' | 'questionnaire' | 'planning' | 'archive';

const common: IRoutsItem[] = [
  {
    key: 1,
    text: 'Основная',
    href: '/dashboard/details',
  },
  {
    key: 2,
    text: 'Анкета донора',
    href: '/dashboard/questionnaire',
  },
];

const donations: IRoutsItem[] = [
  {
    key: 1,
    text: 'Моя донация',
    href: '/dashboard/donations',
  },
  {
    key: 2,
    text: 'Запланировать',
    href: '/dashboard/planning',
  },
  {
    key: 3,
    text: ' Архив',
    href: '/dashboard/archive',
  },
];
export const routs: Record<RoutsKey, IRoutsItem[]> = {
  details: common,
  questionnaire: common,
  donations,
  planning: donations,
  archive: donations,
};
