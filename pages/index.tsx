import {Box} from '@components/Box';
import {Footer} from '@components/Footer';
import {Header} from '@components/Header';
import {Hero} from '@components/Hero';
import {Testimonial} from '@components/TestimonialSection';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Testimonial />
      <Footer />
    </Box>
  );
};

export default Home;
