import Container from '../ui/Containers';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

const Hero = () => {
  return (
    <section className='min-h-screen overflow-hidden bg-white py-16 lg:py-24'>
      <Container className='flex flex-col items-center gap-14 lg:flex-row'>
        <HeroContent />
        <HeroVisual />
      </Container>
    </section>
  );
};

export default Hero;
