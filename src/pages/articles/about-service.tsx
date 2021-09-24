import { ArticleCards } from '../../components/article-cards';
import { ListWithCheck } from '../../components/UI/list-with-check';
import { Divider } from '../../components/UI/other';
import { Paragraph, Title } from '../../components/UI/typography';
import { Container } from '../../core/layouts/container';
import { HeaderContentFooter } from '../../core/layouts/header-content-footer';

const listMock = [
  `мы упрощаем поиск доноров крови для тех, кто ищет доноров по социальным сетям и среди родственников. 
  Чем больше доноров в системе,  тем быстрее найдется нужная кровь;`,
  `мы даем информацию для тех, кто первый раз хочет сдавать кровь и мотивируем к регулярным кроводачам;`,
  `мы создали  кабинет донора для учета и планирования донаций с настроенной системой уведомлений;`,
  `мы информируем какие запасы есть в наших центрах крови, чтобы приходили те доноры, с той группой крови, 
    запасы по которой критичны;`,
  `мы будем поощрять активных доноров, привлекая коммерческих агентов;`,
  `мы делаем популярным донорство в социальных сетях и обращаем внимание к донорству крови государство
   и бизнес;`,
  `мы помогаем людям следить за своим здоровьем при помощи донорства крови;`,
];

const articles = [
  {
    title: 'ООО “Автолялечка”',
    subTitle: 'Сеть маркетов автоаксессуаровв Приднестровье.',
    image: {
      src: '/images/pages/articles/logo__active.png',
      width: 356,
      height: 186,
    },
  },
  {
    title: 'Открытые приоритеты',
    subTitle: 'Организация, посвящённая продвижению открытого программного обеспечения.',
    image: {
      src: '/images/pages/articles/op.png',
      width: 356,
      height: 186,
    },
  },
];

const AboutPage = () => (
  <HeaderContentFooter background='/images/pages/welcome.png'>
    <Container>
      <Title margin='0 0 30px 0' bold>
        Web-сервис DONOR.MD
      </Title>
      <Paragraph>
        Web-сервис <b>Donor.md</b> - это некоммерческий проект, созданный активистами в сфере общественного
        здравоохранения, в основе которого концепция “Люди помогают людям”. Наша цель - стабильная сдача
        донорской крови в Приднестровье. Поэтому мы готовим и объединяем ответственных доноров, которые смогут
        обеспечить запасы крови, достаточных для оказания медицинской помощи людям.
      </Paragraph>
      <Paragraph>Мы хотим вместе c донорским сообществом достичь следующих целей:</Paragraph>
      <Paragraph>
        <b>Добровольность.</b> Каждый донор в течение года добровольно сдает не менее трех кроводач.
      </Paragraph>
      <Paragraph>
        <b>Регулярность.</b> В течение трех лет создать систему, при которой люди не будут искать кровь в
        интернете и среди родственников, а Служба переливания крови будет обеспечена кровью в полном объеме.
      </Paragraph>
      <Paragraph>
        <b>Постоянство.</b> Не менее 3% населения Приднестровья в возрасте 18-50 лет должны стать
        добровольными донорами для службы переливания крови.
      </Paragraph>
      <Paragraph bold>Как мы это сделаем?</Paragraph>
      <ListWithCheck list={listMock} />
      <Divider />
      <Title as='h4' margin='30px 0' bold>
        Наши партнеры
      </Title>
      <ArticleCards articles={articles} />
      <Divider />
      <Title as='h4' bold>
        Финансовая поддержка:
      </Title>
      <Paragraph>
        Web-сервис donor.md стал финалистом 2020 EaP Civil Society Hackathon и получил премию Civil Society
        Digitisation Award для разработки, тестирования и запуска портала.
      </Paragraph>
      <Title as='h4' bold>
        Финансовая поддержка:
      </Title>
      <Paragraph>
        Будем рады вашим отзывам, пожеланиям, предложениям по электронной почте{' '}
        <a href='mail:to'>pmrdonor@gmail.com</a>.
      </Paragraph>
    </Container>
  </HeaderContentFooter>
);

export default AboutPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
