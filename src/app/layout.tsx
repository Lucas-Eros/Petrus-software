'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          <div className={`${sidebarCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
            <Sidebar onToggle={handleSidebarToggle} />
          </div>

          <div className={`flex-1 bg-gray-50 transition-all duration-300`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
