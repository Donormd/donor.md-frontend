import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Paragraph } from '../UI/typography';

const WrapperLogo = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 10px;
`;

const WrapperImage = styled.div`
  grid-row: span 2;
  width: 45px;
  height: 45px;
`;

const WrappedParagraph = styled(Paragraph)`
  text-transform: uppercase;
  margin: 0;
  line-height: 1;
`;

const Logo: React.FC = (): JSX.Element => (
  <WrapperLogo>
    <WrapperImage>
      <Image
        src='/images/logo/heart.svg'
        width={45}
        height={45}
        alt='Web-платформа для тех, кто сдает и ищет донорскую кровь'
      />
    </WrapperImage>
    <WrappedParagraph as='h2' bold>
      donor.md
    </WrappedParagraph>
    <WrappedParagraph>Люди помогают людям</WrappedParagraph>
  </WrapperLogo>
);

export default Logo;
