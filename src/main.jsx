import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Volunteer from "./Pages/Volunteer.jsx";
import OurWork from './Pages/OurWork.jsx';
import Donate from "./Pages/Donate.jsx";
import Contact from "./Pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Volunteer /> },
      {path: "ourwork", element: <OurWork /> },
      { path: "donate", element: <Donate /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
