import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Title, Button, StyledLink } from '../../UI';
import { Section } from './utils';

const Underline = styled(StyledLink)`
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
    <Title as='h2' bold>
      С нами уже{' '}
      <Link href='/top-donors'>
        <Underline>105 доноров</Underline>
      </Link>
    </Title>
    <ArticleGrid>
      <Article>
        <Link href='/'>
          <Button color='red' outlined shape='round' size='large'>
            Кабинет донора
          </Button>
        </Link>
        <Title as='h4' bold>
          Начни свою историю донора крови с регистрации
        </Title>
      </Article>
      <Article>
        <Link href='/'>
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
