import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Title, Button } from '../../../UI';
import { Section } from '../utils';
import { SectionTitle, Underline, ImageWrapper, ArticleGrid, Article } from './styles';

const CallToAction: React.FC = (): JSX.Element => (
  <Section id='call-to-action'>
    <SectionTitle as='h2' className='h1' bold>
      С нами уже{' '}
      <Link href='/top-donors'>
        {` `}
        <Underline>105 доноров</Underline>
      </Link>
      <ImageWrapper>
        <Image src='/images/pages/home/top-donors.png' width={170} height={30} />
      </ImageWrapper>
    </SectionTitle>
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
