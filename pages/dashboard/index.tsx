import React from 'react';
import styled from 'styled-components';
import { TitleWithArrow, Button } from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import RecipientCard from '../../components/recipient-card';
import PartnerOfferCard from '../../components/partner-offer-card';

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-column-gap: 20px;
`;

const Index: React.FC = (): JSX.Element => {
  return (
    <DashboardGrid>
      <TitleWithArrow>Мои данные</TitleWithArrow>
      <ButtonGroup>
        <Button shape='round' color='primary' outlined>
          Основная
        </Button>
        <Button shape='round' color='primary' outlined>
          Моя история
        </Button>
        <Button shape='round' color='primary' outlined>
          Анкета донора
        </Button>
      </ButtonGroup>
      <RecipientCard src='aaa' />
      <PartnerOfferCard src='aaa' />
    </DashboardGrid>
  );
};

export default Index;
