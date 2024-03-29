import { useRef } from 'react'

// Imported GSAP utilities
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

const reload = () => {
  window.location.reload()
}

const GreenSock = () => {
  const h1Ref = useRef()
  const progressRef = useRef()
  const tl = useRef()

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .to(progressRef.current, {
        width: '100%',
        duration: 2,
        ease: 'power4.out',
      })
      .from(
        h1Ref.current,
        {
          y: -650,
          duration: 2.5,
          ease: 'elastic.out(1, 0.2)',
        },
        '-=1'
      )
      .to(progressRef.current, {
        height: '100%',
        top: 0,
        duration: 1,
      })
      .to(progressRef.current, {
        opacity: 0,
        duration: 1.75,
      })
      .to(progressRef.current, {
        visibility: 'hidden',
      })
      .to(
        h1Ref.current,
        {
          y: -400,
          x: -500,
          duration: 1,
          fontSize: '2rem',
        },
        '-=0.5'
      )
  })

  return (
    <div className='flex justify-center items-center h-screen bg-dark'>
      <h1
        ref={h1Ref}
        className='text-[30rem] text-center opacity-[0.3] uppercase font-bebas text-gray-600'
      >
        Gsap
      </h1>
      <div
        ref={progressRef}
        className='bg-[#70ddf0] h-[3px] w-0 absolute left-0 top-[50%]'
      ></div>
      <button
        className='absolute bottom-10 right-50 text-white'
        onClick={reload}
      >
        Replay
      </button>
    </div>
  )
}

export default GreenSock
