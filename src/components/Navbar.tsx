import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdLightMode, MdMenu, MdClose } from 'react-icons/md';
import { navLinks } from '../constants/navbar';

function Navbar() {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <MdLightMode className="text-3xl text-yellow-500" />
          <h1 className="text-xl font-bold text-blue-900">
            {t('navbar.title')}
          </h1>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {t(link.label)}
            </a>
          ))}
          <button
            onClick={changeLanguage}
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            {t('navbar.start')}
          </button>
        </div>
        <button
          className="text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <MdClose className="text-3xl" />
          ) : (
            <MdMenu className="text-3xl" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {t(link.label)}
              </a>
            ))}

            <button
              onClick={changeLanguage}
              className="w-fit text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            <button className="mt-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              {t('navbar.start')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
