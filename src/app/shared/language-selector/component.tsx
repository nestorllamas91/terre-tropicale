import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Fragment, useState } from 'react';

import ArrowIcon from '@/shared/icons/arrow';

const LanguageSelector = ({ place }: LanguageSelectorProps): JSX.Element | null => {
  const { t } = useTranslation('menu');
  const { aboutLink, contactLink, homeLink, ourCocktailsLink, ourSmoothiesLink } = t('pageLinksSection');

  const router = useRouter();

  let initialSelectedLanguage = null;
  for (const language of languages) {
    if (router.locale === language.code) {
      initialSelectedLanguage = language;
      break;
    }
  }
  const [selectedLanguage, setSelectedLanguage] = useState<SelectedLanguage | null>(initialSelectedLanguage);

  const changeLanguage = (language: SelectedLanguage) => {
    setSelectedLanguage(language);
    [homeLink, ourSmoothiesLink, ourCocktailsLink, aboutLink, contactLink].map(
      ({ localesPathnames, originalPathname }) => {
        if (router.pathname === originalPathname) {
          router.push(originalPathname, localesPathnames[language.code], { locale: language.code });
        }
      }
    );
  };

  if (!selectedLanguage) return null;
  return (
    <Listbox value={selectedLanguage} onChange={language => changeLanguage(language)}>
      {({ open }) => (
        <div className="relative w-28">
          <Listbox.Button className="flex justify-between items-center w-full px-3 py-1 border border-gray-300 rounded-md shadow text-left bg-white focus:outline-none">
            <span className={classNames('language-menu-navigation-bar')}>{selectedLanguage.name}</span>
            <ArrowIcon className="w-3 transform rotate-90" />
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className={classNames(
                'absolute mt-1 w-full bg-white shadow max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none',
                place === 'lateral-menu' ? 'bottom-9' : ''
              )}
            >
              {languages.map(language => (
                <Listbox.Option
                  key={language.code}
                  value={language}
                  className={({ active }) =>
                    classNames(active ? 'text-white bg-indigo-600' : 'text-gray-900', 'select-none px-4 py-2')
                  }
                >
                  {({ selected }) => (
                    <span
                      className={classNames('language-menu-navigation-bar', selected ? 'font-semibold' : 'font-normal')}
                    >
                      {language.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

const languages = [
  {
    name: 'Français',
    code: 'fr-FR',
    filename: 'france.svg'
  },
  {
    name: 'English',
    code: 'en-US',
    filename: 'united-states.svg'
  },
  {
    name: 'Español',
    code: 'es-ES',
    filename: 'spain.svg'
  }
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

type LanguageSelectorProps = {
  place?: string;
};

type SelectedLanguage = {
  name: string;
  code: string;
  filename: string;
};

export default LanguageSelector;
