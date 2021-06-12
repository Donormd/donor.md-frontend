import { useEffect } from 'react';
import styled from 'styled-components';

import { Alert } from '../../components/alert';
import { RecipientCard } from '../../components/recipient-card';
import { Paragraph, TitleWithArrow } from '../../components/UI';
import { IRecipient } from '../../core/interfaces/recipient';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getRecipientsAction } from '../../redux/redusers/recipients';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const Recipients = () => {
  const dispatch = useAppDispatch();
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
      {status === 'error' && <Alert dismissible>{error}</Alert>}
      {data &&
        data.map((item: IRecipient) => <RecipientCard key={item._id} recipient={item.recipient} />)}
    </DashboardGrid>
  );
};

export default Recipients;

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
