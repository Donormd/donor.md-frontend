import React from 'react';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { Container } from '../layouts/container';
import Intro from '../components/sections/home/intro';
import Monitoring from '../components/sections/home/monitoring';
import Places from '../components/sections/home/places';
import AboutDonation from '../components/sections/home/about-donations';
import CallToAction from '../components/sections/home/call-to-action';
import Stories from '../components/sections/home/stories';
import Feedback from '../components/sections/home/feedback';
import { useAppSelector } from '../redux/store';

const HomePage: React.FC = (): JSX.Element => {
  const { home: data } = useAppSelector((state) => state.aboutDonations);
  return (
    <>
      <Header />
      <Container as='main'>
        <Intro />
        <Monitoring />
        <Places />
        <AboutDonation title='Подготовка к первой сдачи крови' data={data} />
        <CallToAction />
        <Stories />
        <Feedback />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
