import SuccessStories from '../components/SuccessStories';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

const Hero = () => {
  return (
    <div className='mt-10 flex flex-col gap-10'>
      <SuccessStories />
      <Questions />
      <Footer />
    </div>
  );
};

export default Hero;
