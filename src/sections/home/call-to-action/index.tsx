import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../../components/UI/button';
import { Title } from '../../../components/UI/typography';
import { Section } from '../utils';
import { Article, ArticleGrid, ImageWrapper, SectionTitle, Underline } from './styles';

export const CallToAction = () => (
  <Section id='call-to-action'>
    <SectionTitle as='h2' bold>
      С нами уже{' '}
      <Link href='/top-donors'>
        <Underline>105 доноров</Underline>
      </Link>
      <ImageWrapper>
        <Image src='/images/pages/home/top-donors.png' width={170} height={30} />
      </ImageWrapper>
    </SectionTitle>
    <ArticleGrid>
      <Article>
        <Link href='/dashboard'>
          <Button variant='outline-primary' size='lg'>
            Кабинет донора
          </Button>
        </Link>
        <Title as='h4' bold>
          Начни свою историю донора крови с регистрации
        </Title>
      </Article>
      <Article>
        <Link href='/donor-search'>
          <Button variant='outline-primary' size='lg'>
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
