import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex justify-between px-[20%] py-8 bg-black'>
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
        <ul className='flex gap-8 text-white'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page2'>Page 2</Link>
          </li>
          <li>
            <Link to='/page3'>Page 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
