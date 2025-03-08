import React, { useState } from 'react';
import Image from 'next/image';

interface SidebarItemProps {
  iconSrc: string;
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  collapsed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  iconSrc,
  label,
  isActive = false,
  hasDropdown = false,
  collapsed = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (hasDropdown) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center p-4 ${collapsed ? 'justify-center' : 'justify-between'
          } cursor-pointer ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        onClick={toggleDropdown}
      >
        <div className={`flex items-center ${collapsed ? '' : 'gap-6'}`}>
          <div className='rounded border p-1 border-gray-300'>
            <div className="relative h-4 w-4 ">
              <Image
                src={iconSrc}
                alt={label}
                fill
                className="object-contain"
              />
            </div>
          </div>
          {!collapsed && <span>{label}</span>}
        </div>

        {hasDropdown && !collapsed && (
          <div className="relative h-4 w-4">
            <Image
              src="/assets/chevron-down.svg"
              alt="Expand"
              fill
              className={`object-contain transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        )}
      </div>

      {hasDropdown && isOpen && !collapsed && (
        <div className="ml-12 border-l border-gray-200 pl-4 py-2">
          <div className="text-gray-600 hover:text-gray-900 py-2 cursor-pointer">Subitem 1</div>
          <div className="text-gray-600 hover:text-gray-900 py-2 cursor-pointer">Subitem 2</div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;