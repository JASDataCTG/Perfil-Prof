
import React, { useState } from 'react';
import { Publication } from '../types';
import PublicationCard from '../components/PublicationCard';

interface Props {
  publications: Publication[];
}

const PapersView: React.FC<Props> = ({ publications }) => {
  const [search, setSearch] = useState('');

  const filtered = publications.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.journal.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">Repositorio Académico</h1>
          <p className="text-slate-500">Listado completo de publicaciones científicas y papers de investigación.</p>
        </div>
        <div className="bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
          <span className="text-primary font-bold text-sm">{publications.length} Publicaciones Totales</span>
        </div>
      </div>

      <div className="relative group">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
        <input 
          type="text" 
          placeholder="Buscar por título, revista o descriptores..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filtered.length > 0 ? (
          filtered.map(pub => (
            <PublicationCard key={pub.id} publication={pub} />
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">search_off</span>
            <p className="text-slate-500 font-medium">No se encontraron resultados para "{search}"</p>
          </div>
        )}
      </div>

      {filtered.length > 0 && (
        <div className="bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-200 text-center">
          <span className="material-symbols-outlined text-4xl text-slate-200 mb-2">check_circle</span>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Catálogo verificado • Google Scholar 2024</p>
        </div>
      )}
    </div>
  );
};

export default PapersView;
