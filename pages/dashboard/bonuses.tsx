import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { DashboardGrid } from '../../layouts/dashboard-grid';
import { TitleWithArrow, Paragraph } from '../../components/UI';
import { PartnerOfferCard } from '../../components/partner-offer-card';
import { useAppSelector } from '../../redux/store';
import { IBonus } from '../../interfaces/bonus';
import { Alert } from '../../components/alert';
import { getBonusesAction } from '../../redux/redusers/bonus';

const Bonuses: FC = () => {
  const dispatch = useDispatch();
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
