
import { portfolioData } from "@/data/portfolioData";
import Section from "./Section";
import { Mail, Linkedin, Github, Award as KaggleIcon } from "lucide-react"; // Using Award for Kaggle as placeholder

const AboutSection = () => {
  const { description, links } = portfolioData.about;
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
          {description}
        </p>
        <div className="flex justify-center md:justify-start space-x-6">
          <a href={`mailto:${links.email}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={28} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={28} />
          </a>
          <a href={links.kaggle} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Kaggle">
            <KaggleIcon size={28} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
