
import React, { useState, useEffect } from 'react';
import { getResearchInsights } from '../services/geminiService';

interface Props {
  topic: string;
}

const AIInsightsPanel: React.FC<Props> = ({ topic }) => {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInsight = async () => {
      setLoading(true);
      const text = await getResearchInsights(topic);
      setInsight(text || '');
      setLoading(false);
    };

    fetchInsight();
  }, [topic]);

  return (
    <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-6xl">auto_awesome</span>
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-primary">auto_awesome</span>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Insight de IA Académica</h3>
      </div>
      
      <div className="relative z-10">
        {loading ? (
          <div className="flex flex-col gap-2 animate-pulse">
            <div className="h-4 bg-slate-800 rounded w-full"></div>
            <div className="h-4 bg-slate-800 rounded w-3/4"></div>
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-slate-200 font-medium italic">
            "{insight}"
          </p>
        )}
      </div>
      
      <div className="mt-4 flex items-center justify-between">
         <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Impulsado por Gemini AI</span>
         <button className="text-[10px] font-bold text-primary hover:text-white transition-colors">Más detalles →</button>
      </div>
    </div>
  );
};

export default AIInsightsPanel;
