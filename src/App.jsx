import './Global.css';
import { Router } from './routes/Router';
import {AuthContext, AuthProvider} from './contexts/Auth'; 
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FooterMobile } from './Components/FooterMobile/FooterMobile';
import Navbar from './Components/NavBarTop/Navbar';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <div className='container'> 
    {/* <Navbar /> */}
    <ToastContainer autoClose={5000} theme="colored" /> 
    {/* <FooterMobile /> */}
    <Router />
    </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App
