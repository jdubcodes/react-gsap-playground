import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { TransitionProvider } from '../context/TransitionContext'
import TransitionComponent from '../components/Transition'

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          index
          element={
            <TransitionComponent>
              <h1 className='mt-40 bg-blue-500'>Home</h1>
            </TransitionComponent>
          }
        />
        <Route
          path='/page2'
          element={
            <TransitionComponent>
              <h1 className='mt-40 bg-blue-500'>Page 2</h1>
            </TransitionComponent>
          }
        />
        <Route
          path='/page3'
          element={
            <TransitionComponent>
              <h1 className='mt-40 bg-blue-500'>Page 3</h1>
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  )
}

export default Router
