
import { BookOpenText, Github } from "lucide-react"; // Added BookOpenText
import { Link } from "react-router-dom"; // Added Link for internal navigation

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  // githubLink: string; // We'll show this on the detail page
  slug: string; // Added slug
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, slug, index }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full animate-fade-in-up transform hover:scale-[1.03] hover:border-primary"
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
      <Link
        to={`/project/${slug}`}
        className="inline-flex items-center text-sm text-primary hover:underline mt-auto"
      >
        <BookOpenText className="mr-2 h-4 w-4" /> View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
