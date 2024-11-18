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
    path: "/FRONTEND-Zimbaue/",
    element: <App />,
    children: [
      {
        path: "/FRONTEND-Zimbaue/",
        index: true,
        element: <Home />,
      },
      {
        path: "/FRONTEND-Zimbaue/eventos",
        element: <Events />,
      },
      {
        path: "/FRONTEND-Zimbaue/contribuir",
        element: <Collaborate />,
      },
      {
        path: "/FRONTEND-Zimbaue/sobre-nos",
        element: <About />,
      },
      {
        path: "/FRONTEND-Zimbaue/premios",
        element: <Awards />,
      },
    ],
  },
  {
    path: "/FRONTEND-Zimbaue/admin/",
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
    path: "/FRONTEND-Zimbaue/login",
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
