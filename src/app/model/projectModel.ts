export interface Project {
  slug: string;
  title: string;
  imgUrl: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;

  roles: string[];
  features: string[];

  architecture: string[];
  techStack: string[];

  challenges: {
    problem: string;
    solution: string;
  }[];

  outcomes: string[];

  liveDemo?: string;
  github?: string;
}
