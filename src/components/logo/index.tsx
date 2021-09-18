import { Tooltip } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import {
  LogoWrapper,
  ResponsiveLogoWrapper,
  ResponsiveTextWrapper,
  StyledTitle,
  WrappedParagraph,
} from './styles';

export const Logo = () => (
  <Link href='/'>
    <LogoWrapper>
      <Image
        src='/images/logo/heart.svg'
        width={45}
        height={45}
        layout='fixed'
        alt='Web-платформа для тех, кто сдает и ищет донорскую кровь'
      />
      <div>
        <StyledTitle as='h3' bold>
          DONOR.MD
        </StyledTitle>
        <WrappedParagraph>Люди помогают людям</WrappedParagraph>
      </div>
    </LogoWrapper>
  </Link>
);

export const ResponsiveLogo = () => (
  <Link href='/'>
    <Tooltip placement='left' title='На главную'>
      <ResponsiveLogoWrapper>
        <Image
          src='/images/logo/heart.svg'
          width={45}
          height={45}
          layout='fixed'
          alt='Web-платформа для тех, кто сдает и ищет донорскую кровь'
        />
        <ResponsiveTextWrapper>
          <StyledTitle as='h3' bold>
            DONOR.MD
          </StyledTitle>
          <WrappedParagraph>Люди помогают людям</WrappedParagraph>
        </ResponsiveTextWrapper>
      </ResponsiveLogoWrapper>
    </Tooltip>
  </Link>
);
