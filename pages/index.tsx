import { Footer } from '../components/common/footer';
import { Header } from '../components/common/header';
import AboutDonation from '../components/sections/home/about-donations';
import CallToAction from '../components/sections/home/call-to-action';
import Feedback from '../components/sections/home/feedback';
import { Intro } from '../components/sections/home/intro';
import Monitoring from '../components/sections/home/monitoring';
import { Places } from '../components/sections/home/places';
import Stories from '../components/sections/home/stories';
import { Container } from '../core/layouts/container';
import { useAppSelector } from '../redux/store';

const HomePage = () => {
  const { home: data } = useAppSelector((state) => state.aboutDonations);
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
