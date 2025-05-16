
import { portfolioData } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const ProjectsSection = () => {
  return (
    <Section id="projects" title="My Projects" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
