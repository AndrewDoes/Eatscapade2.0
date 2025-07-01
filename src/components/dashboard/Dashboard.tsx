// src/components/dashboard/Dashboard.tsx

import React from 'react';
import Header from './Header';
import StatCard from './StatCard';
import { LuArchive, LuShoppingCart, LuUsers, LuPackage } from 'react-icons/lu';

// Nanti, kita akan tambahkan komponen tabel dan produk teratas di sini

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 p-8 bg-gray-50">
      <Header />

      {/* Grid untuk Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<LuArchive size={24} className="text-red-500" />}
          title="Total Sales"
          value="$8,245"
          change="+12.5% from last month"
          isPositive={true}
        />
        <StatCard
          icon={<LuShoppingCart size={24} className="text-blue-500" />}
          title="Total Order"
          value="1,254"
          change="+8.3% from last month"
          isPositive={true}
        />
        <StatCard
          icon={<LuUsers size={24} className="text-green-500" />}
          title="Total Customer"
          value="587"
          change="-2.1% from last month"
          isPositive={false}
        />
        <StatCard
          icon={<LuPackage size={24} className="text-yellow-500" />}
          title="Total Product"
          value="349"
          change="Unchanged"
          isPositive={true} // Warna tidak terlalu penting jika tidak ada perubahan
        />
      </div>

      {/* Placeholder untuk bagian bawah (Tabel dan Produk Teratas) */}
      <div className="p-6 bg-white border border-gray-200 rounded-xl">
        <h2 className="text-lg font-semibold text-gray-700">Recent Orders & Top Products (Coming Soon)</h2>
        <p className="mt-2 text-gray-500">Bagian ini akan kita bangun selanjutnya.</p>
      </div>

    </main>
  );
};

export default Dashboard;