
import React, { useState, useEffect } from 'react';
import { Publication, Project, FilterType } from './types';
import ProfileHeader from './components/ProfileHeader';
import StatsSection from './components/StatsSection';
import ResearchFilter from './components/ResearchFilter';
import PublicationCard from './components/PublicationCard';
import ProjectCard from './components/ProjectCard';
import CollaborationCTA from './components/CollaborationCTA';
import BottomNav from './components/BottomNav';
import AIInsightsPanel from './components/AIInsightsPanel';
import PapersView from './views/PapersView';
import ProfileView from './views/ProfileView';

export type ViewType = 'home' | 'papers' | 'profile' | 'code';

const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    journal: 'Investigación Empresarial',
    year: 2021,
    title: 'Responsabilidad Social Empresarial como factor de competitividad',
    description: 'Análisis del impacto de la RSE en la sostenibilidad y posicionamiento de las empresas en el mercado actual.',
    views: '1.8k',
    pdfUrl: '#'
  },
  {
    id: '2',
    journal: 'Logística y Tecnología',
    year: 2019,
    title: 'Incidencia de las TIC en la competitividad de las PYMES del sector logístico de Cartagena',
    description: 'Estudio sobre la transformación digital en pequeñas y medianas empresas dedicadas a la logística portuaria.',
    views: '2.1k',
    pdfUrl: '#'
  },
  {
    id: '3',
    journal: 'Educación Virtual',
    year: 2018,
    title: 'Implicaciones sociales y culturales del E-Learning',
    description: 'Exploración de los desafíos y beneficios de la adopción de entornos virtuales de aprendizaje en comunidades diversas.',
    views: '1.4k',
    pdfUrl: '#'
  }
];

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Asesor Tecnológico - Secretaría de Hábitat',
    status: 'active',
    description: 'Liderazgo en la transformación digital y gestión de datos para la Gobernación de Bolívar.',
    teamSize: 15
  },
  {
    id: '2',
    title: 'Científico de Datos - JAS Data',
    status: 'active',
    description: 'Desarrollo de asesorías y consultorías en Analítica de Datos, Market Intelligence y Visualización.',
    teamSize: 5
  }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [activeFilter, setActiveFilter] = useState<FilterType>('Todas');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'papers':
        return <PapersView publications={PUBLICATIONS} />;
      case 'profile':
        return <ProfileView />;
      case 'home':
      default:
        return (
          <div className="space-y-10">
            <ProfileHeader />
            <StatsSection />
            
            <div className="space-y-6">
              <ResearchFilter 
                activeFilter={activeFilter} 
                onFilterChange={setActiveFilter} 
              />
              <AIInsightsPanel topic={activeFilter === 'Todas' ? 'Analítica de Datos y E-learning' : activeFilter} />
            </div>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                  <span className="material-symbols-outlined text-blue-500">article</span>
                  Publicaciones Destacadas
                </h2>
                <button onClick={() => setCurrentView('papers')} className="text-sm font-semibold text-primary hover:underline">Ver todas</button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {PUBLICATIONS.slice(0, 2).map(pub => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                  <span className="material-symbols-outlined text-purple-500">work</span>
                  Experiencia Reciente
                </h2>
                <button onClick={() => setCurrentView('profile')} className="text-sm font-semibold text-primary hover:underline">Ver Perfil</button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {PROJECTS.map(proj => (
                  <ProjectCard key={proj.id} project={proj} />
                ))}
              </div>
            </section>

            <CollaborationCTA />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-24 md:pb-0">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 ios-blur shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('home')}>
            <span className="font-bold text-xl tracking-tight text-primary">Academic.io</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <span className="material-symbols-outlined block">search</span>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <span className="material-symbols-outlined block">share</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-4 flex-1 w-full">
        {renderContent()}
      </main>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 bg-white/80 ios-blur p-4 rounded-full shadow-lg border border-slate-100">
         <NavItem icon="home" label="Inicio" active={currentView === 'home'} onClick={() => setCurrentView('home')} />
         <NavItem icon="history_edu" label="Papers" active={currentView === 'papers'} onClick={() => setCurrentView('papers')} />
         <NavItem icon="terminal" label="Código" active={currentView === 'code'} onClick={() => setCurrentView('code')} />
         <NavItem icon="person" label="Perfil" active={currentView === 'profile'} onClick={() => setCurrentView('profile')} />
      </nav>

      <BottomNav currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
};

const NavItem: React.FC<{ icon: string; label: string; active?: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-primary scale-110' : 'text-slate-400 hover:text-slate-600'}`}
  >
    <span className="material-symbols-outlined text-2xl font-variation-fill">{icon}</span>
    <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
  </button>
);

export default App;
