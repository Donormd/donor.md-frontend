import React from 'react';
import Link from 'next/link';
import { Tooltip } from 'antd';
import { MenuItemProps, MenuItem, IconWrapper, Paragraph, Aside, Menu } from './styles';
import { ResponsiveLogo } from '../logo';
import Details from '../../public/images/pages/dashboard/left-aside/details.svg';
import Donations from '../../public/images/pages/dashboard/left-aside/donations.svg';
import Reviews from '../../public/images/pages/dashboard/left-aside/reviews.svg';
import Settings from '../../public/images/pages/dashboard/left-aside/settings.svg';
import Bonuses from '../../public/images/pages/dashboard/left-aside/bonuses.svg';
import Recipients from '../../public/images/pages/dashboard/left-aside/recipients.svg';
import Logout from '../../public/images/pages/dashboard/left-aside/logout.svg';

export declare type MenuLinkProps = {
  key: string | number;
  Icon: any;
  href: string;
  text: string;
};

export const mock: Array<MenuLinkProps> = [
  {
    key: 1,
    Icon: Details,
    href: '/dashboard/details',
    text: 'Мои данные',
  },
  {
    key: 2,
    Icon: Donations,
    href: '/dashboard/donations',
    text: 'Мои донации',
  },
  {
    key: 3,
    Icon: Reviews,
    href: '/dashboard/reviews',
    text: 'Мои отзывы',
  },
  {
    key: 4,
    Icon: Settings,
    href: '/dashboard/settings',
    text: 'Настройки',
  },
  {
    key: 5,
    Icon: Bonuses,
    href: '/dashboard/bonuses',
    text: 'Бонусы',
  },
  {
    key: 6,
    Icon: Recipients,
    href: '/dashboard/recipients',
    text: 'Реципиенты',
  },
  {
    key: 7,
    Icon: Logout,
    href: '/dashboard/logout',
    text: 'Выход',
  },
];

const MenuLink: React.FC<MenuLinkProps & MenuItemProps> = ({ active, Icon, href, text }) => (
  <Tooltip title={text} placement='left'>
    <MenuItem active={active}>
      <Link href={href}>
        <>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Paragraph>{text}</Paragraph>
        </>
      </Link>
    </MenuItem>
  </Tooltip>
);

const LeftMenu: React.FC<{ image?: string }> = ({ image }): JSX.Element => {
  return (
    <Aside image={image}>
      <ResponsiveLogo />
      <Menu>
        {mock.map((item, i) => (
          <MenuLink active={i === 0} {...item} />
        ))}
      </Menu>
    </Aside>
  );
};

export default LeftMenu;
