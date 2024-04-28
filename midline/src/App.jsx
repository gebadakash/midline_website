import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import React, { Suspense } from "react";
const Header = React.lazy(() => import("./Components/Header/Header"));
const GoToTop = React.lazy(()=> import ("./Components/FixedButtons/GoToTop"));
const FixedButtons  = React.lazy(()=> import ("./Components/FixedButtons/FixedButtons"));

const App = () => {
  return (
    <>
      <Suspense>
        <Header />
        <ToastContainer position="top-center" />
        <Outlet />
        <FixedButtons />
        <GoToTop />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
