import Link from 'next/link';

import { StyledLink } from '../components/UI/links';
import { Paragraph, Title } from '../components/UI/typography';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';

const SupportProject = () => (
  <HeaderContentFooter background='/articles/images/pages/love-pic.png'>
    <Container>
      <Title margin='0 0 15px 0' bold>
        Поддержать проект donor.md
      </Title>
      <Paragraph>
        Web-сервис donor.md создан как социальная инициатива по решению вопроса обеспечения Приднестровья
        донорской крови и развития донорского сообщества. Мы применяем самые последние технологические решения
        в сфере IT-разработок, походы в развитие донорского движения, но наш общий результа всё-таки зависит
        от тех, кто разделяет с нами концепцию “Люди помогают людям”.
      </Paragraph>
      <Paragraph>
        Мы всегда рады любой поддержке, которые объединит наши усилия в развитие донорского движения в
        Приднестровье.
      </Paragraph>
      <Paragraph>
        Мы приглашаем Pro bono волонтеров и специалистов сделать вклад в развитие сервиса. Волонтерство ваших
        сотрудников или услуги вашей компании могут {` `}
        <Link href='/become-volunteer' passHref>
          <StyledLink color='black' underline bold>
            помочь усилить наши возможности.
          </StyledLink>
        </Link>
      </Paragraph>
      <Paragraph>
        Мы приглашаем коммерческих агентов, начинающих и крупных, стать участниками нашей&nbsp;
        <Link href='/bonus-program' passHref>
          <StyledLink color='black' underline bold>
            бонусной программы для доноров
          </StyledLink>
        </Link>
      </Paragraph>
      <Paragraph>
        Мы приглашаем организации любых форм собственности стать участниками нашей программы&nbsp;
        <Link href='/corporate-donation' passHref>
          <StyledLink color='black' underline bold>
            “Корпоративной донорство”.
          </StyledLink>
        </Link>
      </Paragraph>
      <Paragraph>
        Мы приглашаем заинтересованных людей и компаний помочь нам финансово из любого уголка мира.
      </Paragraph>
      <Paragraph>
        Нам нужны ресурсы для запуска дополнительных функции донорского кабинета, создание промо материалов,
        технической поддержки проекта.
      </Paragraph>
      <Paragraph>Напишите нам и мы с радостью обсудим индивидуальный вариант сотрудничества.</Paragraph>
    </Container>
  </HeaderContentFooter>
);

export default SupportProject;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
