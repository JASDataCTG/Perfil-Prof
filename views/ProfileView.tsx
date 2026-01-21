
import React from 'react';

const ProfileView: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Bio Header */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4E03AQG_18kZX1Gn2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670996162026?e=1770854400&v=beta&t=sXIUYv43jd7a3aeiimRpP1WEczZ2Kw9NVf0xLJr1nUM" 
          alt="Jairo Acosta" 
          className="w-32 h-32 rounded-3xl object-cover shadow-lg border-4 border-white"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">Jairo Acosta Solano</h1>
          <p className="text-primary font-bold text-lg">Data Scientist | Full Stack Developer</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">mail</span> jairo.acosta.solano@gmail.com</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">phone_iphone</span> +57 300 526 7650</span>
          </div>
        </div>
      </div>

      {/* Secciones del CV */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experiencia */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
            <span className="material-symbols-outlined text-blue-500">history</span>
            Experiencia Profesional
          </h2>
          <div className="space-y-6">
            <ExperienceItem 
              title="Asesor Tecnológico"
              company="Gobernación de Bolívar"
              period="2020 - Presente"
              description="Transformación digital y analítica para la Secretaría de Hábitat."
            />
            <ExperienceItem 
              title="Científico de Datos"
              company="JAS Data"
              period="2020 - Presente"
              description="Consultoría senior en Business Analytics y Market Intelligence."
            />
            <ExperienceItem 
              title="Coordinador de Investigación"
              company="Corp. Universitaria Rafael Núñez"
              period="2016 - Presente"
              description="Liderazgo de I+D+i en la Facultad de Ingeniería."
            />
          </div>
        </section>

        {/* Educación y Certificados */}
        <div className="space-y-10">
          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <span className="material-symbols-outlined text-purple-500">school</span>
              Educación Elite
            </h2>
            <div className="space-y-4">
              <EducationItem school="Stanford University" degree="Machine Learning, Modelado de Datos" year="2024" />
              <EducationItem school="UC San Diego" degree="Predictive Modeling & Data Visualization" year="2023" />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <span className="material-symbols-outlined text-green-500">verified</span>
              Certificaciones Clave
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Prompt Engineering', 'Pensamiento Científico', 'Tableau Desktop I', 'Gestión Ágil'].map(cert => (
                <span key={cert} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200">{cert}</span>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <span className="material-symbols-outlined text-orange-500">psychology</span>
              Aptitudes
            </h2>
            <div className="grid grid-cols-1 gap-2">
              <AptitudeItem label="NLP (Procesamiento de Lenguaje Natural)" value={95} />
              <AptitudeItem label="Machine Learning (Aprendizaje Automático)" value={90} />
              <AptitudeItem label="Business Intelligence" value={88} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem: React.FC<{ title: string; company: string; period: string; description: string }> = ({ title, company, period, description }) => (
  <div className="relative pl-6 border-l-2 border-slate-100 space-y-1">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-sm"></div>
    <h4 className="font-bold text-slate-900 leading-tight">{title}</h4>
    <p className="text-primary font-bold text-xs uppercase tracking-wider">{company}</p>
    <p className="text-slate-400 text-[11px] font-bold">{period}</p>
    <p className="text-slate-500 text-sm mt-1">{description}</p>
  </div>
);

const EducationItem: React.FC<{ school: string; degree: string; year: string }> = ({ school, degree, year }) => (
  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center group hover:border-primary/50 transition-all">
    <div>
      <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{school}</h4>
      <p className="text-slate-500 text-sm">{degree}</p>
    </div>
    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{year}</span>
  </div>
);

const AptitudeItem: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-primary" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

export default ProfileView;
