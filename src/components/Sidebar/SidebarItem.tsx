import React, { useState } from "react";
import Image from "next/image";

interface SidebarItemProps {
  iconSrc: string;
  label: string;
  hasDropdown?: boolean;
  collapsed?: boolean;
  isActive: boolean;
  onClick: () => void;
  subItems?: { label: string; onClick: () => void }[];
  isOpen?: boolean; 
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  iconSrc,
  label,
  hasDropdown = false,
  collapsed = false,
  isActive,
  onClick,
  subItems = [],
  isOpen: initialIsOpen = false, 
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const handleClick = () => {
    onClick();
    if (hasDropdown) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center p-4 ${collapsed ? "justify-center" : "justify-between"} 
          cursor-pointer hover:bg-gray-50 hover:text-gray-900`}
        onClick={handleClick}
      >
        <div className={`flex items-center ${collapsed ? "" : "gap-6"}`}>
          <div
            className={`rounded p-1 border border-gray-300 ${isActive ? "bg-yellow-300 border-yellow-300" : "bg-white-100"
              }`}
          >
            <div className="relative h-4 w-4">
              <Image src={iconSrc} alt={label} fill className="object-contain" />
            </div>
          </div>
          {!collapsed && <span>{label}</span>}
        </div>

        {hasDropdown && !collapsed && (
          <div className="relative h-3 w-3">
            <Image
              src="/assets/chevron-down.svg"
              alt="Expand"
              fill
              className={`object-contain transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        )}
      </div>

      {hasDropdown && isOpen && !collapsed && (
        <div className="ml-12 border-l border-gray-200 pl-4 py-2">
          {subItems.map((subItem, index) => (
            <div
              key={index}
              className="text-gray-600 hover:text-gray-900 py-2 cursor-pointer"
              onClick={subItem.onClick}
            >
              {subItem.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;