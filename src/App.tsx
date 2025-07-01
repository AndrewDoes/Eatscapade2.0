// src/App.tsx

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// Import komponen layout dan semua halaman
import Sidebar from './components/Sidebar';
import ProductsPage from './pages/ProductsPage.tsx';
import CashierPage from './pages/CashierPage.tsx';
import TransactionHistoryPage from './pages/TransactionHistoryPage.tsx';
import ManageMembersPage from './pages/ManageMembersPage.tsx';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

// --- Mock Data and Constants ---
const initialProducts: Product[] = [
  { id: 1, name: 'Classic Burger', price: 5.99, category: 'Meals', image: 'https://placehold.co/300x200/FFC0CB/000000?text=Burger' },
  { id: 2, name: 'Cheese Burger', price: 6.49, category: 'Meals', image: 'https://placehold.co/300x200/FFD700/000000?text=Cheese+Burger' },
  { id: 3, name: 'Bacon Burger', price: 7.49, category: 'Meals', image: 'https://placehold.co/300x200/E9967A/000000?text=Bacon+Burger' },
  { id: 4, name: 'Fries', price: 2.99, category: 'Sides', image: 'https://placehold.co/300x200/F0E68C/000000?text=Fries' },
  { id: 5, name: 'Onion Rings', price: 3.49, category: 'Sides', image: 'https://placehold.co/300x200/D2B48C/000000?text=Onion+Rings' },
  { id: 6, name: 'Soda', price: 1.99, category: 'Drinks', image: 'https://placehold.co/300x200/87CEEB/000000?text=Soda' },
  { id: 7, name: 'Milkshake', price: 4.29, category: 'Drinks', image: 'https://placehold.co/300x200/DDA0DD/000000?text=Milkshake' },
  { id: 8, name: 'House Salad', price: 4.99, category: 'Sides', image: 'https://placehold.co/300x200/98FB98/000000?text=Salad' },
  { id: 9, name: 'Spicy Chicken Sandwich', price: 7.99, category: 'Meals', image: 'https://placehold.co/300x200/FFA07A/000000?text=Spicy+Chicken' },
  { id: 10, name: 'Water Bottle', price: 1.29, category: 'Drinks', image: 'https://placehold.co/300x200/ADD8E6/000000?text=Water' },
];

const TAX_RATE = 0.07; // 7% tax

export interface CartItem extends Product {
  quantity: number;
}

// Komponen Layout ini memastikan Sidebar selalu tampil
const AppLayout: React.FC = () => (
  <div className="flex bg-gray-50 h-screen overflow-hidden">
    <Sidebar />
    {/* <Outlet> adalah tempat halaman dinamis akan ditampilkan */}
    <main className="flex-1 flex flex-col overflow-auto">
      <Outlet />
    </main>
  </div>
);

// Komponen App utama yang sekarang menjadi pengatur rute
const App: React.FC = () => {
  return (
    <Routes>
      {/* Semua halaman akan menggunakan AppLayout */}
      <Route element={<AppLayout />}>
        {/* Rute default (halaman pertama saat web dibuka) */}
        <Route path="/" element={<CashierPage />} />

        {/* Rute lain sesuai dengan 'to' di Sidebar */}
        <Route path="/Cashier" element={<CashierPage />} />
        <Route path="/Schedule" element={<ProductsPage />} />
        <Route path="/Transaction-History" element={<TransactionHistoryPage />} />
        <Route path="/Member-Manager" element={<ManageMembersPage />} />
      </Route>
    </Routes>
  );
}

export default App;