
import React from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const isActive = project.status === 'active';

  return (
    <div className="group relative bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer overflow-hidden">
      <div className="absolute top-6 right-6">
        <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest ${
          isActive 
            ? 'bg-green-100 text-green-700' 
            : 'bg-slate-100 text-slate-500'
        }`}>
          {isActive ? 'Activo' : 'Finalizado'}
        </span>
      </div>
      
      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors pr-16 text-slate-800">
        {project.title}
      </h3>
      
      <p className="text-sm text-slate-500 leading-relaxed mb-6">
        {project.description}
      </p>
      
      {isActive ? (
        <div className="space-y-3">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 ring-1 ring-slate-100 overflow-hidden">
                <img src={`https://picsum.photos/seed/team_sergio_${i}/64/64`} alt="equipo" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] text-white font-bold ring-1 ring-slate-100">
              +{project.teamSize ? project.teamSize - 3 : 0}
            </div>
          </div>
          <p className="text-[11px] font-bold text-slate-400">
            Colaboración con {project.teamSize || 0} investigadores
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-full shadow-[0_0_8px_rgba(0,188,212,0.4)]"></div>
          </div>
          <p className="text-[11px] font-bold text-slate-400">Objetivos alcanzados con éxito</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
