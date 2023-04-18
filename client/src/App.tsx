import './App.css'
import './pages/Dashboard'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* <Route index element={<Home />}/> */}
      <Route path="home" element={<Home />}/>
      <Route path="dashboard" element={<Dashboard />}/>
      <Route path="feed" element={<Feed />}/>
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
