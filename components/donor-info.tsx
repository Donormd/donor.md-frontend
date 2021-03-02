import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Title, Paragraph } from './UI';

export declare type Props = {
  honorary: boolean;
  name: string;
  lastname: string;
};

const Layer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ImageWrapper = styled.div`
  margin-right: 15px;
  width: 75px;
  height: 75px;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.red}`};
  overflow: hidden;
`;

const DonorInfo: React.FC<Props> = ({ honorary, name, lastname }): JSX.Element => {
  return (
    <Layer>
      <ImageWrapper>
        <Image src='/stub.svg' width={50} height={50} layout='responsive' />
      </ImageWrapper>
      <div>
        <Title as='h4' bold>
          {name}
        </Title>
        <Title as='h4' bold>
          {lastname}
        </Title>
        {honorary && <Paragraph>почетный донор</Paragraph>}
      </div>
    </Layer>
  );
};

export default DonorInfo;
