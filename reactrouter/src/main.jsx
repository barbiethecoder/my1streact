import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import footer from './components/Footer/footer.jsx'
import header from './components/Header/header.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [{
    path : '',
    element:<Home/>
  }, 
  {
    path:'about',
    element: <about/>
  }, 
  { 
    path: "contact",
    element: <Contact />
   }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
