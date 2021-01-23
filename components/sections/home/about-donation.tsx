import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Section } from './utils';
import { Title, Paragraph } from '../../UI';

const mock = [
  {
    key: 1,
    image: {
      width: 300,
      height: 300,
      src: '/images/pages/home/about-donations/donor-requirements.svg',
      layout: 'responsive',
    },
    text: {
      head: 'Какие требования к донору?',
      paragraph: `Перед первой донацией Вам необходимо ознакомитья с перечнем противооказаний`,
    },
  },
  {
    key: 2,
    image: {
      width: 300,
      height: 300,
      src: '/images/pages/home/about-donations/preparation-donation.svg',
      layout: 'responsive',
    },
    text: {
      head: 'Как подготовиться к донации?',
      paragraph: `Накануне и в день сдачи крови есть определённые запреты и рекомендации, 
      которых необходимо придерживаться`,
    },
  },
  {
    key: 3,
    image: {
      width: 300,
      height: 300,
      src: '/images/pages/home/about-donations/donation-going.svg',
      layout: 'responsive',
    },
    text: {
      head: 'Как проходит донация?',
      paragraph: `Куда обращаться? Нужно ли иметь при себе какие-либо документы? 
      Как происходит процедура сдачи крови?`,
    },
  },
];

const ArticleGrid = styled.div`
  padding-top: 30px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
  }
`;

const ArticleTitle = styled(Title)`
  color: ${({ theme }) => theme.red};
`;

const ImageWrapper = styled.div`
  background: white;
  border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
  border-radius: ${({ theme }) => theme.radius};
`;

const ArticleBody = styled.div`
  padding-top: 20px;
  transition: all 0.8s ease;

  &:hover {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: url('/images/pages/home/about-donations/hover.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
  }
`;

const AboutDonation: React.FC = (): JSX.Element => {
  return (
    <Section id='about-donation'>
      <Title as='h2' bold>
        Подготовка к первой сдачи крови
      </Title>
      <ArticleGrid>
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
                <ArticleTitle as='h3' bold>
                  {text.head}
                </ArticleTitle>
                <Paragraph>{text.paragraph}</Paragraph>
              </ArticleBody>
            </Link>
          </article>
        ))}
      </ArticleGrid>
    </Section>
  );
};

export default AboutDonation;
