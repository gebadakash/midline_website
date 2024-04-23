import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import "./assets/animate.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import GoToTop from './Components/GoToTop';
import FixedButtons from './Components/FixedButtons';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import TopBar from "./Components/TopBar";
import "./App.css";


const App = () => {
  return (
    <>
      {/* <TopBar/> */}
      <Header />
      <ToastContainer position="top-center"/>
      <Outlet />
      <FixedButtons/>
      <GoToTop/>
      <Footer />
    </>
  )
}

export default App;
