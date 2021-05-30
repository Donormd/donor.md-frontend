import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Title, Divider, StyledLink } from '../../components/UI';
import { HeaderContentFooter } from '../../layouts/header-content-footer';
import { Alert } from '../../components/alert';
import { Container } from '../../layouts/container';

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
  padding-bottom: 50px;

  @media (min-width: 992px) {
    & {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 25px;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
`;

const TitleOrganizations = styled(Title)`
  margin: 40px 0 25px;
`;

const BonusProgramPage: FC = () => (
  <HeaderContentFooter background='/images/pages/welcome.png'>
    <Container>
      <Title margin='15px' bold>
        Бонусная программа для коммерческих агентов
      </Title>
      <p>
        Наш сервис приглашает коммерческих агентов стать частью бонусной программы для доноров
        крови. Это нам позволит поощрять активных доноров, выделять значимость этого доброго
        поступка, а вам как партнерам получать доверие и лояльность ваших клиентов -доноров. Мы
        будем рады Вас видеть в списках партнеров бонусной программы для доноров, вместе
        реализовывать концепцию “Люди - помогают людям” и поддерживать идею развития донорского
        движения.
      </p>
      <p>
        Наша основная целевая группа - это люди в возрасте 18-45 лет из городов Тирасполь, Бендеры и
        Рыбница. Социально ответственные сознательные граждане.
      </p>
      <p>
        <b>Со своей стороны мы предлагаем:</b>
      </p>
      <BonusesList>
        <ListItem>Продвижение Вашей компании на всех ресурсах проекта;</ListItem>
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
        В личном кабинете донора есть раздел “бонусы”, в котором можно увидеть какие бонусы можно
        получить от партнеров и какие условия их предоставления. Пользователи узнают о новом
        партнере бонусной программы через уведомления, а также из социальных сетей нашего проекта.
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
      <TitleOrganizations bold as='h3'>
        Бонусы от наших партнеров
      </TitleOrganizations>
      <OrganizationsList>
        <article>
          <ImageWrapper>
            <Image src='/images/pages/articles/logo__active.png' width={356} height={186} />
          </ImageWrapper>
          <Title align='center' as='h3' size='1.125rem'>
            <b>ООО “Автолялечка”</b>
            <br />
            Сеть маркетов автоаксессуаровв Приднестровье.
          </Title>
        </article>
        <article>
          <ImageWrapper>
            <Image src='/images/pages/articles/op.png' width={356} height={186} />
          </ImageWrapper>
          <Title align='center' as='h3' size='1.125rem'>
            <b>“Открытые приоритеты”</b>
            <br />
            Организация, посвящённая продвижению открытого программного обеспечения.
          </Title>
        </article>
      </OrganizationsList>
      <Alert dismissible>
        Если Вы хотите стать участником бонусной программы{' '}
        <Link href='/'>
          <StyledLink color='black' underline bold>
            <b>напишите нам</b>
          </StyledLink>
        </Link>{' '}
        и мы с вами свяжемся
      </Alert>
    </Container>
  </HeaderContentFooter>
);

export default BonusProgramPage;
