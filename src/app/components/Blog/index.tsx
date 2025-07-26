'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeftBulkIcon,
  CalendarEditLinearIcon,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  OneGroupLogo,
} from '@assets'

const Blog = () => {
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
      <div className='mx-auto max-w-[1224px]'>
        <div
          className={`mb-10 transition-all duration-2000 ${hasReachedComponent ? 'translate-x-0' : 'translate-x-1/2'}`}
        >
          <div className='mb-2.5'>
            <OneGroupLogo className='w-[42px] h-[5.64px] -mb-1' />
            <div className='flex items-center'>
              <div className='w-[140px] border-b border-[#939393]'></div>
              <div className='w-1 h-1 bg-[#939393] rotate-45'></div>
              <p className='font-light text-[16px] text-[#939393] mr-2.5'>وبلاگ</p>
            </div>
          </div>
          <p className='font-regular text-[28px]'>جمله کوتاه یا یک تایتل</p>
        </div>
        <div className='relative grid grid-cols-6 gap-6'>
          {/* First Blog */}
          <div
            className={`h-[260px] relative col-span-3 rounded-[24px] bg-[#141414] p-6 transition-all duration-2000
            ${hasReachedComponent ? 'translate-x-0' : 'translate-x-1/2'}`}
          >
            <div className='flex items-center gap-2.5 mb-6'>
              <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                <p className='font-light text-[10px] text-[#000]'>هواپیما</p>
              </div>
              <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                <p className='font-light text-[10px] text-[#000]'>سفر</p>
              </div>
              <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                <p className='font-light text-[10px] text-[#000]'>فرودگاه</p>
              </div>
              <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                <p className='font-light text-[10px] text-[#000]'>گردشگری</p>
              </div>
            </div>
            <p className='text-[#fff] text-[18px] font-semibold mb-2'>لورم ایپسوم متن ساختگی!</p>
            <p className='text-[#fff] text-[14px] font-light relative z-10 max-w-[320px] text-justify'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
            </p>
            <Image
              src={Image1}
              className='absolute top-[17px] left-[10px]'
              alt='Image1'
              height={232}
            />
            <div className='absolute left-[28px] bottom-[28px] w-10 h-10 flex items-center justify-center rounded-[12px] bg-[#fff]'>
              <ArrowLeftBulkIcon className='w-[19px] h-4 text-[#141414]' />
            </div>
          </div>

          {/* Second Blog */}
          <div
            className={`h-[260px] relative col-span-3 rounded-[24px] bg-[#f5f5f5] p-6 transition-all duration-2000
            ${hasReachedComponent ? 'translate-x-0' : '-translate-x-1/2'}`}
          >
            <div className='flex items-center gap-2.5 mb-6'>
              <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                <p className='font-light text-[10px] text-[#000]'>هواپیما</p>
              </div>
              <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                <p className='font-light text-[10px] text-[#000]'>سفر</p>
              </div>
              <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                <p className='font-light text-[10px] text-[#000]'>فرودگاه</p>
              </div>
              <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                <p className='font-light text-[10px] text-[#000]'>گردشگری</p>
              </div>
            </div>
            <p className='text-[#000] text-[18px] font-semibold relative z-10 max-w-[320px] mb-2'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
            <p className='text-[#000] text-[14px] font-light relative z-10 max-w-[320px] text-justify mb-4'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه...
            </p>
            <div className='flex items-center gap-1'>
              <CalendarEditLinearIcon className='w-[14px] h-[14px] text-[#000]' />
              <p className='text-[#000] text-[10px] font-light'>24 فروردین 1404</p>
            </div>
            <Image
              src={Image2}
              className='absolute top-[17px] left-[10px]'
              alt='Image2'
              height={232}
            />
            <div className='absolute left-[28px] bottom-[28px] w-10 h-10 flex items-center justify-center rounded-[12px] bg-[#fff]'>
              <ArrowLeftBulkIcon className='w-[19px] h-4 text-[#141414]' />
            </div>
          </div>

          {/* Third Blog */}
          <div
            className={`h-[260px] relative col-span-2 rounded-[24px] bg-[#f5f5f5] p-6 transition-all duration-2000
            ${hasReachedComponent ? 'translate-x-0' : 'translate-x-1/2'}`}
          >
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-2.5'>
                <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                  <p className='font-light text-[10px] text-[#000]'>سینما</p>
                </div>
                <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                  <p className='font-light text-[10px] text-[#000]'>لحظه تی وی</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <CalendarEditLinearIcon className='w-[14px] h-[14px] text-[#000]' />
                <p className='text-[#000] text-[10px] font-light'>24 فروردین 1404</p>
              </div>
            </div>
            <p className='text-[#000] text-[18px] font-semibold mb-2 relative z-10'>
              لورم ایپسوم متن ساختگی!
            </p>
            <Image
              src={Image3}
              className='absolute bottom-[17px] left-[10px]'
              alt='Image3'
              height={171}
            />
            <div className='absolute left-[28px] bottom-[28px] w-10 h-10 flex items-center justify-center rounded-[12px] bg-[#fff]'>
              <ArrowLeftBulkIcon className='w-[19px] h-4 text-[#141414]' />
            </div>
          </div>

          {/* Fourth Blog */}
          <div
            className={`h-[260px] relative col-span-2 rounded-[24px] bg-[#f5f5f5] p-6 transition-all duration-2000
            ${hasReachedComponent ? 'translate-y-0' : 'translate-y-40'}`}
          >
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-2.5'>
                <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                  <p className='font-light text-[10px] text-[#000]'>تاکسی</p>
                </div>
                <div className='bg-[#fff] rounded-[10px] px-4 py-[5px]'>
                  <p className='font-light text-[10px] text-[#000]'>دات وان سفر</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <CalendarEditLinearIcon className='w-[14px] h-[14px] text-[#000]' />
                <p className='text-[#000] text-[10px] font-light'>24 فروردین 1404</p>
              </div>
            </div>
            <p className='text-[#000] text-[18px] font-semibold mb-2 relative z-10'>
              لورم ایپسوم متن ساختگی!
            </p>
            <Image
              src={Image4}
              className='absolute bottom-[17px] left-[10px]'
              alt='Image4'
              height={171}
            />
            <div className='absolute left-[28px] bottom-[28px] w-10 h-10 flex items-center justify-center rounded-[12px] bg-[#fff]'>
              <ArrowLeftBulkIcon className='w-[19px] h-4 text-[#141414]' />
            </div>
          </div>

          {/* Fifth Blog */}
          <div
            className={`h-[260px] relative col-span-2 rounded-[24px] bg-[#f5f5f5] transition-all duration-2000
            ${hasReachedComponent ? 'translate-x-0' : '-translate-x-1/2'}`}
          >
            <div className='flex items-center justify-between mt-[48px] mr-[47px] ml-[24px]'>
              <p className='text-[#000] text-[18px] font-semibold relative z-10 max-w-[118px]'>
                مشاهده اخبار و مقالات بیشتر
              </p>
              <div className='w-16 h-16 flex items-center justify-center rounded-[16px] bg-[#fff]'>
                <ArrowLeftBulkIcon className='w-[25.26px] h-[30px] text-[#141414]' />
              </div>
            </div>
            <Image src={Image5} className='absolute bottom-10 left-6' alt='Image5' height={80} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
