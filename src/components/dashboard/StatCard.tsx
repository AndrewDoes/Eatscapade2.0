// src/components/dashboard/StatCard.tsx

import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change, isPositive }) => {
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center space-x-4">
      <div className="p-3 bg-gray-100 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className={`text-xs font-medium ${changeColor}`}>{change}</p>
      </div>
    </div>
  );
};

export default StatCard;