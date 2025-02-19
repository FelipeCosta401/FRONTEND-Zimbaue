import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createRoot } from "react-dom/client";

import { UserContextProvider } from "./store/UserContext.tsx";
import { UserAuthContextProvider } from "./store/UserAuthContext.tsx";

import App from "./App.tsx";
import Events from "./pages/User/Events/Events.tsx";
import Collaborate from "./pages/User/Collaborate/Collaborate.tsx";
import About from "./pages/User/About/About.tsx";
import Login from "./pages/Login/Login.tsx";
import HomeAdmin from "./pages/Admin/HomeAdmin/HomeAdmin.tsx";
import Home from "./pages/User/Home/Home.tsx";
import AdminRoute from "./routes/AdminRoute.tsx";
import NewPost from "./pages/Admin/NewPost/NewPost.tsx";
import NewEvent from "./pages/Admin/NewEvent/NewEvent.tsx";
import UserList from "./pages/Admin/UserList/UserList.tsx";
import EventList from "./pages/Admin/EventList/EventList.tsx";
import Awards from "./pages/User/Awards/Awards.tsx";

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
      {
        path: "/premios",
        element: <Awards />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <App />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeAdmin />,
      },
      {
        path: "novo-post",
        element: <NewPost />,
      },
      {
        path: "novo-evento",
        element: <NewEvent />,
      },
      {
        path: "listar-usuarios",
        element: <UserList />,
      },
      {
        path: "listar-eventos",
        element: <EventList />,
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
