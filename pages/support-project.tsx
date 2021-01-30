import Link from 'next/link';
import { Container } from '../layouts/container';
import { Title, StyledLink } from '../components/UI';
import HeaderContentFooter from '../layouts/header-content-footer';

const SupportProject: React.FC = (): JSX.Element => (
  <HeaderContentFooter background='/images/pages/love-pic.png'>
    <Container>
      <Title bold>Поддержать проект donor.md</Title>
      <p>
        Web-сервис donor.md создан как социальная инициатива по решению вопроса обеспечения
        Приднестровья донорской крови и развития донорского сообщества. Мы применяем самые последние
        технологические решения в сфере IT-разработок, но наш всё-таки зависит от тех, кто разделяет
        концепцию “Люди помогают людям”.
      </p>
      <p>
        Мы всегда рады любой поддержке, которые объединит наши усилия, так как вместе мы сделаем
        больше.
      </p>
      <p>
        Мы приглашаем Pro bono волонтеров и специалистов сделать вклад в развитие сервиса.
        Волонтерство ваших сотрудников или услуги вашей компании могут&nbsp;
        <Link href='/become-volunteer'>
          <StyledLink color='black' underline bold>
            помочь усилить возможности
          </StyledLink>
        </Link>
      </p>
      <p>
        Мы приглашаем коммерческих агентов, начинающих и крупных, стать участниками нашей&nbsp;
        <Link href='/bonus-program'>
          <StyledLink color='black' underline bold>
            бонусной программы для доноров
          </StyledLink>
        </Link>
      </p>
      <p>
        Мы приглашаем организации любых форм собственности стать участниками нашей программы&nbsp;
        <Link href='/corporate-donation'>
          <StyledLink color='black' underline bold>
            “Корпоративной донорство”
          </StyledLink>
        </Link>
        .
      </p>
      <p>
        Мы приглашаем заинтересованных людей и компаний помочь нам финансово из любого уголка мира.
      </p>
      <p>
        Нам нужны ресурсы для запуска дополнительных функции донорского кабинета, создание промо
        материалов, технической поддержке проекта.
      </p>
      <p>Напишите нам и мы с радостью обсудим индивидуальный вариант сотрудничества.</p>
    </Container>
  </HeaderContentFooter>
);

export default SupportProject;
