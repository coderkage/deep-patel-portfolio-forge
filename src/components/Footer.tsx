
import { portfolioData } from "@/data/portfolioData";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p className="mt-1">{portfolioData.footerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
