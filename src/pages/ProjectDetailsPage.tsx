
import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { portfolioData } from '@/data/portfolioData';
import NotFound from './NotFound';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Section from '@/components/Section'; // Re-using Section for consistent padding and title styling

const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioData.projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <Section id={`project-${project.slug}`} title={project.title} className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <RouterLink to="/#projects" className="mb-8 inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Projects
        </RouterLink>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-lg">
          <p className="text-foreground/80 text-base mb-6">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.githubLink && (
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> View on GitHub
                </a>
              </Button>
            )}
            {/* Placeholder for a live demo link, if you add it to your data later */}
            {/* {project.liveLink && (
              <Button asChild variant="default">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" /> View Live Demo
                </a>
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectDetailsPage;
