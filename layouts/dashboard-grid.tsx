import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import LeftMenu from '../components/left-menu';
import RightMenu from '../components/right-menu';
import { useRequiredAuth } from '../hooks/useRequiredAuth';
import { useAuth } from '../hooks/useAuth';
import { Loading } from '../components/UI/loading';
import CenterAllAxes from './center-all-axes';
import { getOptions } from '../redux/common';

type Props = {
  children: React.ReactNode;
  leftImage?: string;
  className?: string;
};

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  @media (min-width: 576px) {
    grid-template-columns: max-content 1fr max-content;
  }
`;

const Container = styled.section`
  padding: 50px 30px;
  width: 100%;
`;

const DashboardGrid: React.FC<Props> = ({ children, className, leftImage }): JSX.Element => {
  const auth = useAuth();
  const dispatch = useDispatch();

  useRequiredAuth(null, '/auth');

  useEffect(() => {
    dispatch(getOptions('cities'));
    dispatch(getOptions('bloodGroups'));
    dispatch(getOptions('bloodCenter'));
    dispatch(getOptions('organizations'));
    dispatch(getOptions('transfusionCenter'));
    dispatch(getOptions('typesAssistance'));
    dispatch(getOptions('userGroup'));
    dispatch(getOptions('userStatus'));
    dispatch(getOptions('sex'));
  }, []);

  if (!auth?.user)
    return (
      <CenterAllAxes>
        <Loading />
      </CenterAllAxes>
    );

  return (
    <Main>
      <LeftMenu image={leftImage} />
      <Container className={className}>{children}</Container>
      <RightMenu />
    </Main>
  );
};

export default DashboardGrid;
