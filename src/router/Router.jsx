import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { TransitionProvider } from '../context/TransitionContext'
import TransitionComponent from '../components/Transition'

// Imported pages
import Pages from '../views/Pages'
import FromAndToMethod from '../views/FromAndToMethod'

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
        <Route path='/fromtomethod' element={<FromAndToMethod />} />
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
