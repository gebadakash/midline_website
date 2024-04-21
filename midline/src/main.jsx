import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactPage from "./Pages/ContactPage.jsx";
import HealthInsurancePage from "./Pages/HealthInsurancePage.jsx";
import MedicareSupplement from "./Pages/MedicareSupplement.jsx";
import B2bGeneration from "./Pages/B2bGeneration.jsx";
import FinalExpense from "./Pages/FinalExpense.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import Home from "./Pages/HomePage.jsx";
import { AppProvider } from "./Components/context.jsx";
import CustomerService from "./Pages/CustomerService.jsx";
import Sales from "./Pages/Sales.jsx";
import ColdCalling from "./Pages/ColdCalling.jsx";
import AppointmentSetting from "./Pages/AppointmentSetting.jsx";


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
