import * as React from 'react'
import { cn } from 'src/components/lib/utils'
import { Label } from './label'

function Input({
  className,
  label,
  rightIcon,
  leftIcon,
  type,
  ...props
}: React.ComponentProps<'input'> & {
  label?: string
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
}) {
  return (
    <div className='relative flex flex-col gap-2'>
      <Label htmlFor='email'>{label}</Label>
      <input
        type={type}
        data-slot='input'
        className={cn(
          'file:text-foreground placeholder:text-[#9f9f9f] placeholder:text-[14px] placeholder:font-light selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md bg-[#fff] px-12 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
          className,
        )}
        {...props}
      />
      {rightIcon && (
        <div className='absolute h-[18px] right-[10px] top-[30px] bottom-0 flex items-center justify-center pl-[8px] border-l border-[#ebebeb]'>
          {rightIcon}
        </div>
      )}
      {leftIcon && (
        <div className='absolute h-[18px] left-[10px] top-[30px] bottom-0 flex items-center justify-center pr-[8px]'>
          {leftIcon}
        </div>
      )}
    </div>
  )
}

export { Input }
