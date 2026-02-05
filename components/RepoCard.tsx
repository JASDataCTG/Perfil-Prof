
import React from 'react';
import { GitHubRepo } from '../types';

interface Props {
  repo: GitHubRepo;
}

const RepoCard: React.FC<Props> = ({ repo }) => {
  const getLangColor = (lang: string) => {
    switch (lang) {
      case 'Python': return 'bg-blue-500';
      case 'TypeScript': return 'bg-sky-600';
      case 'JavaScript': return 'bg-yellow-400';
      case 'R': return 'bg-indigo-500';
      default: return 'bg-slate-400';
    }
  };

  return (
    <div className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${getLangColor(repo.language)}`}></span>
          <span className="text-xs font-bold text-slate-500">{repo.language}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-xs font-bold">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">star</span> {repo.stars}</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">fork_right</span> {repo.forks}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
        <span className="material-symbols-outlined text-slate-400 text-xl">folder</span>
        {repo.name}
      </h3>
      
      <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
        {repo.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {repo.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold rounded-lg border border-slate-100">
            {tag}
          </span>
        ))}
      </div>

      <a 
        href={repo.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-auto w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-widest rounded-xl text-center transition-colors flex items-center justify-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="material-symbols-outlined text-base">open_in_new</span>
        Ver en GitHub
      </a>
    </div>
  );
};

export default RepoCard;
