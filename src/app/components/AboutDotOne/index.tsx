'use client'

import { useEffect, useRef, useState } from 'react'
import { Pattern1Logo } from '@assets'

const AboutDotOne = () => {
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
      className={`transition-all ease-in duration-2000 mt-[43px] mb-[86px] ${hasReachedComponent ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='mx-auto max-w-[1224px]'>
        <div className='flex gap-[96px] items-start overflow-hidden'>
          <div
            className={`shrink-0 transition-all duration-2000
        ${hasReachedComponent ? 'translate-x-0' : 'translate-x-10/12'}`}
          >
            <p className='font-regular text-[34px]'>گروه</p>
            <p className='font-regular text-[34px]'>ارزش‌آفرین ‌وان</p>
          </div>
          <p
            className={`font-regular text-[14px] text-justify transition-all duration-2000
        ${hasReachedComponent ? 'translate-x-0' : '-translate-x-10/12'}`}
          >
            وان، یک گروه اقتصادی ارزش آفرین است (آوان) به واسطه سرمایه گذاری هوشمندانه و ساماندهی
            خردمندانه، زیرساخت های لازم برای آبادانی و سودرسانی همگانی را فراهم می آورد، تا کسانی که
            پویا و کوشا هستند، مجال زایش و رویش بیابند.گروه ارزش‌آفرین وان یک سازمان دوراندیش است که
            با شعار»آسایش برای همگان« نقشی محوری در زمینه‌های کلیدی مانند حمل و نقل، پولی-مالی،
            سرمایه‌گذاری، کارآفرینی، توسعه تجارت بین‌المللی، رسانه، فناوری و ارتباطات ایفا خواهد
            نمود.
          </p>
        </div>
        <div
          className={`relative bg-[#f5f5f5] h-[140px] flex items-center justify-center rounded-[24px] mt-[59px] transition-all duration-2000
        ${hasReachedComponent ? 'translate-y-0' : 'translate-y-40'}`}
        >
          <Pattern1Logo className='absolute bottom-0 left-0 w-full h-[102px]' />
          <p className='font-regular text-[16px] text-center'>
            ارزندگی، قطب نمای ما در ‌وان است و هر فعالیتی به سمت ارزش‌آفرینی و افزودن ارزشی به جهان
            امروز ؛ چرا که باور داریم:
            <br />
            «فردا، فرزند امروز است.»
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutDotOne
