import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createRoot } from "react-dom/client";

import { UserContextProvider } from "./store/UserContext.tsx";
import { UserAuthContextProvider } from "./store/UserAuthContext.tsx";

import App from "./App.tsx";
import Login from "./pages/Login/Login.tsx";
import Home from "./pages/Home/Home.tsx";
import Events from "./pages/Events/Events.tsx";

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
        element: <Events />
      }
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
