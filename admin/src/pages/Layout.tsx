import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Topbar */}
      <div className="bg-purple-300 w-full h-[50px] flex justify-center items-center fixed top-0 z-10">
        <h1 className="text-2xl font-semibold text-pink-500">CandyCrush</h1>
      </div>

      {/* Main Content below Topbar */}
      <div className="flex flex-1 pt-[50px]">
        {/* Sidebar */}
        <SideBar />

        {/* Outlet (page content) */}
        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
