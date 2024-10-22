import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Projects from "../pages/Projects";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/sign-up",
          element: <SignUp />
        },
        {
          path: "/sign-in",
          element: <SignIn />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
      ]
    },
  ]);