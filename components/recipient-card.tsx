import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Button, Title, Paragraph } from './UI';

export declare type Props = {
  src: string;
};

const Card = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 30px;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.red}`};
`;

const RecipientCard: React.FC<Props> = (): JSX.Element => {
  return (
    <Card>
      <Image src='/stub.svg' width={50} height={50} />
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
      <div>
        <div>
          <div>cheltxrb</div>
          <Paragraph>16/10/21</Paragraph>
        </div>
        <Button shape='round' color='red' outlined>
          Подробнее
        </Button>
      </div>
    </Card>
  );
};

export default React.memo(RecipientCard);
