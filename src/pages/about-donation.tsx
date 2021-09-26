import Link from 'next/link';

import { StyledLink } from '../components/UI/links';
import { Paragraph, Title } from '../components/UI/typography';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { DonationQuestions } from '../sections/about-donation/donation-questions';
import { Facts } from '../sections/about-donation/facts';
import { HowToPrepare } from '../sections/about-donation/how-to-prepare';
import { OpportunitiesDonors } from '../sections/about-donation/opportunities-donors';

const AboutDonationPage = () => {
  return (
    <HeaderContentFooter>
      <Container>
        <Title margin='0 0 40px 0' bold>
          О донорстве
        </Title>
        <Paragraph margin='0'>
          Если Вы открыли эту страницу значит у Вас возникло желание сдать донорскую кровь.
        </Paragraph>
        <Paragraph>
          Нам нравятся Ваши мотивы! И мы расскажем Вам более подробно о донорстве и всё, что с ним связано.
        </Paragraph>
        <Paragraph>
          В жизни случаются ситуации, когда в силу чрезвычайных обстоятельств, болезни, травмы, кровотечения
          человек нуждается в крови или ее компонентах.
        </Paragraph>
        <Paragraph>
          Люди, по своей природе, социальны и должны помогать друг другу. Поэтому в таких случаях на помощь
          приходит донор, донор крови.
        </Paragraph>
        <Paragraph>
          <b>Донор</b> - это человек, который добровольно сдает свою кровь или ее компоненты с целью
          использования для оказания жизненно необходимой помощи.
        </Paragraph>
        <Paragraph>
          По Закону{' '}
          <Link href='/#'>
            <StyledLink underline>«О донорстве»</StyledLink>
          </Link>
          , донорская кровь является национальным достоянием государства.
        </Paragraph>
        <Paragraph>
          Мы собрали для Вас самую важную информацию о том, как стать ответственным донором, интересные факты,
          льготы и привилегии для доноров и многое другое.
        </Paragraph>
        <HowToPrepare />
        <OpportunitiesDonors />
        <Facts />
        <DonationQuestions />
      </Container>
    </HeaderContentFooter>
  );
};

export default AboutDonationPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
