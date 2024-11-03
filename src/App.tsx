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
        <main className="h-full p-6 pb-32 lg:pb-0 lg:ml-[360px] ">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
