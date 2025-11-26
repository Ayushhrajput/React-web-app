import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HeaderBox from './components/headerBox.jsx'
import HomePage from './components/HomePage.jsx'
import About from './components/About.jsx'
import Stuff from './components/Stuff.jsx'
import Gracie, { viewCountLoader } from './components/Gracie.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='stuff/:id' element={<Stuff/>}/>
      <Route
      loader = {viewCountLoader}
      path='gracie' 
      element={<Gracie/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
