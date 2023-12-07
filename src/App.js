import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import IntroPage from "./components/intro/js/IntroPage";
import HomePage from "./components/home/js/HomePage";

import About from "./components/about/js/About";
import News from "./components/events/js/Events";
import Announcement from "./components/announcement/js/Announcement";
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
      { path: "news", element: <News /> },
      { path: "announcement", element: <Announcement /> },
      { path: "careers", element: <Careers /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
