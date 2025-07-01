// src/components/dashboard/Header.tsx

import React from 'react';
import { LuSearch } from 'react-icons/lu';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Hi, Admin. Welcome back to Eatscapade Dashboard!</p>
      </div>
      <div className="relative">
        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
        />
      </div>
    </header>
  );
};

export default Header;