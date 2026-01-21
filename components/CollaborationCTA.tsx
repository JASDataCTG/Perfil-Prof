
import React from 'react';

const CollaborationCTA: React.FC = () => {
  return (
    <section className="mt-10 mb-6 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5 rounded-[2.5rem] p-8 md:p-14 text-center border border-white/50 shadow-inner">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900">¿Necesitas asesoría técnica?</h2>
      <p className="text-slate-600 max-w-lg mx-auto mb-10 leading-relaxed text-sm md:text-base">
        Jairo Acosta está disponible para consultorías en Ciencia de Datos, Machine Learning y despliegue de soluciones Full Stack orientadas a finanzas y educación.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
          Contactar (E-mail)
        </button>
        <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 active:scale-95 transition-all shadow-sm">
          LinkedIn Perfil
        </button>
      </div>
    </section>
  );
};

export default CollaborationCTA;
