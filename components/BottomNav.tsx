
import React from 'react';
import { ViewType } from '../App';

interface Props {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const BottomNav: React.FC<Props> = ({ currentView, onNavigate }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 ios-blur border-t border-slate-100 px-6 py-4 pb-8 flex justify-around items-center z-50">
      <NavButton 
        icon="home" 
        label="Inicio" 
        active={currentView === 'home'} 
        onClick={() => onNavigate('home')} 
      />
      <NavButton 
        icon="history_edu" 
        label="Papers" 
        active={currentView === 'papers'} 
        onClick={() => onNavigate('papers')} 
      />
      <NavButton 
        icon="terminal" 
        label="Código" 
        active={currentView === 'code'} 
        onClick={() => onNavigate('code')} 
      />
      <NavButton 
        icon="person" 
        label="Perfil" 
        active={currentView === 'profile'} 
        onClick={() => onNavigate('profile')} 
      />
    </nav>
  );
};

const NavButton: React.FC<{ icon: string; label: string; active: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1.5 transition-all ${active ? 'text-primary scale-110' : 'text-slate-400'}`}
  >
    <span className={`material-symbols-outlined text-2xl ${active ? 'font-variation-fill' : ''}`}>{icon}</span>
    <span className="text-[10px] font-extrabold uppercase tracking-tight">{label}</span>
  </button>
);

export default BottomNav;
