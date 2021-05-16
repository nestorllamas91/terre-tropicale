import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Fragment, useState } from 'react';

import ArrowIcon from '@/shared/icons/arrow';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
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

type SelectedLanguage = {
  name: string;
  code: string;
  filename: string;
};

const LanguageSelector = (): JSX.Element | null => {
  const { i18n } = useTranslation('menu');
  let initialSelectedLanguage = null;
  for (const language of languages) {
    if (language.code === i18n.language) {
      initialSelectedLanguage = language;
      break;
    }
  }
  const [selectedLanguage, setSelectedLanguage] = useState<SelectedLanguage | null>(initialSelectedLanguage);
  const router = useRouter();

  const changeLanguage = () => {
    selectedLanguage ? i18n.changeLanguage(selectedLanguage.code, () => router.reload()) : null;
  };

  if (!selectedLanguage) return null;
  return (
    <Listbox value={selectedLanguage} onChange={language => setSelectedLanguage(language)}>
      {({ open }) => (
        <div className="relative w-32">
          <Listbox.Button className="flex justify-between items-center w-full px-3 py-1 border border-gray-300 rounded-md shadow text-left bg-white focus:outline-none">
            <span>{selectedLanguage.name}</span>
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
              className="absolute z-10 mt-1 w-full bg-white shadow max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none"
            >
              {languages.map(language => (
                <Listbox.Option
                  key={language.code}
                  value={language}
                  className={({ active }) =>
                    classNames(active ? 'text-white bg-indigo-600' : 'text-gray-900', 'select-none relative px-4 py-2')
                  }
                >
                  {({ selected }) => (
                    <span
                      onClick={changeLanguage}
                      className={classNames('language-menu-navigation-bar', selected ? 'font-semibold' : 'font-normal')}
                    >
                      <img src={`/assets/images/flags/${language.filename}`} className="w-5 mr-2" />
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

export default LanguageSelector;
