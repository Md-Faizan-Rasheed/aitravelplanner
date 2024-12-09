import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreateTrip from './create-trip'
import Header from './components/custom/Header'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './view-trip/[tripId]'
import Mytrips from './my-trips'

const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
  {
        path: '/view-trip/:tripId',
        element: <Viewtrip/>,
  },
  {
    path:'my-trips',
    element:<Mytrips/>
  }


])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GoogleOAuthProvider clientId={'956714062754-239ck0dg5g8gd0vlir9ta817rjv7krao.apps.googleusercontent.com'}>
     <Header/>
     <RouterProvider router={router} />
      </GoogleOAuthProvider>;


  </StrictMode>,
)
