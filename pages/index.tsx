import { Footer } from '../src/components/common/footer';
import { Header } from '../src/components/common/header';
import { AboutDonation } from '../src/components/sections/home/about-donations';
import { CallToAction } from '../src/components/sections/home/call-to-action';
import { Feedback } from '../src/components/sections/home/feedback';
import { Intro } from '../src/components/sections/home/intro';
import { Monitoring } from '../src/components/sections/home/monitoring';
import { Places } from '../src/components/sections/home/places';
import { Stories } from '../src/components/sections/home/stories';
import { Container } from '../src/core/layouts/container';
import { articlesMock } from '../src/mocks/articles';

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
