import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { Container } from '../layouts/container';
import Intro from '../components/sections/home/intro';
import Monitoring from '../components/sections/home/monitoring';
import Places from '../components/sections/home/places';
import AboutDonation from '../components/sections/home/about-donation';
import CallToAction from '../components/sections/home/call-to-action';
import Stories from '../components/sections/home/stories';
import Feedback from '../components/sections/home/feedback';

const HomePage: React.FC = (): JSX.Element => (
  <>
    <Header />
    <Container as='main'>
      <Intro />
      <Monitoring />
      <Places />
      <AboutDonation />
      <CallToAction />
      <Stories />
      <Feedback />
    </Container>
    <Footer />
  </>
);

export default HomePage;
