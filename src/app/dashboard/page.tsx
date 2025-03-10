"use client";
import { useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import ExchangeMenu from "@/components/ExchangeMenu/ExchangeMenu";

const DashboardPage: React.FC = () => {

  return (
    <>
      <div className="flex h-screen">
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

export default DashboardPage;