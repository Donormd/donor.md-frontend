import { ArticleCardsPreview } from '../../../components/article-cards-preview';
import { Title } from '../../../components/UI/typography';
import { Section } from '../utils';

export const articles = [
  {
    image: '/images/pages/home/about-donations/donor-requirements.svg',
    title: 'Какие требования к донору?',
    paragraph: `Перед первой донацией Вам необходимо ознакомиться с перечнем противопоказаний`,
    link: '/minimum-requirements-for-donor',
  },
  {
    image: '/images/pages/home/about-donations/preparation-donation.svg',
    title: 'Как подготовиться к донации?',
    paragraph: `Накануне и в день сдачи крови есть определённые запреты и рекомендации,
     которых необходимо придерживаться`,
    link: '/how-to-prepare-for-donation',
  },
  {
    image: '/images/pages/home/about-donations/donation-going.svg',
    title: 'Как проходит донация?',
    paragraph: `Куда обращаться? Нужно ли иметь при себе какие-либо документы? 
    Как происходит процедура сдачи крови?`,
    link: '/blood-donation-day',
  },
];

export const AboutDonation = () => {
  return (
    <Section id='about-donation'>
      <Title as='h2' margin='0 0 40px 0' bold>
        Подготовка к первой сдаче крови
      </Title>
      <ArticleCardsPreview articles={articles} />
    </Section>
  );
};
