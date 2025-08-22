"use client";

import Link from "next/link";
import React from "react";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr] bg-gray-50 text-gray-900">
      <aside className="bg-white border-r border-gray-200 p-4 flex flex-col gap-4">
        <div className="text-lg font-semibold">Moonstruck</div>
        <nav className="flex-1">
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="block rounded px-2 py-1 hover:bg-gray-100" href="/">
                Dashboard
              </Link>
            </li>
            <li className="mt-2 mb-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
              Master
            </li>
            <li>
              <Link className="block rounded px-2 py-1 hover:bg-gray-100" href="/master/items">
                Items
              </Link>
            </li>
            <li>
              <Link className="block rounded px-2 py-1 hover:bg-gray-100" href="/master/boms">
                BOMs
              </Link>
            </li>
            <li>
              <Link className="block rounded px-2 py-1 hover:bg-gray-100" href="/master/work-centers">
                Work Centers
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-xs text-gray-500">v0.1 • Phase 1</div>
      </aside>
      <div className="flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 h-12 flex items-center px-4 justify-between">
          <div className="font-medium">Moonstruck Manufacturing</div>
          <div className="text-sm text-gray-500">NITIN Kumar</div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}