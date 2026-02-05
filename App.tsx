
import React, { useState, useEffect } from 'react';
import { Publication, Project, FilterType, GitHubRepo } from './types';
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
import CodeView from './views/CodeView';

export type ViewType = 'home' | 'papers' | 'profile' | 'code';

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    journal: 'Procedia Computer Science 198, 512-517',
    year: 2022,
    title: 'Predictive models assessment based on CRISP-DM methodology for students performance in Colombia - Saber 11 Test',
    description: 'Evaluación de modelos predictivos para el rendimiento estudiantil utilizando la metodología CRISP-DM en el contexto de las pruebas de estado.',
    views: '62 Citaciones',
    pdfUrl: '#'
  },
  {
    id: '2',
    journal: 'Procedia Computer Science 198, 626-631',
    year: 2022,
    title: 'Design and Production of Educational Video Games for the Inclusion of Deaf Children',
    description: 'Diseño y producción de videojuegos educativos enfocados en la inclusión de niños con discapacidad auditiva.',
    views: '17 Citaciones',
    pdfUrl: '#'
  },
  {
    id: '3',
    journal: 'Información tecnológica 29 (1), 11-18',
    year: 2018,
    title: 'Prácticas de pruebas desde la industria de software. La plataforma asisto como caso de estudio',
    description: 'Análisis de prácticas de QA y testing en plataformas industriales aplicadas a entornos académicos.',
    views: '17 Citaciones',
    pdfUrl: '#'
  },
  {
    id: '4',
    journal: 'Revista Ingeniería e Innovación 6 (2), 13',
    year: 2018,
    title: 'Innovaciones Tecnológicas Para Inclusión Educativa De Estudiantes Sordos',
    description: 'Exploración de herramientas tecnológicas innovadoras para facilitar el aprendizaje de estudiantes sordos.',
    views: '9 Citaciones',
    pdfUrl: '#'
  },
  {
    id: '5',
    journal: 'Teknos revista científica 16 (2), 102-116',
    year: 2016,
    title: 'Modelo para la formación de profesores en y para la diversidad',
    description: 'Propuesta pedagógica para capacitar docentes en entornos educativos inclusivos y diversos.',
    views: '3 Citaciones',
    pdfUrl: '#'
  }
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    id: 'repo-1',
    name: 'crisp-dm-predictive-model',
    description: 'Implementación del modelo predictivo basado en la metodología CRISP-DM para pruebas Saber 11.',
    language: 'Python',
    stars: 12,
    forks: 5,
    url: 'https://github.com/jacostasolano',
    tags: ['Machine Learning', 'Data Science', 'Pandas']
  },
  {
    id: 'repo-2',
    name: 'asisto-automated-testing',
    description: 'Suite de pruebas automatizadas para la plataforma académica ASISTO utilizando Selenium y Python.',
    language: 'Python',
    stars: 8,
    forks: 2,
    url: 'https://github.com/jacostasolano',
    tags: ['QA', 'Testing', 'Selenium']
  },
  {
    id: 'repo-3',
    name: 'inclusion-games-engine',
    description: 'Motor base para videojuegos educativos inclusivos diseñados para niños con discapacidad auditiva.',
    language: 'TypeScript',
    stars: 15,
    forks: 4,
    url: 'https://github.com/jacostasolano',
    tags: ['React', 'Education', 'Accessibility']
  },
  {
    id: 'repo-4',
    name: 'market-intelligence-dashboard',
    description: 'Dashboard de inteligencia de mercado para el sector logístico en Cartagena.',
    language: 'JavaScript',
    stars: 10,
    forks: 3,
    url: 'https://github.com/jacostasolano',
    tags: ['Data Viz', 'D3.js', 'Logistics']
  },
  {
    id: 'repo-5',
    name: 'solar-regression-validator',
    description: 'Scripts de validación para modelos de regresión aplicados a datos de radiación solar.',
    language: 'R',
    stars: 5,
    forks: 1,
    url: 'https://github.com/jacostasolano',
    tags: ['Statistics', 'Energy', 'R-Lang']
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
      case 'code':
        return <CodeView repos={GITHUB_REPOS} />;
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
                {PUBLICATIONS.slice(0, 3).map(pub => (
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
