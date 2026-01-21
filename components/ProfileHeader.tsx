
import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-44 h-44 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-slate-100 ring-1 ring-slate-100">
          <img 
            alt="Jairo Acosta Solano" 
            className="w-full h-full object-cover" 
            src="https://media.licdn.com/dms/image/v2/D4E03AQG_18kZX1Gn2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670996162026?e=1770854400&v=beta&t=sXIUYv43jd7a3aeiimRpP1WEczZ2Kw9NVf0xLJr1nUM"
          />
        </div>
        <div className="absolute bottom-4 right-4 bg-blue-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
      </div>
      
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Jairo Acosta Solano</h1>
      <p className="text-lg text-primary font-bold mb-1">Data Scientist & Full Stack Developer</p>
      <p className="text-slate-500 font-medium mb-5">Experto en Finanzas y E-learning</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100/80 rounded-full text-[11px] font-bold text-slate-600 border border-slate-200">
          <span className="material-symbols-outlined text-base">location_on</span>
          Cartagena, Colombia
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100/80 rounded-full text-[11px] font-bold text-slate-600 border border-slate-200">
          <span className="material-symbols-outlined text-base">language</span>
          Inglés (Nivel Profesional)
        </span>
      </div>

      <div className="mt-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm max-w-lg w-full">
        <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 text-left">Extracto Profesional</h3>
        <p className="text-sm leading-relaxed text-slate-600 text-left">
          Asesor y consultor en análisis de datos utilizando técnicas estadísticas y de minería de datos. Docente e investigador universitario con amplia trayectoria en la integración de tecnología en procesos educativos y financieros.
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
