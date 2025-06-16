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
import AuthPage from './pages/AuthPage.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'

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
        path:'/login',
        element: <AuthPage/>
      },
      {
        path:'/forgot-password',
        element: <ForgotPassword/>
      },
      {
        path:'/reset-password/:resetToken',
        element: <ResetPassword/>
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
