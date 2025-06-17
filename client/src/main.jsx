import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form98 from './pages/forms/Form98.jsx'
import NotFound from './pages/PageNotFound.jsx'
import Form99 from './pages/forms/Form99.jsx'
import Form100 from './pages/forms/Form100.jsx'
import Form101 from './pages/forms/Form101.jsx'
import Form102 from './pages/forms/Form102.jsx'
import Form97 from './pages/forms/Form97.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
     
       {
        path:'/',
        element: <Form97/>
      },
       {
        path:'/form98',
        element: <Form98/>
      },
       {
        path:'/form99',
        element: <Form99/>
      },
       {
        path:'/form100',
        element: <Form100/>
      },
      {
        path:'/form101',
        element: <Form101/>
      },
      {
        path:'/form102',
        element: <Form102/>
      },

      {
        path:'*',
        element: <NotFound/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
