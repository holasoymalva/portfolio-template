export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}
