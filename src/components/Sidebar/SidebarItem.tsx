"use client";

import React, { ReactElement, useState } from 'react';
import Image from 'next/image';

interface SidebarItemProps {
  iconSrc?: string;
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  iconSrc,
  label,
  isActive = false,
  hasDropdown = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-1 px-3">
      <button
        className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${isActive
            ? 'bg-green-200 text-green-800 font-medium'
            : 'text-gray-700 hover:bg-gray-100'
          }`}
        onClick={() => hasDropdown && setIsOpen(!isOpen)}
      >
        {iconSrc ? (
          <div className="mr-3 relative h-5 w-5">
            <Image
              src={iconSrc}
              alt={label}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          ""
        )}

        <span className="flex-grow text-left">{label}</span>

        {hasDropdown && (
          <div className="ml-2 h-4 w-4">
            <Image
              src="/assets/down-arrow.svg"
              alt="dropdown arrow"
              width={12}
              height={12}
              className={`transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
            />
          </div>
        )}
      </button>

      {hasDropdown && isOpen && (
        <div className="ml-10 mt-1 space-y-1">
          <a href="#" className="block px-3 py-1 text-sm text-gray-600 rounded hover:bg-gray-100">
            Opção 1
          </a>
          <a href="#" className="block px-3 py-1 text-sm text-gray-600 rounded hover:bg-gray-100">
            Opção 2
          </a>
          <a href="#" className="block px-3 py-1 text-sm text-gray-600 rounded hover:bg-gray-100">
            Opção 3
          </a>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
