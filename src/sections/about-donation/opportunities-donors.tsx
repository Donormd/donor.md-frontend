import { ArticleCardsPreview } from '../../components/article-cards-preview';
import { Title } from '../../components/UI/typography';

export const articles = [
  {
    image: '/images/pages/about-donation/benefits-and-privileges.svg',
    title: 'Льготы и привилегии донора',
    link: '/benefits-and-privileges',
  },
  {
    image: '/images/pages/about-donation/donor-and-work.svg',
    title: 'Донор и работа/учеба',
    link: '/donor-and-work',
  },
  {
    image: '/images/pages/about-donation/procedural-documents.svg',
    title: 'Регламентирующие донорство крови документы',
    link: '/procedural-documents',
  },
];

export const OpportunitiesDonors = () => {
  return (
    <section>
      <Title as='h2' margin='80px 0 40px 0' bold>
        Возможности для доноров
      </Title>
      <ArticleCardsPreview articles={articles} />
    </section>
  );
};
