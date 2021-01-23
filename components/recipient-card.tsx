import React from 'react';
import ImageNext from 'next/image';
import styled from 'styled-components';
import Rate from './rate';
import { Button, Title, Paragraph } from './UI';

export declare type Props = {
  src: string;
};

const Card = styled.article`
  display: grid;
  grid-template-columns: min-content 300px 1fr;
  column-gap: 20px;
  padding: 30px;
  margin-bottom: 30px;
  background: white;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.red}`};
`;

const ColumnRight = styled.div`
  text-align: right;
`;

const Image = styled(ImageNext)<{ layout: string }>`
  border-radius: ${({ theme }) => theme.radius};
`;

const Age = styled.span`
  margin-left: 15px;
  color: ${({ theme }) => theme.textMuted};
  font-weight: normal;
`;

const Place = styled(Paragraph)`
  margin: 0;
`;

const Address = styled(Paragraph)`
  color: ${({ theme }) => theme.textMuted};
  margin: 0;
`;

const Term = styled(Paragraph)`
  color: ${({ theme }) => theme.red};
`;

const RecipientCard: React.FC<Props> = (): JSX.Element => {
  return (
    <Card>
      <Image src='/stub.svg' width={100} height={100} layout='fixed' />
      <div>
        <div>
          <Title as='h2' bold>
            Снегирева Алина <Age>26 лет</Age>
          </Title>
          <Title as='h2'>В(|||) - Rh+</Title>
          <Title as='h3' color='black'>
            Заболевание печени
          </Title>
          <Place>Республиканская клиническая больница</Place>
          <Address>Тирасполь, ул. Мира, 33 А</Address>
        </div>
      </div>
      <ColumnRight>
        <Rate total={12} count={10} />
        <Term align='right'>Срок до: 16/12/20</Term>
        <Button shape='round' color='red' size='large' outlined>
          Подробнее
        </Button>
      </ColumnRight>
    </Card>
  );
};

export default React.memo(RecipientCard);
