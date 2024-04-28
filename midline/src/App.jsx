import Footer from "./Components/Footer/Footer";
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import "./assets/animate.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import GoToTop from './Components/FixedButtons/GoToTop';
import FixedButtons from './Components/FixedButtons/FixedButtons';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { Suspense } from "react";


const App = () => {
  return (
    <>
      <Header />
      <ToastContainer position="top-center"/>
      <Suspense>
      <Outlet />
      </Suspense>
      <FixedButtons/>
      <GoToTop/>
      <Footer />
    </>
  )
}

export default App;
