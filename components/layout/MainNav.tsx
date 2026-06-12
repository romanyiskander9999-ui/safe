"use client";

import { Home, Zap } from "lucide-react";

export default function MainNav() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg p-6 z-40 flex flex-col">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
          S
        </div>
        <span className="font-bold text-xl text-primary">SafePlay</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 space-y-2">
        <Link
          href="/"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-primary/10 hover:text-primary transition-all"
        >
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/tools"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-primary/10 hover:text-primary transition-all"
        >
          <Zap className="w-5 h-5" />
          <span>Tools</span>
        </Link>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 text-center">
        <p>SafePlay v0.1.0</p>
        <p className="mt-2">Digital Safety Platform</p>
      </div>
    </nav>
  );
}
