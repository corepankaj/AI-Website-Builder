
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 mt-0">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} PRS Agent. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}