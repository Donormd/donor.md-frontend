import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Section } from '../utils';
import { Title, Paragraph } from '../../../UI';
import mock from './mock';

const ArticleList = styled.div`
  padding-top: 30px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
  background: white;
  border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
  border-radius: ${({ theme }) => theme.radius};
`;

const ArticleBody = styled.div`
  text-align: center;
  padding: 20px 0;
  transition: all 0.8s ease;

  &:hover {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: url('/images/pages/home/about-donations/hover-md.svg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top center;
  }

  @media (min-width: 992px) {
    &:hover {
      background: url('/images/pages/home/about-donations/hover.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top center;
    }
  }

  @media (min-width: 992px) {
    padding: 20px 30px;
    text-align: left;
  }
`;

const AboutDonation: React.FC = (): JSX.Element => {
  return (
    <Section id='about-donation'>
      <Title as='h2' className='h1' bold>
        Подготовка к первой сдачи крови
      </Title>
      <ArticleList>
        {mock.map(({ image, text }) => (
          <article>
            <ImageWrapper>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                layout='responsive'
              />
            </ImageWrapper>
            <Link href='/'>
              <ArticleBody>
                <Title as='h3' margin='15px' color='red' bold>
                  {text.head}
                </Title>
                <Paragraph>{text.paragraph}</Paragraph>
              </ArticleBody>
            </Link>
          </article>
        ))}
      </ArticleList>
    </Section>
  );
};

export default AboutDonation;
