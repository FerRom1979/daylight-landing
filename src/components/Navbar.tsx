import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdLightMode } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className='w-full border-b bg-white'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <MdLightMode className='text-3xl text-yellow-500' />
          <h1 className='text-xl font-bold text-blue-900'>{t('navbar.title')}</h1>
        </div>
        <div className='hidden md:flex items-center gap-6'>
          <a href='#' className='text-gray-600 hover:text-blue-600'>
            {t('navbar.home')}
          </a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>
            {t('navbar.devocionals')}
          </a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>
            {t('navbar.community')}
          </a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>
            {t('navbar.about')}
          </a>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'> {t('navbar.start')}</button>
        </div>
        <button className='md:hidden text-gray-700' onClick={() => setOpen(!open)}>
          <MdMenu className='text-3xl' />
        </button>
      </div>
      {open && (
        <div className='md:hidden px-6 pb-4 flex flex-col gap-4'>
          <a href='#' className='text-gray-600 hover:text-blue-600'>
            {t('navbar.home')}
          </a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>
            {t('navbar.devocionals')}
          </a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>
            {t('navbar.community')}
          </a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>
            {t('navbar.about')}
          </a>

          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>{t('navbar.start')}</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
