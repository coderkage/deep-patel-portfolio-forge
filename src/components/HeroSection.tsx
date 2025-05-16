
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Section from "./Section";

const HeroSection = () => {
  return (
    <Section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gradient-to-br from-background to-secondary/30 dark:to-secondary/10">
      <div className="space-y-8">
        <img
          src={portfolioData.photoPlaceholder}
          alt="Deep Patel"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto shadow-xl border-4 border-primary/50 object-cover animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground/80">
            {portfolioData.name}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {portfolioData.tagline}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="btn-primary shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300">
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </Button>
          <a href="#contact">
            <Button size="lg" variant="outline" className="btn-outline shadow-lg hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
