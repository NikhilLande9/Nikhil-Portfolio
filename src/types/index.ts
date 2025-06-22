export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  type: 'work' | 'education';
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}