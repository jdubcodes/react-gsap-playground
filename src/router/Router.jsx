import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { TransitionProvider } from '../context/TransitionContext'
import TransitionComponent from '../components/Transition'

// Imported views
import Pages from '../views/Pages'
import GreenSock from '../views/GreenSock'
import ScrollAnimations from '../views/ScrollAnimations'
import TextEffects from '../views/TextEffects'
import HorizontalScrolling from '../views/HorizontalScrolling'
import Parallax from '../views/Parallax'

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          index
          element={
            <TransitionComponent>
              <Pages pageName={'Home'} />
            </TransitionComponent>
          }
        />
        <Route path='/greensock' element={<GreenSock />} />
        <Route path='/scrollanimations' element={<ScrollAnimations />} />
        <Route path='/texteffects' element={<TextEffects />} />
        <Route path='/horizontalscrolling' element={<HorizontalScrolling />} />
        <Route path='/parallax' element={<Parallax />} />
        <Route
          path='/page3'
          element={
            <TransitionComponent>
              <Pages pageName={'Page 3'} />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  )
}

export default Router
