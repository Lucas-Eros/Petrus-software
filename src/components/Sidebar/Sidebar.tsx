"use client";
import React from 'react';
import SidebarItem from './SidebarItem';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 border-r bg-white-100 border-r-gray-200 h-screen flex flex-col">
      <div className="p-4 flex items-center justify-between">
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

        <div className="relative h-6 w-6">
          <Image
            src="/assets/back-arrow.svg"
            alt="back-arrow"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <SidebarItem
          iconSrc="/assets/Dashboard.svg"
          label="Dashboard"
          isActive={true}
        />
        <SidebarItem
          iconSrc="/assets/add.svg"
          label="On-Ramp"
          hasDropdown={true}
        />
        <SidebarItem
          iconSrc="/assets/reduce.svg"
          label="Off-Ramp"
          hasDropdown={true}
        />
        <SidebarItem
          iconSrc="/assets/swap.svg"
          label="Swap"
          hasDropdown={true}
        />
        <SidebarItem
          iconSrc="/assets/bank-transfer.svg"
          label="Transações"
          hasDropdown={false}
        />
        <SidebarItem
          iconSrc="/assets/settings.svg"
          label="Configurações"
          hasDropdown={false}
        />
      </div>

      <div className="p-6">
        <button className="flex items-center text-gray-600 hover:text-gray-900 w-full">
          <div className="mr-6">
            <Image
              src="/assets/logout.svg"
              alt="Logout"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
