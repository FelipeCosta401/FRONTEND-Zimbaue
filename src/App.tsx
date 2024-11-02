import { Outlet } from "react-router-dom";

import MobileNavbar from "./components/Navigation/MobileNav/MobileNavbar";
import Sidebar from "./components/Navigation/sidebar/Sidebar";

import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <nav>
          <Sidebar />
          <MobileNavbar />
        </nav>
        <main className="h-screen lg:ml-[360px] p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
