import Link from 'next/link';

import { StyledLink, Title } from '../../components/UI';
import { Container } from '../../core/layouts/container';
import { HeaderContentFooter } from '../../core/layouts/header-content-footer';

const SupportProject = () => (
  <HeaderContentFooter background='/articles/images/pages/love-pic.png'>
    <Container>
      <Title margin='15px' bold>
        Поддержать проект donor.md
      </Title>
      <p>
        Web-сервис donor.md создан как социальная инициатива по решению вопроса обеспечения Приднестровья
        донорской крови и развития донорского сообщества. Мы применяем самые последние технологические решения
        в сфере IT-разработок, походы в развитие донорского движения, но наш общий результа всё-таки зависит
        от тех, кто разделяет с нами концепцию “Люди помогают людям”.
      </p>
      <p>
        Мы всегда рады любой поддержке, которые объединит наши усилия в развитие донорского движения в
        Приднестровье.
      </p>
      <p>
        Мы приглашаем Pro bono волонтеров и специалистов сделать вклад в развитие сервиса. Волонтерство ваших
        сотрудников или услуги вашей компании могут {` `}
        <Link href='/articles/become-volunteer' passHref>
          <StyledLink color='black' underline bold>
            помочь усилить наши возможности
          </StyledLink>
        </Link>
        .
      </p>
      <p>
        Мы приглашаем коммерческих агентов, начинающих и крупных, стать участниками нашей&nbsp;
        <Link href='/articles/bonus-program' passHref>
          <StyledLink color='black' underline bold>
            бонусной программы для доноров
          </StyledLink>
        </Link>
      </p>
      <p>
        Мы приглашаем организации любых форм собственности стать участниками нашей программы&nbsp;
        <Link href='/articles/corporate-donation' passHref>
          <StyledLink color='black' underline bold>
            “Корпоративной донорство”
          </StyledLink>
        </Link>
        .
      </p>
      <p>Мы приглашаем заинтересованных людей и компаний помочь нам финансово из любого уголка мира.</p>
      <p>
        Нам нужны ресурсы для запуска дополнительных функции донорского кабинета, создание промо материалов,
        технической поддержки проекта.
      </p>
      <p>Напишите нам и мы с радостью обсудим индивидуальный вариант сотрудничества.</p>
    </Container>
  </HeaderContentFooter>
);

export default SupportProject;
