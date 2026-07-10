// src/components/ProjectList.tsx
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  images: string[];
  imageAlt: string;
  points: string[];
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} {...project} featured={index === 0} />
      ))}
    </div>
  );
}