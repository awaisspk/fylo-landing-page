import {Box} from '@components/Box';
import {Footer} from '@components/Footer';
import {Header} from '@components/Header';
import {Hero} from '@components/Hero';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Footer />
    </Box>
  );
};

export default Home;
