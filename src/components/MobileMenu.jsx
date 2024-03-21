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
  const menu = useRef()
  const navRef = useRef()

  const handleClick = () => {
    tl.current.reversed(!tl.current.reversed())
    setOpen(!open)
  }

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .to(navRef.current, { y: 0, duration: 1.2, ease: 'sine.out' })
      .reverse()
  })

  return (
    <>
      <MobileButton handleClick={handleClick} isOpen={open} />
      <div
        ref={navRef}
        className='h-screen w-screen fixed p-20 flex flex-col justify-around items-center gap-8 bg-dark -translate-y-[110%] z-40'
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
          <ul className='flex flex-col gap-8 text-menu-item text-center font-bebas text-[2vw]'>
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
