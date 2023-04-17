import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './pages/Dashboard'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* <Route index element={<Home />}/> */}
      <Route path="dashboard" element={<Dashboard />}/>
    </Route>), {
      basename: ""
    }
)

function App() {
  
  return (
    <>
      <div className="App">
          <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
