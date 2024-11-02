import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createRoot } from "react-dom/client";

import { UserContextProvider } from "./store/UserContext.tsx";
import { UserAuthContextProvider } from "./store/UserAuthContext.tsx";

import App from "./App.tsx";
import Login from "./pages/Login/Login.tsx";
import Home from "./pages/Home/Home.tsx";
import Events from "./pages/Events/Events.tsx";
import Collaborate from "./pages/Collaborate/Collaborate.tsx";
import About from "./pages/About/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/eventos",
        element: <Events />,
      },
      {
        path: "/contribuir",
        element: <Collaborate />,
      },
      { 
        path: "/sobre-nos",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <UserContextProvider>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </UserContextProvider>
);
