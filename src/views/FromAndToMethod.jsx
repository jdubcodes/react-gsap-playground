import { useRef } from 'react'

// Imported GSAP utilities
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

const FromAndToMethod = () => {
  const h1Ref = useRef()
  const progressRef = useRef()

  useGSAP(() => {
    gsap.to(progressRef.current, {
      width: '100%',
    })
  })

  return (
    <div className='flex justify-center items-center h-vh bg-dark'>
      <h1
        ref={h1Ref}
        className='text-[30rem] text-center opacity-[0.3] uppercase font-bebas text-gray-600'
      >
        Boring
      </h1>
      <div
        ref={progressRef}
        className='bg-[#A1BCFF] h-[3px] w-0 absolute top-[50%]'
      ></div>
    </div>
  )
}

export default FromAndToMethod
