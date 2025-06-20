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
import Profile from './pages/Profile.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/form97",
        element: <Form97 />,
      },
      {
        path: "/form98",
        element: <Form98 />,
      },
      {
        path: "/form99",
        element: <Form99 />,
      },
      {
        path:'/profile',
        element: <Profile/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/privacy',
        element: <PrivacyPolicy/>
      },
      {
        path:'/terms',
        element: <Terms/>
      },
      {
        path: "/form100",
        element: <Form100 />,
      },
      {
        path: "/form101",
        element: <Form101 />,
      },
      {
        path: "/form102",
        element: <Form102 />,
      },
      {
        path: "/login",
        element: <AuthPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password/:resetToken",
        element: <ResetPassword />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
