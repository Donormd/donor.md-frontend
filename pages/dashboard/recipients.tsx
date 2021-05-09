import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { DashboardGrid } from '../../layouts/dashboard-grid';
import { TitleWithArrow, Paragraph } from '../../components/UI';
import RecipientCard from '../../components/recipient-card';
import { IRecipientCard } from '../../interfaces/recipient';
import { useAppSelector } from '../../redux/store';
import { getRecipientsAction } from '../../redux/redusers/recipients';
import Alert from '../../components/alert';

const Recipients: FC = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useAppSelector((state) => state.recipient);

  useEffect(() => {
    dispatch(getRecipientsAction());
  }, [dispatch]);

  return (
    <DashboardGrid>
      <TitleWithArrow>Реципиенты</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin={false}>
          Рекомендованные реципиенты
        </Paragraph>
      </TextWrapper>
      {status === 'success' && <Alert dismissible>{error}</Alert>}
      {data && data.map((item: IRecipientCard) => <RecipientCard {...item} />)}
    </DashboardGrid>
  );
};

export default Recipients;

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
