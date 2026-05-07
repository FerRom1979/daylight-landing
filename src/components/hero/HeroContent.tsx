import { MdOutlineStar, MdPlayArrow } from 'react-icons/md';
import { HERO_STARS } from '../../constants/hero';
import { useTranslation } from 'react-i18next';

const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <div className='flex-1 text-center lg:text-left'>
      <p className='mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600'>{t('hero.sub')}</p>
      <h1 className='max-w-xl text-5xl font-bold leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl'>
        {t('hero.title_1')}
        <br />
        {t('hero.title_2')} <span className='text-blue-600'>{t('hero.highlight_1')}</span> {t('hero.title_3')}
        <br />
        <span className='text-yellow-500'>{t('hero.highlight_2')}</span>
      </h1>
      <p className='mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-600 lg:mx-0'>{t('hero.description')}</p>
      <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start'>
        <button className='rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-700'>{t('hero.start')}</button>

        <button className='flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-8 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100'>
          <MdPlayArrow className='text-lg' />
          {t('hero.how_it_works')}
        </button>
      </div>
      <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start'>
        <div className='flex -space-x-3'>
          <img src='https://i.pravatar.cc/100?img=1' alt='avatar' className='h-12 w-12 rounded-full border-2 border-white object-cover' />
          <img src='https://i.pravatar.cc/100?img=2' alt='avatar' className='h-12 w-12 rounded-full border-2 border-white object-cover' />
          <img src='https://i.pravatar.cc/100?img=3' alt='avatar' className='h-12 w-12 rounded-full border-2 border-white object-cover' />
          <img src='https://i.pravatar.cc/100?img=4' alt='avatar' className='h-12 w-12 rounded-full border-2 border-white object-cover' />
        </div>

        <div>
          <div className='flex justify-center gap-1 lg:justify-start'>
            {HERO_STARS.map((star) => (
              <MdOutlineStar key={star} className='text-xl text-yellow-500' />
            ))}
          </div>

          <div className='mt-1 text-sm text-slate-600'>
            <p className='font-semibold text-slate-900'>{t('hero.people_count')}</p>
            <p>{t('hero.people_transformed')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
