import { BrowserRouter } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

import Router from './router/Router'
import MobileMenu from './components/MobileMenu'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP)

function App() {
  return (
    <>
      <BrowserRouter>
        <MobileMenu />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
