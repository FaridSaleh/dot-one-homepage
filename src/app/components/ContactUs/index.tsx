'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowDownLinearIcon,
  CallLinearIcon,
  CategoryLinearIcon,
  EmailIcon,
  LinkedinIcon,
  OneGroupLogo,
  Pattern4Icon,
  Pattern5Icon,
  PhoneIcon,
  ProfileLinearIcon,
  SmsLinearIcon,
  SmsTrackingLinearIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from '@assets'
import { Button, Input, Textarea, Captcha } from '@components'

const ContactUs = () => {
  const [hasReachedComponent, setHasReachedComponent] = useState(false)
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
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
      className={`relative transition-all ease-in duration-1000 mb-[167px] ${hasReachedComponent ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='mx-auto max-w-[1224px]'>
        <div className='relative grid grid-cols-2 gap-6'>
          <div
            className={`relative z-10 transition-all duration-1000 ${hasReachedComponent ? 'translate-x-0' : 'translate-x-1/2'}`}
          >
            <div className='mb-[16px] '>
              <div className='mb-2.5'>
                <OneGroupLogo className='w-[42px] h-[5.64px] -mb-1' />
                <div className='flex items-center'>
                  <div className='w-[140px] border-b border-[#939393]'></div>
                  <div className='w-1 h-1 bg-[#939393] rotate-45'></div>
                  <p className='font-light text-[16px] text-[#939393] mr-2.5'>تماس با ما</p>
                </div>
              </div>
              <p className='font-regular text-[28px]'>با ما در تماس باشید. </p>
            </div>
            <p className='font-regular text-[14px] text-[#000] mb-[24px]'>
              گفت‌وگو، آغاز هر پیوند است. اگر پرسشی دارید، مایلید بیشتر درباره ما بدانید یا ایده‌ای
              در ذهن دارید، خوشحال می‌شویم از شما بشنویم.
            </p>
            <div className='p-[40px] bg-[#f5f5f5] rounded-[30px]'>
              <div className='grid grid-cols-2 gap-[20px]'>
                <Input
                  label='نام/نام شرکت:'
                  placeholder='نام'
                  rightIcon={<ProfileLinearIcon className='w-[18px] h-[18px] text-[#9f9f9f]' />}
                />
                <Input
                  label='دسته بندی:'
                  placeholder='دسته بندی را انتخاب کنید...'
                  rightIcon={<CategoryLinearIcon className='w-[18px] h-[18px] text-[#9f9f9f]' />}
                  leftIcon={<ArrowDownLinearIcon className='w-[18px] h-[18px] text-[#9f9f9f]' />}
                />
                <Input
                  label='شماره تماس:'
                  placeholder='شماره تماس'
                  rightIcon={<CallLinearIcon className='w-[18px] h-[18px] text-[#9f9f9f]' />}
                />
                <Input
                  label='ایمیل:'
                  placeholder='ایمیل'
                  rightIcon={<SmsLinearIcon className='w-[18px] h-[18px] text-[#9f9f9f]' />}
                />
              </div>
              <div className='mt-[20px]'>
                <Textarea
                  label='درخواست:'
                  className='!h-28'
                  placeholder='درخواست خود را بنویسید...'
                  rightIcon={<SmsTrackingLinearIcon className='w-[18px] h-[18px] text-[#9f9f9f]' />}
                />
              </div>
              <div className='mt-[20px] flex items-center justify-between gap-2'>
                <Captcha onCaptchaChange={setIsCaptchaValid} />
                <Button size='lg' disabled={!isCaptchaValid}>
                  ارسال
                </Button>
              </div>
            </div>
          </div>
          <div
            className={`relative z-10 flex flex-col justify-between items-end transition-all duration-1000 ${hasReachedComponent ? 'translate-x-0' : '-translate-x-1/2'}`}
          >
            <Pattern4Icon className='w-[482px] h-[427px]' />
            <div className='flex flex-row-reverse items-center gap-2'>
              <LinkedinIcon className='w-[40px] h-[40px]' />
              <TwitterIcon className='w-[40px] h-[40px]' />
              <EmailIcon className='w-[40px] h-[40px]' />
              <PhoneIcon className='w-[40px] h-[40px]' />
              <TelegramIcon className='w-[40px] h-[40px]' />
              <WhatsappIcon className='w-[40px] h-[40px]' />
            </div>
          </div>
          <Pattern5Icon
            className={`w-full h-[286px] absolute -bottom-[254px] left-0 transition-all duration-1000 ${hasReachedComponent ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
