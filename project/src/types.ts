export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  status?: 'ongoing' | 'completed';
}

export interface Experience {
  company: string;
  role: string;
  description: string;
}

export interface Certification {
  title: string;
  provider: string;
  certificateLink: string;
}

export interface Skill {
  category: string;
  items: string[];
}