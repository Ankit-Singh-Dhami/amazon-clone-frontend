import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import Carts from "./routes/Carts.jsx";
import Signup from "./components/Account/SignUp.jsx";
import Login from "./components/Account/Login.jsx";
import Logout from "./components/Account/Logout.jsx";
import CreateItem from "./components/Add_items/CreateItem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Carts /> },
      { path: "/signin", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Logout /> },
      { path: "/create-item", element: <CreateItem /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
