import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Title, Button, StyledLink } from '../../UI';
import { Section } from './utils';

const StyledTitle = styled(Title)`
  display: flex;
`;

const ImageWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Underline = styled(StyledLink)`
  margin-right: 20px;
  color: ${({ theme }) => theme.red};
  text-decoration: underline;
`;

const ArticleGrid = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 25px;
  margin-bottom: 30px;
  border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
  border-radius: ${({ theme }) => theme.radius};
  background: white;

  @media (min-width: 576px) {
    grid-template-columns: min-content 1fr;
  }
`;

const CallToAction: React.FC = (): JSX.Element => (
  <Section id='call-to-action'>
    <StyledTitle as='h2' className='h1' bold>
      С нами уже{' '}
      <Link href='/top-donors'>
        <Underline>105 доноров</Underline>
      </Link>
      <ImageWrapper>
        <Image src='/images/pages/home/top-donors.png' width={170} height={30} />
      </ImageWrapper>
    </StyledTitle>
    <ArticleGrid>
      <Article>
        <Link href='/dashboard'>
          <Button color='red' outlined shape='round' size='large'>
            Кабинет донора
          </Button>
        </Link>
        <Title as='h4' bold>
          Начни свою историю донора крови с регистрации
        </Title>
      </Article>
      <Article>
        <Link href='/donor-search'>
          <Button color='red' outlined shape='round' size='large'>
            Нужна помощь
          </Button>
        </Link>
        <Title as='h4' bold>
          Попросите помощи у доноров крови
        </Title>
      </Article>
    </ArticleGrid>
  </Section>
);

export default CallToAction;
