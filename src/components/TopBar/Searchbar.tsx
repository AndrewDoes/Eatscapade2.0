// src/components/SearchBar.tsx

import React from 'react';
import { LuSearch } from 'react-icons/lu'; // Menggunakan ikon search dari Lucide (bagian dari react-icons)

const SearchBar: React.FC = () => {
  return (
    // 1. Gunakan 'relative' pada container agar ikon bisa diposisikan 'absolute' di dalamnya
    <div className="relative w-full">
      
      {/* 2. Ikon diletakkan di dalam container */}
      <LuSearch 
        className="absolute left-5 top-11 -translate-y-1/2 text-gray-400" 
        size={20} 
      />
      
      {/* 3. Input diberikan padding kiri (pl-12) agar teks tidak menimpa ikon */}
      <input
        type="text"
        placeholder="Search..."
        className="
          w-200
          mt-5
          py-3 
          pl-12 
          pr-4 
          bg-white 
          border 
          border-gray-200 
          rounded-full 
          text-gray-800
          placeholder-gray-400
          focus:outline-none 
          focus:ring-2 
          focus:ring-red-300 
          transition-shadow
        "
      />
    </div>
  );
};

export default SearchBar;