import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppProvider } from "./Components/Context/context.jsx"
const Home = lazy(()=> import("./Pages/HomePage.jsx"));
const ContactPage = lazy(()=> import ("./Pages/ContactPage.jsx"));
const AboutPage = lazy(()=> import ("./Pages/AboutPage.jsx"));
const HealthInsurancePage = lazy(()=> import("./Pages/HealthInsurancePage.jsx"));
const FinalExpense = lazy(()=> import("./Pages/FinalExpense.jsx"));
const MedicareSupplement = lazy(()=> import ("./Pages/MedicareSupplement.jsx"));
const B2bGeneration = lazy(()=> import("./Pages/B2bGeneration.jsx"));
const CustomerService = lazy(()=> import("./Pages/CustomerService.jsx"));
const Sales = lazy(()=> import("./Pages/Sales.jsx"));
const ColdCalling = lazy(()=> import("./Pages/ColdCalling.jsx"));
const AppointmentSetting = lazy(()=> import("./Pages/AppointmentSetting.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "/HealthInsurance",
        element: <HealthInsurancePage />,
      },

      {
        path: "/FinalExpense",
        element: <FinalExpense />,
      },

      {
        path: "/MedicareSupplement",
        element: <MedicareSupplement />,
      },

      {
        path: "/B2bGeneration",
        element: <B2bGeneration />,
      },

      {
        path: "/customerservice",
        element: <CustomerService />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "/ColdCalling",
        element: <ColdCalling />,
      },
      {
        path: "/appointmentSetting",
        element: <AppointmentSetting />,
      },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);
