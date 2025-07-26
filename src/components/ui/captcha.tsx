import * as React from 'react'
import { CaptchaIcon } from '@assets'
import { cn } from 'src/components/lib/utils'

interface CaptchaProps {
  onCaptchaChange?: (isValid: boolean) => void
  className?: string
}

const Captcha = React.forwardRef<HTMLDivElement, CaptchaProps>(
  ({ className, onCaptchaChange }, ref) => {
    const [isChecked, setIsChecked] = React.useState(false)
    const [isVerified, setIsVerified] = React.useState(false)

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked
      setIsChecked(checked)

      if (checked) {
        // Simulate a brief delay to make it feel more realistic
        setTimeout(() => {
          setIsVerified(true)
          onCaptchaChange?.(true)
        }, 500)
      } else {
        setIsVerified(false)
        onCaptchaChange?.(false)
      }
    }

    return (
      <div className={cn('relative flex flex-col gap-2', className)} ref={ref}>
        <div className='flex items-center gap-3 p-3 bg-[#fff] border border-[#ebebeb] rounded-md'>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='captcha-checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
            />
            <label htmlFor='captcha-checkbox' className='text-sm text-[#333] cursor-pointer'>
              من ربات نیستم
            </label>
          </div>
          <CaptchaIcon className='w-[56px] h-[59px]' />
          {isVerified && (
            <div className='flex items-center gap-1 text-green-600'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='text-xs'>تایید شد</span>
            </div>
          )}
        </div>
      </div>
    )
  },
)

Captcha.displayName = 'Captcha'

export { Captcha }
