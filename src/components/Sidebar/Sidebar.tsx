"use client";
import React, { useState, useEffect } from 'react';
import SidebarItem from './SidebarItem';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarProps {
  onToggle?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);

    if (onToggle) {
      onToggle(newCollapsedState);
    }
  };

  useEffect(() => {
    if (onToggle) {
      onToggle(collapsed);
    }
  }, []);

  return (
    <div
      className={`${collapsed ? 'w-20' : 'w-64'
        } border-r bg-white-100 border-r-gray-200 h-screen flex flex-col transition-all duration-300`}
    >
      <div className={`${collapsed ? 'justify-center' : 'justify-between'} p-4 flex items-center`}>
        {!collapsed && (
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-32">
              <Image
                src="/png/ecopag-logo.png"
                alt="EcoPag"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        )}

        <div
          className="relative h-6 w-6 cursor-pointer flex-shrink-0"
          onClick={toggleSidebar}
        >
          <Image
            src="/assets/back-arrow.svg"
            alt="back-arrow"
            fill
            className={`object-contain transform ${collapsed ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <SidebarItem
          iconSrc="/assets/Dashboard.svg"
          label="Dashboard"
          isActive={true}
          collapsed={collapsed}
        />
        <SidebarItem
          iconSrc="/assets/add.svg"
          label="On-Ramp"
          hasDropdown={true}
          collapsed={collapsed}
        />
        <SidebarItem
          iconSrc="/assets/reduce.svg"
          label="Off-Ramp"
          hasDropdown={true}
          collapsed={collapsed}
        />
        <SidebarItem
          iconSrc="/assets/swap.svg"
          label="Swap"
          hasDropdown={true}
          collapsed={collapsed}
        />
        <SidebarItem
          iconSrc="/assets/bank-transfer.svg"
          label="Transações"
          hasDropdown={false}
          collapsed={collapsed}
        />
        <SidebarItem
          iconSrc="/assets/settings.svg"
          label="Configurações"
          hasDropdown={false}
          collapsed={collapsed}
        />
      </div>

      <div className={`p-6 ${collapsed ? 'flex justify-center' : ''}`}>
        <button className={`flex items-center text-gray-600 hover:text-gray-900 ${collapsed ? 'w-auto' : 'w-full'}`}>
          <div className={`relative h-6 w-6 ${collapsed ? '' : 'mr-6'}`}>
            <Image
              src="/assets/logout.svg"
              alt="Logout"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          {!collapsed && 'Logout'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;