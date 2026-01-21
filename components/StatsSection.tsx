
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: '18+', label: 'Años Exp.' },
    { value: '5', label: 'Papers' },
    { value: '8', label: 'Certs' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-5 md:p-6 rounded-[2rem] border border-slate-100 shadow-sm text-center transition-transform hover:scale-[1.02] cursor-default">
          <p className="text-2xl md:text-3xl font-extrabold text-slate-900">{stat.value}</p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
