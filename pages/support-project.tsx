import Link from 'next/link';
import HeaderContentFooter from '../layouts/header-content-footer';
import style from '../styles/pages/support-page.module.scss';

const SupportProject: React.FC = (): JSX.Element => (
  <HeaderContentFooter classNames={style.support}>
    <section className='container'>
      <article>
        <h1 className={style.support__heading}>Поддержать проект donor.md</h1>
        <p className={style.support__text}>
          Web-сервис donor.md создан как социальная инициатива по решению вопроса обеспечения
          Приднестровья донорской крови и развития донорского сообщества. Мы применяем самые
          последние технологические решения в сфере IT-разработок, но наш всё-таки зависит от тех,
          кто разделяет концепцию “Люди помогают людям”.
        </p>
        <p className={style.support__text}>
          Мы всегда рады любой поддержке, которые объединит наши усилия, так как вместе мы сделаем
          больше.
        </p>
        <p className={style.support__text}>
          Мы приглашаем Pro bono волонтеров и специалистов сделать вклад в развитие сервиса.
          Волонтерство ваших сотрудников или услуги вашей компании могут&nbsp;
          <Link href='/'>
            <a className={style.link__bold}>помочь усилить возможности</a>
          </Link>
        </p>
        <p className={style.support__text}>
          Мы приглашаем коммерческих агентов, начинающих и крупных, стать участниками нашей&nbsp;
          <Link href='/'>
            <a className={style.link__bold}>бонусной программы для доноров</a>
          </Link>
        </p>
        <p className={style.support__text}>
          Мы приглашаем организации любых форм собственности стать участниками нашей программы&nbsp;
          <Link href='/'>
            <a className={style.link__bold}>“Корпоративной донорство”</a>
          </Link>
          .
        </p>
        <p className={style.support__text}>
          Мы приглашаем заинтересованных людей и компаний помочь нам финансово из любого уголка
          мира.
        </p>
        <p className={style.support__text}>
          Нам нужны ресурсы для запуска дополнительных функции донорского кабинета, создание промо
          материалов, технической поддержке проекта.
        </p>
        <p>Напишите нам и мы с радостью обсудим индивидуальный вариант сотрудничества.</p>
      </article>
    </section>
  </HeaderContentFooter>
);

export default SupportProject;
