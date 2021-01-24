import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import LogoHorizontal from '../../logo';
import { Container } from '../../../layouts/container';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  background: white;
  z-index: 9999;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
`;

const MenuList = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  list-style: none;
  border-radius: ${({ theme }) => theme.radius};
  background: white;
  transition: 'all .3s ease';
  overflow: hidden;
`;

const MenuItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.1rem;

  &:last-child {
    margin-top: 20px;
  }
`;

export default function Header(): JSX.Element {
  const [isOpen, setToggleOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container as='div'>
        <HeaderGrid>
          <LogoHorizontal />
          <nav>
            <button type='button' onClick={() => setToggleOpen((s) => !s)}>
              <div/>
              <div/>
              <div/>
            </button>
            {isOpen && (
              <MenuList>
                <MenuItem>
                  <Link href='/'>
                    <a>О сервисе</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/'>
                    <a>О донорстве</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/'>
                    <a>Поддержать</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/'>Кабинет донора</Link>
                </MenuItem>
              </MenuList>
            )}
          </nav>
        </HeaderGrid>
      </Container>
    </HeaderWrapper>
  );
}
