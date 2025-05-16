
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Section from "./Section";

const HeroSection = () => {
  return (
    <Section 
      id="home" 
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gradient-to-br from-background to-secondary/30 dark:to-secondary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
          {/* Left Column: Text Content */}
          <div className="md:w-3/5 lg:w-1/2 space-y-6 text-center md:text-left">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight animate-fade-in-up" 
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground/80 dark:to-primary/80">
                {portfolioData.name}
              </span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-fade-in-up leading-relaxed md:leading-loose" 
              style={{ animationDelay: '0.6s' }}
            >
              {portfolioData.tagline}
            </p>
            <div 
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up" 
              style={{ animationDelay: '0.8s' }}
            >
              <Button size="lg" className="btn-primary shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="btn-outline shadow-lg hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 w-full">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-2/5 lg:w-1/2 flex justify-center md:justify-end">
            <img
              src={portfolioData.photoPlaceholder}
              alt="Deep Patel"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full shadow-xl border-4 border-primary/50 object-cover animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
