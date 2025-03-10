import React, { useState, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps {
  onToggle?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      iconSrc: "/assets/Dashboard.svg",
      hasDropdown: false,
      subItems: [],
    },
    {
      label: "On-Ramp",
      path: "/on-ramp",
      iconSrc: "/assets/add.svg",
      hasDropdown: true,
      subItems: [
        { label: "Ativos Habilitados", path: "/on-ramp/ativos-habilitados" },
        { label: "Tarifas", path: "/on-ramp/tarifas" },
        { label: "Integração", path: "/on-ramp/integracao" },
      ],
    },
    {
      label: "Off-Ramp",
      path: "/off-ramp",
      iconSrc: "/assets/reduce.svg",
      hasDropdown: true,
      subItems: [
        { label: "Ativos Habilitados", path: "/off-ramp/ativos-habilitados" },
        { label: "Tarifas", path: "/off-ramp/tarifas" },
        { label: "Integração", path: "/off-ramp/integracao" },
      ],
    },
    {
      label: "Swap",
      path: "/swap",
      iconSrc: "/assets/swap.svg",
      hasDropdown: true,
      subItems: [{ label: "Integração", path: "/swap/integracao" }],
    },
    {
      label: "Transações",
      path: "/transacoes",
      iconSrc: "/assets/bank-transfer.svg",
      hasDropdown: false,
      subItems: [],
    },
    {
      label: "Configurações",
      path: "/configuracoes",
      iconSrc: "/assets/settings.svg",
      hasDropdown: false,
      subItems: [],
    },
  ];

  useEffect(() => {
    const currentPath = pathname;
    const activeMenu = menuItems.find((item) => currentPath.startsWith(item.path));
    if (activeMenu) {
      setActiveItem(activeMenu.label);
    }
  }, [pathname]);

  const toggleSidebar = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);

    if (onToggle) {
      onToggle(newCollapsedState);
    }
  };

  const [activeItem, setActiveItem] = useState<string | null>("Dashboard");

  const handleItemClick = (label: string, path: string, hasDropdown: boolean) => {
    setActiveItem(label);
    if (!hasDropdown) {
      router.push(path);
    }
  };

  const handleSubItemClick = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    if (onToggle) {
      onToggle(collapsed);
    }
  },);

  return (
    <div
      className={`${collapsed ? "w-20" : "w-64"
        } border-r bg-white-100 border-r-gray-200 h-screen flex flex-col transition-all duration-300`}
    >
      <div className={`${collapsed ? "justify-center" : "justify-between"} p-4 flex items-center`}>
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
            className={`object-contain transform ${collapsed ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            iconSrc={item.iconSrc}
            label={item.label}
            hasDropdown={item.hasDropdown}
            isActive={activeItem === item.label}
            onClick={() => {
              if (!item.hasDropdown) {
                handleItemClick(item.label, item.path, item.hasDropdown);
              } else {
                setOpenDropdown(openDropdown === item.label ? null : item.label);
              }
            }}
            collapsed={collapsed}
            isOpen={openDropdown === item.label}
            subItems={item.subItems.map((subItem) => ({
              ...subItem,
              onClick: () => handleSubItemClick(subItem.path),
            }))}
          />
        ))}
      </div>

      <div className={`p-6 ${collapsed ? "flex justify-center" : ""}`}>
        <button
          className={`flex items-center text-gray-600 hover:text-gray-900 ${collapsed ? "w-auto" : "w-full"}`}
          onClick={() => router.push("/logout")}
        >
          <div className={`relative h-6 w-6 ${collapsed ? "" : "mr-6"}`}>
            <Image
              src="/assets/logout.svg"
              alt="Logout"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;