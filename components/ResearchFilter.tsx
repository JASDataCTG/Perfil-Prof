
import React from 'react';
import { FilterType } from '../types';

interface Props {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const ResearchFilter: React.FC<Props> = ({ activeFilter, onFilterChange }) => {
  const filters: FilterType[] = ['Todas', 'Ciencia de Datos', 'E-learning', 'NLP', 'Inteligencia Empresarial'];

  return (
    <div className="space-y-4">
      <h2 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-2">
        <span className="material-symbols-outlined text-base">psychology</span>
        Áreas de Especialidad
      </h2>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 border ${
              activeFilter === filter
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                : 'bg-white text-slate-500 border-slate-200 hover:border-primary/50 hover:text-primary'
            }`}
          >
            {filter === 'Todas' ? 'Todo' : filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResearchFilter;
