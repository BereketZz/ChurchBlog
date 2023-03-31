import { useState } from 'react'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Header from './components/Header'
import Single from './pages/Single'
import Write from './pages/Write'
import Footer from './components/Footer';
import Home from './pages/Home';



const Layout= ()=>{
  return(
  <>
  <Header />
  <Outlet />
  <Footer/>

  </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
     element:<Home/>

      },
      {
      path:'/single',
      element:<Single />
      },
      // {
      //   path:"/posts/:id",
      //   element:<Single />
      // },
      {
        path:"/write",
        element:<Write />
      }
     

    ]
     
    
    
     },

   
     

  
  
  ])
function App() {
 
  

  return (
    <div className="App">
  <RouterProvider router={router}/>
    
    </div>
  )
}

export default App
