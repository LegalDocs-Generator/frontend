import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Form98 from './pages/forms/Form98.jsx'
import NotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Form98/>
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
