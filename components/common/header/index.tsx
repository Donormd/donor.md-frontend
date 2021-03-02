import React, { useState } from 'react';
import Link from 'next/link';
import { Popover } from 'antd';
import { StyledLink, Button } from '../../UI';
import { Logo } from '../../logo';
import {
  HeaderWrapper,
  HeaderGrid,
  MenuList,
  MenuListProps,
  MenuItem,
  Burder,
  Dot,
} from './styles';
import { PopoverStyle } from './popover.style';

const Menu: React.FC<MenuListProps> = (props): JSX.Element => (
  <MenuList {...props}>
    <MenuItem>
      <Link href='/articles' passHref>
        <StyledLink>О сервисе</StyledLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href='/articles' passHref>
        <StyledLink>О донорстве</StyledLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href='/articles' passHref>
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
export default function Header(): JSX.Element {
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
}
