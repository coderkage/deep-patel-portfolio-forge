
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubLink, index }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full animate-fade-in-up"
         style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-foreground/80 text-sm mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-1">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-primary hover:underline mt-auto"
      >
        <Github className="mr-2 h-4 w-4" /> View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
