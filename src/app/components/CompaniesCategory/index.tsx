'use client'

import { useEffect, useRef, useState } from 'react'
import { OneGroupLogo, Pattern2Logo } from '@assets'
import { Company } from './components'

const CompaniesCategory = () => {
  const [hasReachedComponent, setHasReachedComponent] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        if (rect.top <= 500 && !hasReachedComponent) {
          setHasReachedComponent(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasReachedComponent])

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHasReachedComponent(true)}
      className={`relative transition-all ease-in duration-2000 mb-[100px] ${hasReachedComponent ? 'opacity-100' : 'opacity-0'}`}
    >
      <Pattern2Logo className='absolute top-0 left-0 h-[350px] w-[497px]' />
      <div className='mx-auto max-w-[1224px]'>
        <div
          className={`mb-10 transition-all duration-2000 ${hasReachedComponent ? 'translate-x-0' : 'translate-x-1/2'}`}
        >
          <div className='mb-2.5'>
            <OneGroupLogo className='w-[42px] h-[5.64px] -mb-1' />
            <div className='flex items-center'>
              <div className='w-[140px] border-b border-[#939393]'></div>
              <div className='w-1 h-1 bg-[#939393] rotate-45'></div>
              <p className='font-light text-[16px] text-[#939393] mr-2.5'>دسته‌بندی شرکت ها</p>
            </div>
          </div>
          <p className='font-regular text-[28px]'>جمله کوتاه یا یک تایتل</p>
        </div>
        <div
          className={`grid grid-cols-5 gap-6 relative z-10 transition-all duration-2000
            ${hasReachedComponent ? 'translate-y-0' : 'translate-y-40'}`}
        >
          <Company name='ترابری' />
          <Company name='مالی اعتباری' />
          <Company name='رسانه' />
          <Company name='ترابری' />
          <Company name='ترابری' />
          <Company name='ترابری' />
          <Company name='مالی اعتباری' />
          <Company name='رسانه' />
          <Company name='ترابری' />
          <Company name='ترابری' />
        </div>
      </div>
    </div>
  )
}

export default CompaniesCategory
