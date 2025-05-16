
import { portfolioData } from "@/data/portfolioData";
import Section from "./Section";
import { Mail, Phone, Linkedin, Github, Award as KaggleIcon } from "lucide-react";

const ContactSection = () => {
  const { email, phone, github, linkedin, kaggle } = portfolioData.contact;
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-lg text-foreground/80 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        <div className="space-y-4 mb-8">
          <a href={`mailto:${email}`} className="flex items-center justify-center text-lg text-primary hover:underline">
            <Mail className="mr-3 h-5 w-5" /> {email}
          </a>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center justify-center text-lg text-primary hover:underline">
            <Phone className="mr-3 h-5 w-5" /> {phone}
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={32} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={32} />
          </a>
          <a href={kaggle} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Kaggle">
            <KaggleIcon size={32} />
          </a>
        </div>
        {/* Placeholder for form if needed later */}
        {/* <div className="mt-12">
          <p className="text-muted-foreground">Or send me a message directly:</p>
          // Form component here
        </div> */}
      </div>
    </Section>
  );
};

export default ContactSection;
