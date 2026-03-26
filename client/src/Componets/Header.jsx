// components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-400">
          PRS Agent
        </h1>
        <h1 className="text-2xl font-bold">🚀 AI Website Builder</h1>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition justify-center">
            Log Out
          </button>

          

        </div>
      </div>
    </header>
  );
}