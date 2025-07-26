'use client'

import { useEffect, useRef, useState } from 'react'
import { Pattern3Logo } from '@assets'
import { Companies } from './components'

const CompaniesIntroduction = () => {
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
      className={`relative transition-all ease-in duration-2000 mb-[80px] ${hasReachedComponent ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='mx-auto max-w-[1224px] flex items-center justify-center gap-[35px]'>
        <div
          className={`mb-[41px] transition-all duration-2000 ${hasReachedComponent ? 'translate-x-0' : 'translate-x-1/2'}`}
        >
          <Pattern3Logo className='w-[272px] h-[993px]' />
        </div>
        <div
          className={`flex-1 h-[952px] mt-[40px] transition-all rounded-[40px] overflow-scroll bg-[#f5f5f5] p-6 duration-2000 ${hasReachedComponent ? 'translate-x-0' : '-translate-x-1/2'}`}
        >
          <Companies title='ترابری' />
          <Companies title='مالی اعتباری' />
          <Companies title='ترابری' />
          <Companies title='مالی اعتباری' />
          <Companies title='ترابری' />
          <Companies title='مالی اعتباری' />
        </div>
      </div>
    </div>
  )
}

export default CompaniesIntroduction
