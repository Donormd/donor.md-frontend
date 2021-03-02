import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Title, Paragraph } from './UI';

const Layer = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 15px;
  color: white;
  background: ${({ theme }) => theme.red};
  border-radius: ${({ theme }) => theme.radius};
`;

const Counter = styled.div`
  margin-right: 15px;
  width: 75px;
  height: 75px;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.red}`};
  overflow: hidden;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const DonorCard: React.FC = (): JSX.Element => {
  return (
    <Layer>
      <Counter>
        <Image src='/stub.svg' width={50} height={50} layout='responsive' />
      </Counter>
      <div>
        <Title as='h4' bold>
          Мои Донации
        </Title>
        <Paragraph>
          <Bold>42</Bold> - реципиента получили помощь
        </Paragraph>
      </div>
    </Layer>
  );
};

export default DonorCard;
