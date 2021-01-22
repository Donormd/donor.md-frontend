import React from 'react';
import styled from 'styled-components';
import LeftMenu from '../components/left-menu';
import Logo from '../components/logo';
import RightMenu from '../components/right-menu';
import { Button } from '../components/UI';
import { Container } from './container';

type Props = {
  children: React.ReactNode;
  background?: string;
  className?: string;
};

/*
 * TODO merge header
 * add detect user auth
 */

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
`;

const HeaderGrid = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const WrapperContainer = styled(Container)`
  margin-top: 70px;
  padding-top: 20px;
`;

const DashboardGrid: React.FC<Props> = ({ children, className }): JSX.Element => (
  <>
    <Header>
      <HeaderGrid>
        <Logo />
        <Button color='red' outlined>
          three dots
        </Button>
      </HeaderGrid>
    </Header>
    <LeftMenu />
    <WrapperContainer className={className}>{children}</WrapperContainer>
    <RightMenu />
  </>
);

export default DashboardGrid;
