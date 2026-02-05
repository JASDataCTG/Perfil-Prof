
export interface Publication {
  id: string;
  journal: string;
  year: number;
  title: string;
  description: string;
  views: string;
  pdfUrl: string;
}

export interface Project {
  id: string;
  title: string;
  status: 'active' | 'archived';
  description: string;
  teamSize?: number;
  progress?: number;
}

export interface GitHubRepo {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  tags: string[];
}

export type FilterType = 'Todas' | 'Ciencia de Datos' | 'E-learning' | 'NLP' | 'Inteligencia Empresarial' | 'Ingeniería de Software';
