import React from 'react';
import Link from 'next/link';
import { Aside, Menu, MenuItem, LinkGrid, IconWrapper, ItemParagraph } from './styles';
import Schedule from '../../public/images/pages/dashboard/right-aside/schedule-donation.svg';
import Add from '../../public/images/pages/dashboard/right-aside/add-donation.svg';
import Question from '../../public/images/pages/dashboard/right-aside/question.svg';
import Support from '../../public/images/pages/dashboard/right-aside/support-project.svg';
import DonorInfo from '../donor-info';
import DonorProgress from '../donor-progress';
import DonorCard from '../donor-card';

export declare type MenuLinkProps = {
  key: string | number;
  Icon: any;
  href: string;
  text: string;
};

const data: Array<MenuLinkProps> = [
  {
    key: 1,
    Icon: Schedule,
    href: '/dashboard/details',
    text: 'Запланировать донацию',
  },
  {
    key: 2,
    Icon: Add,
    href: '/dashboard/donations',
    text: 'Добавить донацию',
  },
  {
    key: 3,
    Icon: Question,
    href: '/dashboard/reviews',
    text: 'Ваш отзыв / вопрос',
  },
  {
    key: 4,
    Icon: Support,
    href: '/support-project',
    text: 'Поддержать проект',
  },
];

const MenuLink: React.FC<MenuLinkProps> = ({ Icon, href, text }) => (
  <MenuItem>
    <Link href={href}>
      <LinkGrid>
        <ItemParagraph>{text}</ItemParagraph>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </LinkGrid>
    </Link>
  </MenuItem>
);

const RightMenu: React.FC = (): JSX.Element => {
  return (
    <Aside>
      <DonorInfo name='Maxim' lastname='Lambov' honorary />
      <DonorCard />
      <DonorProgress />
      <Menu>
        {data.map((link) => (
          <MenuLink {...link} />
        ))}
      </Menu>
    </Aside>
  );
};

export default RightMenu;
