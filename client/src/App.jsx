import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthProvider from './store/authStore';
import DocProvider from './store/docsStore';
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <AuthProvider>
      <Navbar />
      <Toaster containerClassName='mt-3' position='top-center' reverseOrder={false}/>
      <DocProvider>
        <Outlet />
      </DocProvider>
      <Footer />
    </AuthProvider>
  )
}

export default App
