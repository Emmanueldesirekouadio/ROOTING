import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Actualise from "./components/Actualise.jsx";
import AllPage from "./components/AllPage.jsx";
import Fullstack from "./components/Fullstack.jsx";
import Home from "./components/Home.jsx";
import Image from "./components/Image.jsx";
import Map from "./components/Map.jsx";
import ModeIa from "./components/ModeIa.jsx";
import PlusPage from "./components/PlusPage.jsx";
import ToolsPage from "./components/ToolsPage.jsx";
import User from "./components/User.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/fullstack",
    element: <Fullstack />,
  },
  {
    path: "/mode-ia",
    element: <ModeIa />,
  },
  {
    path: "/tous",
    element: <AllPage />,
  },
  {
    path: "/images",
    element: <Image />,
  },
  {
    path: "/actualise",
    element: <Actualise />,
  },
  {
    path: "/maps",
    element: <Map />,
  },
  {
    path: "/plus",
    element: <PlusPage />,
  },
  {
    path: "/outils",
    element: <ToolsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
);
