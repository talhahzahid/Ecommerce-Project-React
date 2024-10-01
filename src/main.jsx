import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Notfind from './Pages/Notfind.jsx'
import Allproduct from './Pages/Allproduct.jsx'

const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children: [
    {
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"allproduct",
      element:<Allproduct/>
    },
    {
      path:"*",
      element:<Notfind/>
    },
  ]
}])

createRoot(document.getElementById('root')).render(

<RouterProvider router={router}>
<App />
</RouterProvider>
)
