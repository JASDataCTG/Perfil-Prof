
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
    p.journal.toLowerCase().includes(search.toLowerCase())
  );

  const extraPapers = [
    {
      id: '4',
      journal: 'Ingeniería de Software',
      year: 2017,
      title: 'Prácticas de Pruebas desde la Industria de Software. La Plataforma ASISTO como Caso de Estudio',
      description: 'Metodologías de QA aplicadas a plataformas de gestión académica a gran escala.',
      views: '950',
      pdfUrl: '#'
    },
    {
      id: '5',
      journal: 'Gestión Educativa',
      year: 2016,
      title: 'E-learning: una nueva forma de organización educativa',
      description: 'Reestructuración de modelos institucionales para la adopción masiva de la educación a distancia.',
      views: '1.2k',
      pdfUrl: '#'
    }
  ];

  const allPapers = [...publications, ...extraPapers];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Repositorio de Publicaciones</h1>
        <p className="text-slate-500">Investigación científica en analítica, logística y educación virtual.</p>
      </div>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
        <input 
          type="text" 
          placeholder="Buscar por título, revista o palabra clave..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {allPapers.filter(p => p.title.toLowerCase().includes(search.toLowerCase())).map(pub => (
          <PublicationCard key={pub.id} publication={pub} />
        ))}
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-200 text-center">
        <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">library_books</span>
        <p className="text-slate-400 text-sm font-medium">Fin de los resultados. Actualizado en 2024.</p>
      </div>
    </div>
  );
};

export default PapersView;
