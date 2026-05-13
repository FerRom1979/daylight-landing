import { useTranslation } from 'react-i18next';

const HeroVisual = () => {
  const { i18n } = useTranslation();

  const heroImage =
    i18n.language === 'es'
      ? '/images/hero-visual-es.png'
      : '/images/hero-visual-en.png';

  return (
    <div className="relative flex flex-1 items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-amber-100 blur-3xl" />
      <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
        <img
          src={heroImage}
          alt="Daylight App Preview"
          className="h-auto w-full max-w-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default HeroVisual;
