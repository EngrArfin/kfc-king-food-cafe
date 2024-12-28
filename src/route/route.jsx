import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Signup from "../components/home/Signup/Signup";
import Login from "../components/home/Login/Login";
import AllProductView from "../components/home/AllProductView/AllProductView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/allProductView",
    element: <AllProductView />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  /* Admin */
  /*  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "",
        element: <AdminDashboard></AdminDashboard>,
      },

      {
        path: "report",
        element: <Report></Report>,
      },
    ],
  }, */

  /* User */
  /* {
    path: "/user",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
    ],
  }, */
]);

export default router;
