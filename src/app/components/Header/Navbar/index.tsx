'use client'

import { useState } from 'react'
import { ArrowDownLinearIcon, DotOneLogoBlackLogo } from '@assets'

const languages = [
  {
    id: 1,
    name: 'فارسی',
    value: 'فا',
  },
  {
    id: 2,
    name: 'English',
    value: 'En',
  },
  {
    id: 3,
    name: 'Arabic',
    value: 'Ar',
  },
  {
    id: 4,
    name: 'Russian',
    value: 'Ru',
  },
  {
    id: 5,
    name: 'Turkish',
    value: 'Tr',
  },
]

const Navbar = () => {
  const [language, setLanguage] = useState(languages[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLanguageSelect = (selectedLanguage: (typeof languages)[0]) => {
    setLanguage(selectedLanguage)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleDropdown()
    }
  }

  const handleLanguageKeyDown = (
    event: React.KeyboardEvent,
    selectedLanguage: (typeof languages)[0],
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleLanguageSelect(selectedLanguage)
    }
  }

  return (
    <div className='flex items-center justify-between pt-6'>
      <DotOneLogoBlackLogo className='w-16 h-12' />
      <div className='flex items-center gap-[54px]'>
        <p className='text-[#fff] cursor-pointer'>درباره ما</p>
        <p className='text-[#fff] cursor-pointer'>وبلاگ</p>
        <p className='text-[#fff] cursor-pointer'>معرفی شرکت ها</p>
        <p className='text-[#fff] cursor-pointer'>تماس با ما</p>
        <p className='text-[#fff] cursor-pointer'>موقعیت های شغلی</p>
      </div>
      <div className='relative'>
        <button
          className={`w-[88px] h-8 group bg-[#f5f5f5] flex items-center justify-evenly gap-3.5 hover:bg-[#5d5d5d] cursor-pointer transition-all duration-500 ${
            isDropdownOpen ? 'rounded-t-xl' : 'rounded-xl'
          }`}
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          aria-expanded={isDropdownOpen}
          aria-haspopup='listbox'
          aria-label='Select language'
        >
          <p className='text-[#000] group-hover:text-[#fff] transition-all duration-500'>
            {language.value}
          </p>
          <ArrowDownLinearIcon className='w-5 h-5 text-[#000] group-hover:text-[#fff] transition-all duration-500' />
        </button>

        <div
          className={`absolute top-full right-0 bg-white rounded-b-xl shadow-lg border border-gray-200 w-[88px] z-50 bg-[#fff] transform transition-all duration-500 ease-out ${
            isDropdownOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}
          role='listbox'
          aria-label='Language options'
        >
          {languages.map(lang => (
            <button
              key={lang.id}
              className={`flex items-center justify-evenly w-full cursor-pointer py-2 ${
                language.id === lang.id ? 'bg-[#f5f5f5]' : ''
              } ${lang.id === 1 ? 'rounded-t-xl' : ''} ${lang.id === languages.length ? 'rounded-b-xl' : ''}`}
              onClick={() => handleLanguageSelect(lang)}
              onKeyDown={e => handleLanguageKeyDown(e, lang)}
              role='option'
              aria-selected={language.id === lang.id}
            >
              <p className='text-gray-800 font-regular text-[16px]'>{lang.value}</p>
              <p className='text-gray-800 font-light text-[12px]'>{lang.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
