import { BrowserRouter } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

import Header from './components/Header'
import Router from './router/Router'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP)

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
