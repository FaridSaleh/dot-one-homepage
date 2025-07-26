import { useRef, useState, useEffect } from 'react'
import { ArrowLeftBulkIcon } from '@assets'
import CompanyProps from './type'

const Company = ({ name }: CompanyProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setContainerWidth(rect.width)
    }
  }, [])

  return (
    <div
      className='w-[226px] h-[60px] group relative flex items-center justify-center bg-[#141414] py-3 rounded-[16px] cursor-pointer transition-all duration-500 hover:bg-[#f5f5f5]'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        ref={containerRef}
        className='absolute font-light text-[24px] text-[#fff] transition-all duration-500 group-hover:text-[#000]'
        style={{
          transform: isHovered
            ? `translateX(${(226 - containerWidth) / 2 - 16}px)`
            : 'translateX(0)',
        }}
      >
        {name}
      </p>
      <div
        className='absolute w-10 h-10 flex items-center justify-center rounded-[12px] bg-[#fff] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-[#141414]'
        style={{
          transform: isHovered ? `translateX(-${(226 - 40) / 2 - 8}px)` : 'translateX(0)',
        }}
      >
        <ArrowLeftBulkIcon className='w-[19px] h-4 text-[#141414] group-hover:text-[#fff]' />
      </div>
    </div>
  )
}

export default Company
