import React from 'react';
import styled from 'styled-components';
import LeftMenu from '../components/left-menu';
import RightMenu from '../components/right-menu';

type Props = {
  children: React.ReactNode;
  background?: string;
  className?: string;
};

const Main = styled.main`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  height: 100%;
`;

const Container = styled.section`
  padding: 35px;
  width: 100%;
  max-width: 1140px;
`;

const DashboardGrid: React.FC<Props> = ({ children, className }): JSX.Element => (
  <Main>
    <LeftMenu />
    <Container className={className}>{children}</Container>
    <RightMenu />
  </Main>
);

export default DashboardGrid;
