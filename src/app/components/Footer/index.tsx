'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  CallCallingLinearIcon,
  DotOneLogoWhiteLogo,
  LocationLinearIcon,
  SmsLinearIcon,
} from '@assets'

const Footer = () => {
  const [hasReachedComponent, setHasReachedComponent] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        if (rect.top <= 1200 && !hasReachedComponent) {
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
      className={`transition-all duration-1000
        ${hasReachedComponent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1/2'}
      `}
    >
      <div className='mx-auto max-w-[1224px]'>
        <div className='w-full flex items-center justify-center'>
          <DotOneLogoWhiteLogo className='w-[196px] h-[147px] mb-[45px]' />
        </div>
        <div className='grid grid-cols-3 mb-[59px]'>
          <div className='flex flex-col justify-center items-center gap-[16px]'>
            <CallCallingLinearIcon className='w-[40px] h-[40px]' />
            <p className='font-regular text-[16px] text-[#000]'>021-42101000</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-[16px]'>
            <LocationLinearIcon className='w-[40px] h-[40px]' />
            <p className='font-regular text-[16px] text-[#000]'>تهران، جهان کودک، برج دات وان</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-[16px]'>
            <SmsLinearIcon className='w-[40px] h-[40px]' />
            <p className='font-regular text-[16px] text-[#000]'>info1@one-holding.ir</p>
          </div>
        </div>
        <div className='flex justify-around mb-[60px]'>
          <div className='flex flex-col justify-center gap-[4px]'>
            <p className='font-semibold text-[14px] text-[#000]'>دسترسی سریع</p>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              تماس با ما
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              درباره ما
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              شرکت ها
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              استخدام
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              اخبار
            </Link>
          </div>

          <div className='flex flex-col justify-center gap-[4px]'>
            <p className='font-semibold text-[14px] text-[#000]'>لینک ها</p>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
          </div>

          <div className='flex flex-col justify-center gap-[4px]'>
            <p className='font-semibold text-[14px] text-[#000]'>لینک ها</p>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
          </div>

          <div className='flex flex-col justify-center gap-[4px]'>
            <p className='font-semibold text-[14px] text-[#000]'>لینک ها</p>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
            <Link href='/' className='font-regular text-[14px] text-[#000]'>
              www.link.com
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center gap-[18px] mb-[60px]'>
          <div className='flex-1 border-t border-[#000]'></div>
          <p className='font-light text-[14px] text-[#000]'>
            هر واژه، هر تصویر، هر پیوند، متعلق به گروه ارزش آفرینی وان است @
          </p>
          <div className='flex-1 border-t border-[#000]'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
