'use client'

import { useEffect, useState } from 'react'
import { PlayCircleBulkIcon } from '@assets'
import Navbar from './Navbar'

const Header = () => {
  const [hasReachedComponent, setHasReachedComponent] = useState(false)

  useEffect(() => {
    setHasReachedComponent(true)
  }, [hasReachedComponent])

  return (
    <div
      className={`
        bg-[#000]
        transition-all duration-1000
        ${hasReachedComponent ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-20'}
      `}
    >
      <div className='mx-auto max-w-[1224px]'>
        <Navbar />
        <div className='h-[565px] w-full flex items-center justify-center'>
          <div className='w-[86px] h-[86px] rounded-full bg-[#fff] flex items-center justify-center cursor-pointer'>
            <PlayCircleBulkIcon className='w-[62px] h-[62px] text-[#000]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
