import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from 'antd';
import styled from 'styled-components';
import Typography from '../components/UI/typography';
import HeaderContentFooter from '../layouts/header-content-footer';
import Alert from '../components/alert';

const BonusesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  &::before {
    content: '✔';
    margin-right: 5px;
  }
`;

const OrganizationsList = styled.div`
  display: grid;

  @media (min-width: 992px) {
    & {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
    }
  }
`;

const BonusProgramPage: React.FC = (): JSX.Element => (
  <HeaderContentFooter background='/images/pages/articles/welcome.png'>
    <section className='container'>
      <Typography bold>Бонусная программа для коммерческих агентов</Typography>
      <p>
        Наш сервис приглашает коммерческих агентов стать частью бонусной программы для доноров
        крови. Это нам позволит поощрять активных доноров, выделять значимость этого доброго
        поступка а вам как партнерам получать доверие и лояльность ваших клиентов -доноров. Мы будем
        рад Вас видеть в списках партнеров бонусной программы для доноров и вместе реализовывать
        концепцию “ люди - помогают людям” и поддерживать идею развития донорского движения.
      </p>
      <p>
        Наша основная целевая группа - это люди в возрасте 18-45 лет из городов Тирасполь, Бендеры и
        Рыбница. Социально ответственные сознательные граждане.
      </p>
      <p>
        <b>Со своей стороны мы предлагаем:</b>
      </p>
      <BonusesList>
        <ListItem>Продвижение вашей компании на всех ресурсах проекта;</ListItem>
        <ListItem>Размещение информации о Вас на Web-сервисе donor.md;</ListItem>
        <ListItem>Размещение фирменной наклейки у Вас “Здесь любят доноров крови”.</ListItem>
      </BonusesList>
      <p>
        Предложения, размещающиеся в нашей программе, должны быть уникальные, специальные для
        доноров, максимально возможные.
      </p>
      <p>
        <b>Как это реализуется?</b>
      </p>
      <p>
        <b>Вариант первый</b>. Предоставление скидки, внедрение бонусных, накопительных, дисконтных
        возможностей для доноров крови. С каждым партнером мы обсудим формат взаимодействия и Ваши
        условия предоставления скидки. <br />
        <b>Вариант второй</b>. Предоставление бесплатных подарков для доноров, которые будут
        распределены в формате конкурсов на наших социальных площадках.
      </p>
      <p>
        <b>Как это будет выглядеть для донора?</b>
      </p>
      <p>
        В личном кабинете донора есть раздел “бонусы” в котором можно увидеть какие бонусы можно
        получить от партнеров и какие условия ее предоставления. Узнают о новом партнере бонусной
        программы через уведомления, а также из социальных сетей нашего проекта.
      </p>
      <p>
        Если ваша компания хочет присоединиться к нашей программе, пишите на почту или сообщите нам
        в наших аккаунтах в социальных сетях.
      </p>
      <p>
        <b>Какая информация нам нужна для участия в бонусное программе:</b>
      </p>
      <p>
        Название, Короткое описание, Ваш логотип (png, прозрачный фон), В каких городах, Срок
        действия, Какую скидку и на что предлагаете, Условия получения бонуса
      </p>
      <Divider />
      <Typography bold as='h3' size='1.625rem'>
        Партнеры бонусной программы
      </Typography>
      <OrganizationsList>
        <article>
          <Image src='/images/pages/articles/logo__active.png' width={356} height={186} />
          <Typography align='center' as='h3' size='1.125rem'>
            <b>ООО “Автолялечка”</b>
            <br />
            Сеть маркетов автоаксессуаровв Приднестровье.
          </Typography>
        </article>
        <article>
          <Image src='/images/pages/articles/op.png' width={356} height={186} />
          <Typography align='center' as='h3' size='1.125rem'>
            <b>“Открытые приоритеты”</b>
            <br />
            Организация, посвящённая продвижению открытого программного обеспечения.
          </Typography>
        </article>
      </OrganizationsList>
      <Alert>
        Если Вы хотите стать участником бонусной программы{' '}
        <Link href='/'>
          <a>
            <b>напишите нам</b>
          </a>
        </Link>{' '}
        и мы с вами свяжемся
      </Alert>
    </section>
  </HeaderContentFooter>
);

export default BonusProgramPage;
