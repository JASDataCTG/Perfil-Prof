
import React, { useState } from 'react';
import { GitHubRepo } from '../types';
import RepoCard from '../components/RepoCard';

interface Props {
  repos: GitHubRepo[];
}

const CodeView: React.FC<Props> = ({ repos }) => {
  const [search, setSearch] = useState('');

  const filtered = repos.filter(r => 
    r.name.toLowerCase().includes(search.toLowerCase()) || 
    r.description.toLowerCase().includes(search.toLowerCase()) ||
    r.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">Proyectos de Código</h1>
          <p className="text-slate-500">Desarrollo de software, modelos de datos y herramientas de investigación.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-2">
            <span className="material-symbols-outlined text-base">terminal</span>
            <span className="font-bold text-sm">GitHub</span>
          </div>
        </div>
      </div>

      <div className="relative group">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
        <input 
          type="text" 
          placeholder="Buscar repositorios por nombre, lenguaje o tecnología..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length > 0 ? (
          filtered.map(repo => (
            <RepoCard key={repo.id} repo={repo} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">folder_open</span>
            <p className="text-slate-500 font-medium">No se encontraron repositorios que coincidan con "{search}"</p>
          </div>
        )}
      </div>

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-[2.5rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-9xl">code</span>
        </div>
        <div className="relative z-10 max-w-lg">
          <h3 className="text-xl font-bold mb-3">Stack Tecnológico Principal</h3>
          <div className="flex flex-wrap gap-2">
            {['Python', 'React', 'Node.js', 'SQL', 'R', 'TensorFlow', 'TypeScript', 'Tableau'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold border border-white/10">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeView;
