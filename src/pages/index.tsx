import { Footer } from '../components/common/footer';
import { Header } from '../components/common/header';
import { Container } from '../core/layouts/container';
import { articlesMock } from '../mocks/articles';
import { AboutDonation } from '../sections/home/about-donations';
import { CallToAction } from '../sections/home/call-to-action';
import { Feedback } from '../sections/home/feedback';
import { Intro } from '../sections/home/intro';
import { Monitoring } from '../sections/home/monitoring';
import { Places } from '../sections/home/places';
import { Stories } from '../sections/home/stories';

const HomePage = () => {
  const { home: data } = articlesMock;
  return (
    <>
      <Header />
      <Container as='main'>
        <Intro />
        <Monitoring />
        <Places />
        <AboutDonation title='Подготовка к первой сдаче крови' data={data} />
        <CallToAction />
        <Stories />
        <Feedback />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
