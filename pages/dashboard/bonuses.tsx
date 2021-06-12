import { useEffect } from 'react';
import styled from 'styled-components';

import { Alert } from '../../components/alert';
import { PartnerOfferCard } from '../../components/partner-offer-card';
import { Paragraph, TitleWithArrow } from '../../components/UI';
import { IBonus } from '../../core/interfaces/bonus';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getBonusesAction } from '../../redux/redusers/bonus';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const Bonuses = () => {
  const dispatch = useAppDispatch();
  const { status, data, error } = useAppSelector((state) => state.bonus);

  useEffect(() => {
    dispatch(getBonusesAction());
  }, [dispatch]);

  return (
    <DashboardGrid>
      <TitleWithArrow>Бонусы</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin={false}>
          Партнерские предложения для доноров
        </Paragraph>
        <Paragraph>Выберайте актуальные для себя предложение от наших партнеров.</Paragraph>
      </TextWrapper>
      {status === 'error' && <Alert dismissible>{error}</Alert>}
      {data && data.map((item: IBonus) => <PartnerOfferCard {...item} />)}
    </DashboardGrid>
  );
};

export default Bonuses;

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
