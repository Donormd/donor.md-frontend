import { Popover } from 'antd';
import Link from 'next/link';
import { FC, useState } from 'react';

import { Logo } from '../../logo';
import { Button, StyledLink } from '../../UI';
import { PopoverStyle } from './popover.style';
import {
  Burder,
  Dot,
  HeaderGrid,
  HeaderWrapper,
  MenuItem,
  MenuList,
  MenuListProps,
} from './styles';

export const Header: FC = () => {
  const [hide, setToggleOpen] = useState<boolean>(false);
  return (
    <HeaderWrapper>
      <HeaderGrid>
        <Logo />
        <PopoverStyle />
        <Popover content={<Menu displayM='flex' />} trigger='click' placement='bottomRight'>
          <Burder type='button' onClick={() => setToggleOpen((s) => !s)}>
            <Dot />
            <Dot hide={hide} />
            <Dot />
          </Burder>
        </Popover>
        <Menu />
      </HeaderGrid>
    </HeaderWrapper>
  );
};

const Menu: FC<MenuListProps> = (props) => (
  <MenuList {...props}>
    <MenuItem>
      <Link href='/articles/about-service' passHref>
        <StyledLink>О сервисе</StyledLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href='/articles/about-donation' passHref>
        <StyledLink>О донорстве</StyledLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href='/articles/support-project' passHref>
        <StyledLink>Поддержать</StyledLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Button variant='danger'>
        <Link href='/dashboard'>
          <span color='white'>Кабинет донора</span>
        </Link>
      </Button>
    </MenuItem>
  </MenuList>
);
