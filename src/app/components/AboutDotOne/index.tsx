'use client'

import { useEffect, useRef, useState } from 'react'

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
      className={`h-[2000px] transition-all duration-2000 ${hasReachedComponent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className='mx-auto max-w-[1224px]'>AboutDotOne</div>
    </div>
  )
}

export default AboutDotOne
