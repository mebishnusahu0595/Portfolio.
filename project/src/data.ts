import { Project, Experience, Certification, Skill } from './types';

export const projects: Project[] = [
  {
    title: 'Fams Bot',
    description: 'AI-powered virtual therapy bot for mental health',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
    status: 'ongoing',
  },
  {
    title: 'Customer Behavior Prediction',
    description: 'Predicts buying patterns using ML models',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    title: 'Student Data Analysis',
    description: 'Analyzing academic performance trends using Python',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3',
  },
  {
    title: 'Hotel Data Dashboard',
    description: 'Interactive Power BI dashboard for hotel industry analytics',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    title: 'Stock Market Prediction',
    description: 'Using ML models to predict stock prices',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
  {
    title: 'Autism Therapy Person Detection',
    description: 'YOLOv8 & DeepSORT-based tracking system at CogniAble',
    image: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3',
  },
];

export const experience: Experience[] = [
  {
    company: 'CodeAlpha',
    role: 'Data Science Intern',
    description: 'Worked on Data Analysis, Machine Learning models, and visualization projects.',
  },
  {
    company: 'CogniAble',
    role: 'Data Science/ML Algorithm Developer',
    description: 'Developed real-time person detection & tracking models using YOLOv8 for Autism therapy.',
  },
];

export const certifications: Certification[] = [
  {
    title: 'NLP Course',
    provider: 'NullClass',
    certificateLink: 'https://www.nullclass.com/certificates/66c1fbe78869b16ce12a1478',
  },
  {
    title: 'Data Science',
    provider: 'Cognitive Class',
    certificateLink: 'https://courses.cognitiveclass.ai/certificates/3fa13ae566e3460caebb4705833714a1',
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'R'],
  },
  {
    category: 'Machine Learning',
    items: ['Scikit-learn', 'TensorFlow', 'PyTorch'],
  },
  {
    category: 'Deep Learning',
    items: ['CNN', 'LSTMs', 'NLP'],
  },
  {
    category: 'Big Data',
    items: ['Hadoop', 'Spark'],
  },
  {
    category: 'Data Visualization',
    items: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Cloud Services',
    items: ['AWS', 'Google Cloud'],
  },
  {
    category: 'Version Control',
    items: ['Git', 'GitHub'],
  },
  {
    category: 'APIs & Web Scraping',
    items: ['Flask', 'BeautifulSoup', 'OpenAI API'],
  },
];