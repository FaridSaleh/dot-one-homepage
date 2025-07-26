import * as React from 'react'
import { cn } from 'src/components/lib/utils'
import { Label } from './label'

function Textarea({
  className,
  label,
  rightIcon,
  ...props
}: React.ComponentProps<'textarea'> & {
  label?: string
  rightIcon?: React.ReactNode
}) {
  return (
    <div className='relative flex flex-col gap-2'>
      <Label htmlFor='email'>{label}</Label>
      <textarea
        data-slot='textarea'
        className={cn(
          'placeholder:text-[#9f9f9f] placeholder:text-[14px] placeholder:font-light focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-[#fff] px-12 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        {...props}
      />
      {rightIcon && (
        <div className='absolute h-[18px] right-[10px] top-[30px] bottom-0 flex items-center justify-center pl-[8px] border-l border-[#ebebeb]'>
          {rightIcon}
        </div>
      )}
    </div>
  )
}

export { Textarea }
