/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HeaderContentFooter from '../../layouts/header-content-footer';
import { Container } from '../../layouts/container';
import { Paragraph as PH, Title as TL, Accordion } from '../../components/UI';
import AboutDonation from '../../components/sections/home/about-donations';
import { useAppSelector } from '../../redux/store';

const Paragraph = styled(PH)`
  margin-bottom: 15px;
`;

const Title = styled(TL)`
  margin-bottom: 15px;
`;

const Article = styled.div<{ background: string }>`
  width: 100%;
  height: 500px;
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
`;

const StyledLink = styled.a`
  text-decoration: underline;
  font-size: 1.2em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`;

const StyledAccordion = styled(Accordion)`
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    max-width: 60%;
  }
`;

const Facts = styled.div`
  counter-reset: count;
  display: grid;
  padding: 30px 0;

  ${Paragraph} {
    position: relative;
    padding-left: 40px;
  }
  ${Paragraph}::before {
    position: absolute;
    top: 0;
    left: 0;
    counter-increment: count;
    content: counter(count);
    font-size: 3.5em;
    line-height: 1;
    font-weight: bold;
    color: ${({ theme }) => `${theme.colors.danger}50`};
  }

  @media (min-width: ${({ theme }) => theme.media.lg}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 15px;
  }
`;

const AboutDonationPage: React.FC = (): JSX.Element => {
  const { aboutPage: data } = useAppSelector((state) => state.aboutDonations);
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <TL margin='40px' bold>
          О донорстве
        </TL>
        <Paragraph>
          Если Вы открыли эту страницу значит у Вас возникло желание сдать донорскую кровь. Нам
          нравятся Ваши мотивы! И мы расскажем Вам более подробно о донорстве и всё, что с ним
          связано.
        </Paragraph>
        <Paragraph>
          В жизни случаются ситуации, когда в силу чрезвычайных обстоятельств, болезни, травмы,
          кровотечения, человек нуждается в донорской крови или ее компонентах.
        </Paragraph>
        <Paragraph>
          Люди, по своей природе, социальны и должны помогать друг другу. Поэтому в таких случаях на
          помощь приходит донор, донор крови.
        </Paragraph>
        <Paragraph>
          <b>Донор</b> - это человек, который добровольно сдает свою кровь или ее компоненты с целью
          использования для оказания жизненно необходимой помощи.
        </Paragraph>
        <Paragraph>
          По Закону «О донорстве», донорская кровь является национальным достоянием государства.
        </Paragraph>
        <Paragraph>
          Мы собрали для Вас самую важную информацию о том, как стать ответственным донором,
          интересные факты, льготы и привилегии для доноров и многое другое.
        </Paragraph>
        <Article background='/images/pages/articles/about-donation/preparation-blood-donation.svg'>
          <Title as='h2' className='h1' bold>
            Подготовка к первой сдачи крови
          </Title>
          <LinkGroup>
            <Link href='/articles/minimum-requirements-for-donor' passHref>
              <StyledLink>Какие требования к донору?</StyledLink>
            </Link>
            <Link href='/articles/how-to-prepare-for-donation' passHref>
              <StyledLink>Как подготовиться к донации?</StyledLink>
            </Link>
            <Link href='/' passHref>
              <StyledLink>Как проходит донация?</StyledLink>
            </Link>
            <Link href='/articles/recovery-from-donation' passHref>
              <StyledLink>Восстановление после донации</StyledLink>
            </Link>
            <Link href='/articles/who-needs-blood' passHref>
              <StyledLink>Кому нужна донорская кровь</StyledLink>
            </Link>
            <Link href='/articles/plasma-donors' passHref>
              <StyledLink>О донорстве плазмы Covid19</StyledLink>
            </Link>
          </LinkGroup>
        </Article>
        <AboutDonation title='Возможности для доноров' data={data} />
        <Title as='h2' className='h1' bold>
          Факты о донорстве
        </Title>
        <Paragraph size='1.1rem'>
          Мы Вам расскажем <b>8 научно доказанных фактов</b>, <br />
          почему регулярное (2-5 раз в год)
          <b>донорство полезно</b>.
        </Paragraph>
        <Facts>
          <Paragraph>
            У доноров за счет регулярного обновления крови{' '}
            <b>гораздо устойчивее функционирует иммунная система</b>, печень, поджелудочная железа,
            пищеварительная система.
          </Paragraph>
          <Paragraph>
            Доноры, согласно статистике, в среднем <b>живут на 5 лет дольше</b> других своих
            сограждан.
          </Paragraph>
          <Paragraph>
            Донор всегда здоров, так как постоянно держит свое <b>здоровье под контролем</b> и может
            узнать о своем заболевании на ранних стадиях.
          </Paragraph>
          <Paragraph>
            Организм донора более <b>стойко переносит кровопотерю</b>, что повысит шансы на
            выживание при сильном кровотечении.
          </Paragraph>
          <Paragraph>
            У Донора <b>сердце работает лучше</b>, так как кроводачи способствует уменьшенью
            вязкости крови и высокому содержанию железа.
          </Paragraph>
          <Paragraph>
            У Донора более <b>низкие риски развития инфарктов</b>, инсультов, онкологических
            заболеваний.
          </Paragraph>
          <Paragraph>
            Донор за каждую донацию <b>сжигает 650 калорий.</b>
          </Paragraph>
          <Paragraph>
            Донор это <b>добрый и жизнерадостных человек</b>, обычно про таких говорят: “У этого
            человека доброе сердце”.
          </Paragraph>
        </Facts>
        <Title as='h2' className='h1' bold>
          Вопросы по донорству
        </Title>
        <Article background='/images/pages/articles/about-donation/donation-questions.svg'>
          <StyledAccordion bordered defaultActiveKey={['1']} ghost>
            <Accordion.Panel
              key='1'
              header={
                <Title bold as='h4'>
                  Если у меня плохое зрение, могу ли я быть донором крови?
                </Title>
              }
            >
              Если у Вас хотя бы у одного глаза потеря зрения больше, чем -4 - Вы не сможете быть донором.
            </Accordion.Panel>
            <Accordion.Panel
              key='2'
              header={
                <Title bold as='h4'>
                  Я детстве болела желтухой (гепатит А), могу ли я сейчас быть донором?
                </Title>
              }
            >
              После лечения этого заболевания кровь можно сдавать через 24 месяца. Гепатит А не является абсолютным ограничением к донорству.
            </Accordion.Panel>
            <Accordion.Panel
              key='3'
              header={
                <Title bold as='h4'>
                  Я боюсь сдавать кровь из-за страха, что при донации мне занесут гепатит, это возможно? 
                </Title>
              }
            >
              Такое не реально, используется исключительно одноразовый и стерильный инструмент (иголки, трубки, пакеты).  
            </Accordion.Panel>
            <Accordion.Panel
              key='4'
              header={
                <Title bold as='h4'>
                  Можно ли сдавать кровь после холецистэктомии?
                </Title>
              }
            >
              К сожалению донором, после удаления любого органа быть нельзя. 
            </Accordion.Panel>
             key='5'
              header={
                <Title bold as='h4'>
                  Какое мясо можно есть перед донацией? 
                </Title>
              }
            >
              За 2 дня до донации можно есть нежирные сорта мяса, в основном это грудинная часть птицы или вырезка других видов мяса в отварном виде. Избегайте в эти дни жирное мясо (бедро птицы, мясо с жиром или жировыми прослойками, сало) приготовленное в любом виде. 
            </Accordion.Panel>           
          </StyledAccordion>
        </Article>
      </Container>
    </HeaderContentFooter>
  );
};

export default AboutDonationPage;
