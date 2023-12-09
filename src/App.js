import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import IntroPage from "./components/intro/js/IntroPage";
import HomePage from "./components/home/js/HomePage";

import About from "./components/about/js/About";
import Events from "./components/events/js/Events";
import Announcement from "./components/announcement/js/Announcement";
import Collateral from "./components/collateral/js/Collateral";
import Careers from "./components/careers/js/Careers";
import ErrorPage from "./components/error/js/ErrorPage";
import HomePageBody from "./components/home/js/HomePageBody";

const router = createBrowserRouter([
  { path: "/", element: <IntroPage />, errorElement: <ErrorPage /> },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePageBody /> },
      { path: "about", element: <About /> },
      { path: "events", element: <Events /> },
      { path: "announcement", element: <Announcement /> },
      { path: "collateral", element: <Collateral /> },
      { path: "careers", element: <Careers /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
