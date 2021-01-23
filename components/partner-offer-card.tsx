import React from 'react';
import ImageNext from 'next/image';
import styled from 'styled-components';
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

const PartnerOfferCard: React.FC<Props> = (): JSX.Element => {
  return (
    <Card>
      <Image src='/stub.svg' width={100} height={100} layout='fixed' />
      <div>
        <div>
          <Title>Name</Title>
          <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
        </div>
        <div>
          <Title>Условие</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat incidunt quia
            necessitatibus accusantium provident consectetur possimus iusto magnam. Consequatur.
          </Paragraph>
        </div>
      </div>
      <ColumnRight>
        <div>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, aliquid.
          </Paragraph>
          <Paragraph>16/10/21</Paragraph>
        </div>
        <Button shape='round' color='red' outlined>
          Подробнее
        </Button>
      </ColumnRight>
    </Card>
  );
};

export default React.memo(PartnerOfferCard);
