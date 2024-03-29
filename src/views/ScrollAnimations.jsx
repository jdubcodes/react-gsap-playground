import { useRef } from 'react'
// Imported styles
import '../styles/scrollAnimations.css'
// Imported images
import art1 from '../assets/art1.jpg'
import art2 from '../assets/art2.jpg'
import art3 from '../assets/art3.jpg'
import art4 from '../assets/art4.jpg'
// Imported GSAP utilities
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ScrollAnimations = () => {
  useGSAP(() => {})

  return (
    <>
      <section className='intro text-primary'>
        <h1>scroll down</h1>
      </section>
      <section className='gallery'>
        <ul>
          <li data-depth='0.10'>
            <a href='#'>
              <img src={art1} alt='Syntholtic' />
              <div className='img'></div>

              <div className='border'></div>

              <div className='info'>
                <span>01</span>
                <p>Syntholtic</p>
              </div>
            </a>
          </li>
          <li data-depth='0.20'>
            <a href='#'>
              <img src={art2} alt='Bumblebee' />

              <div className='border'></div>

              <div className='info'>
                <span>02</span>
                <p>Bumblebee</p>
              </div>
            </a>
          </li>
          <li data-depth='0.30'>
            <a href='#'>
              <img src={art3} alt='Smorg' />

              <div className='border'></div>

              <div className='info'>
                <span>03</span>
                <p>Smorg</p>
              </div>
            </a>
          </li>
          <li data-depth='0.40'>
            <a href='#'>
              <img src={art4} alt='Violeta' />

              <div className='border'></div>

              <div className='info'>
                <span>04</span>
                <p>Violeta</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section className='intro text-primary'>
        <h1>scroll up</h1>
      </section>
    </>
  )
}

export default ScrollAnimations
