
import React from 'react';
import { Publication } from '../types';

interface Props {
  publication: Publication;
}

const PublicationCard: React.FC<Props> = ({ publication }) => {
  return (
    <div className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer">
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
        {publication.journal} • {publication.year}
      </span>
      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
        {publication.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">
        {publication.description}
      </p>
      <div className="flex items-center gap-5 text-[11px] font-bold text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">visibility</span> 
          {publication.views} Vistas
        </span>
        <span className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-base">download</span> 
          Descargar PDF
        </span>
      </div>
    </div>
  );
};

export default PublicationCard;
