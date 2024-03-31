import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
// Imported GSAP utils
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// Imported custom components
import MobileButton from './MobileButton'
// Imported constants
import menuItems from '../constants/menuItems'

gsap.registerPlugin(useGSAP)

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const tl = useRef()
  const navRef = useRef()

  const handleClick = () => {
    tl.current.reversed(!tl.current.reversed())
    setOpen(!open)
  }

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .to(navRef.current, {
        clipPath: 'circle(135.4% at 96% 5%)',
        duration: 1,
        ease: 'sine.out',
      })
      .reverse()
  })

  return (
    <>
      <MobileButton handleClick={handleClick} isOpen={open} />
      <div
        ref={navRef}
        className='h-screen w-screen fixed p-20 flex flex-col justify-around items-center gap-8 bg-dark z-40 menu-clip'
      >
        <a
          className='brand'
          href='https://gsap.com'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='greensock-icon'
            src='https://gsap.com/_img/codepen/gsap-white.svg'
            width='100'
          />
        </a>
        <nav>
          <ul className='flex flex-col gap-8 text-primary text-center font-bebas text-[2vw]'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.route} onClick={handleClick}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
