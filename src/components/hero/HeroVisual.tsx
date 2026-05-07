import { useTranslation } from 'react-i18next';

const HeroVisual = () => {
  const { i18n } = useTranslation();

  const mockupImage = i18n.language === 'es' ? '/images/phone-mockup-es.png' : '/images/phone-mockup-en.png';

  return (
    <div className='relative flex flex-1 items-center justify-center'>
      <div className='absolute inset-0 -z-10 bg-blue-100 blur-3xl' />

      <div className='relative min-h-[500px] w-full overflow-hidden rounded-[32px]'>
        <img src='/images/hero-bg.jpg' alt='Background' className='absolute inset-0 h-full w-full object-cover' />

        <div className='absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20' />

        <img
          src={mockupImage}
          alt='Daylight App'
          className='relative z-10 w-full max-w-2xl object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]'
        />
      </div>
    </div>
  );
};

export default HeroVisual;
