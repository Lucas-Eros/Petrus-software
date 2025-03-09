"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Dashboard from "@/components/Dashboard/Dashboard";
import ExchangeMenu from "@/components/ExchangeMenu/ExchangeMenu";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className={`${sidebarCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
          <Sidebar onToggle={handleSidebarToggle} />
        </div>

        <div className={`flex-1 bg-gray-50 transition-all duration-300`}>
          <Dashboard />
        </div>
        <div className="w-110 ">
          <ExchangeMenu />
        </div>
      </div>
    </>
  );
}