import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'antd';
import Link from 'next/link';
import {
  LogoWrapper,
  WrapperImage,
  TextWrapper,
  StyledTitle,
  WrappedParagraph,
  ResponsiveLogoWrapper,
} from './styles';

export const Logo: React.FC = (): JSX.Element => (
  <LogoWrapper>
    <WrapperImage>
      <Image
        src='/images/logo/heart.svg'
        width={45}
        height={45}
        alt='Web-платформа для тех, кто сдает и ищет донорскую кровь'
      />
    </WrapperImage>
    <TextWrapper>
      <StyledTitle as='h3' bold>
        DONOR.MD
      </StyledTitle>
      <WrappedParagraph>Люди помогают людям</WrappedParagraph>
    </TextWrapper>
  </LogoWrapper>
);

export const ResponsiveLogo: React.FC = (): JSX.Element => (
  <Link href='/'>
    <Tooltip placement='left' title='На главную'>
      <ResponsiveLogoWrapper>
        <WrapperImage>
          <Image
            src='/images/logo/heart.svg'
            width={45}
            height={45}
            alt='Web-платформа для тех, кто сдает и ищет донорскую кровь'
          />
        </WrapperImage>
        <TextWrapper>
          <StyledTitle as='h3' bold>
            DONOR.MD
          </StyledTitle>
          <WrappedParagraph>Люди помогают людям</WrappedParagraph>
        </TextWrapper>
      </ResponsiveLogoWrapper>
    </Tooltip>
  </Link>
);
