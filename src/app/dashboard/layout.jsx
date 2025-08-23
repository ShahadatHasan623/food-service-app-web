// app/dashboard/layout.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { name: "Home", href: "/dashboard" },
    { name: "Add Product", href: "/dashboard/add-product" },
  ];

  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Drawer */}
      <div
        className={`drawer ${sidebarOpen ? "drawer-open" : ""} lg:drawer-open`}
      >
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        {/* Main content */}
        <div className="drawer-content flex flex-col p-6 lg:p-8">
          {/* Mobile menu button */}
          <div className="lg:hidden mb-4">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </label>
          </div>

          {/* Header */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          </header>

          {/* Dynamic children (page content) */}
          <div>{children}</div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side bg-white shadow-md">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <aside className="w-64 p-6 flex flex-col h-full">
            <Link href="/" className="text-2xl font-bold mb-6 text-primary">
              Foodies Dashboard
            </Link>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`btn btn-ghost justify-start normal-case ${
                    pathname === link.href
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-base-200"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}
