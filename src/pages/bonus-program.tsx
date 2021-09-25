import Link from 'next/link';

import { ArticleCards } from '../components/article-cards';
import { Alert } from '../components/UI/alert';
import { StyledLink } from '../components/UI/links';
import { ListWithCheck } from '../components/UI/list-with-check';
import { Divider } from '../components/UI/other';
import { Paragraph, Title } from '../components/UI/typography';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';

const list = [
  'Продвижение Вашей компании на всех ресурсах проекта;',
  'Размещение информации о Вас на Web-сервисе donor.md;',
  'Размещение фирменной наклейки у Вас “Здесь любят доноров крови”.',
];

const articles = [
  {
    title: 'ООО “Автолялечка”',
    subTitle: 'Сеть маркетов автоаксессуаровв Приднестровье.',
    image: {
      src: '/images/pages/articles/logo__active.png',
      width: 356,
      height: 186,
    },
  },
  {
    title: 'Открытые приоритеты',
    subTitle: 'Организация, посвящённая продвижению открытого программного обеспечения.',
    image: {
      src: '/images/pages/articles/op.png',
      width: 356,
      height: 186,
    },
  },
];

const BonusProgramPage = () => (
  <HeaderContentFooter background='/images/pages/welcome.png'>
    <Container>
      <Title margin='0 0 15px 0' bold>
        Бонусная программа для коммерческих агентов
      </Title>
      <Paragraph>
        Наш сервис приглашает коммерческих агентов стать частью бонусной программы для доноров крови. Это нам
        позволит поощрять активных доноров, выделять значимость этого доброго поступка, а вам как партнерам
        получать доверие и лояльность ваших клиентов -доноров. Мы будем рады Вас видеть в списках партнеров
        бонусной программы для доноров, вместе реализовывать концепцию “Люди - помогают людям” и поддерживать
        идею развития донорского движения.
      </Paragraph>
      <Paragraph>
        Наша основная целевая группа - это люди в возрасте 18-45 лет из городов Тирасполь, Бендеры и Рыбница.
        Социально ответственные сознательные граждане.
      </Paragraph>
      <Paragraph bold>Со своей стороны мы предлагаем:</Paragraph>
      <ListWithCheck list={list} />
      <Paragraph>
        Предложения, размещающиеся в нашей программе, должны быть уникальные, специальные для доноров,
        максимально возможные.
      </Paragraph>
      <Title as='h4' margin='20px 0' bold>
        Как это реализуется?
      </Title>
      <Paragraph>
        <b>Вариант первый</b>. Предоставление скидки, внедрение бонусных, накопительных, дисконтных
        возможностей для доноров крови. С каждым партнером мы обсудим формат взаимодействия и Ваши условия
        предоставления скидки. <br />
        <b>Вариант второй</b>. Предоставление бесплатных подарков для доноров, которые будут распределены в
        формате конкурсов на наших социальных площадках.
      </Paragraph>
      <Paragraph bold>Как это будет выглядеть для донора?</Paragraph>
      <Paragraph>
        В личном кабинете донора есть раздел “бонусы”, в котором можно увидеть какие бонусы можно получить от
        партнеров и какие условия их предоставления. Пользователи узнают о новом партнере бонусной программы
        через уведомления, а также из социальных сетей нашего проекта.
      </Paragraph>
      <Paragraph>
        Если ваша компания хочет присоединиться к нашей программе, пишите на почту или сообщите нам в наших
        аккаунтах в социальных сетях.
      </Paragraph>
      <Paragraph bold>Какая информация нам нужна для участия в бонусное программе:</Paragraph>
      <Paragraph>
        Название, Короткое описание, Ваш логотип (png, прозрачный фон), В каких городах, Срок действия, Какую
        скидку и на что предлагаете, Условия получения бонуса
      </Paragraph>
      <Divider />
      <Title margin='40px 0 25px' bold as='h3'>
        Бонусы от наших партнеров
      </Title>
      <ArticleCards articles={articles} />
      <Alert>
        <>
          Если Вы хотите стать участником бонусной программы{' '}
          <Link href='/' passHref>
            <StyledLink color='black' underline bold>
              <b>напишите нам</b>
            </StyledLink>
          </Link>{' '}
          и мы с вами свяжемся
        </>
      </Alert>
    </Container>
  </HeaderContentFooter>
);

export default BonusProgramPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
