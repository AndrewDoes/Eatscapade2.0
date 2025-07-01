// src/components/Sidebar.tsx

import React from 'react';
// Import ikon yang kita butuhkan dari react-icons
import {
  LuCalendarClock,
  LuFileClock,
  LuUserRoundCog,
  LuComputer
} from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom'; 

// Mendefinisikan tipe untuk props dari komponen NavItem
interface NavItemProps {
  icon: React.ReactNode;      // Tipe untuk ikon (bisa berupa komponen JSX)
  children: React.ReactNode;  // Tipe untuk teks di dalam (anak komponen)
  to: string;
  active?: boolean;
}

// Komponen untuk setiap item menu, sekarang dengan tipe props
const NavItem: React.FC<NavItemProps> = ({ icon, children, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to}
      className={`
        flex items-center p-2 text-gray-700 rounded-lg transition-colors
        hover:bg-red-50
        ${isActive ? 'bg-red-100 font-bold text-red-600' : 'font-medium'}
      `}
    >
      {icon}
      <span className="ml-3">{children}</span>
    </Link>
  );
};

// Komponen Sidebar utama, ditambahkan tipe React.FC
const Sidebar: React.FC = () => {
  return (
    <aside className="flex sm-flex-col h-screen w-64 bg-white p-6 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          <span className="text-red-500">Eat</span>
          <span className="text-gray-800">scapade</span>
        </h1>
      </div>

      {/* Menu Navigasi */}
      <nav className="flex flex-col space-y-2">
        <NavItem to="/" icon={<LuComputer size={20}/>} active>
          Cashier
        </NavItem>
        <NavItem to="/Schedule" icon={<LuCalendarClock size={20} />}>
          Products
        </NavItem>
        <NavItem to="/Transaction-History" icon={<LuFileClock size={20} />}>
          Transaction History
        </NavItem>
        <NavItem to="/Member-Manager" icon={<LuUserRoundCog size={20} />}>
          Manage Members
        </NavItem>
      </nav>

      {/* Spacer untuk mendorong item ke bawah */}
      <div className="mt-5">
        {/* Tombol New Post */}
        <button className="w-full flex items-center justify-center p-3 mb-4 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
          <IoIosAddCircleOutline size={22} />
          <span className="ml-2 font-semibold">New Post</span>
        </button>
      </div>

        {/* Tombol Logout */}
        <button className="w-full flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors mt-auto">
          <FiLogOut size={20} />
          <span className="ml-3 font-semibold">Logout</span>
        </button>
    </aside>
  );
};

export default Sidebar;