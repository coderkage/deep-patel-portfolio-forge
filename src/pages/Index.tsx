
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
// Import other sections as they are built
// import EducationSection from "@/components/EducationSection";
// import ExperienceSection from "@/components/ExperienceSection";
// import SkillsSection from "@/components/SkillsSection";
// import PublicationsSection from "@/components/PublicationsSection";
// import CertificationsSection from "@/components/CertificationsSection";


const Index = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      {/* <EducationSection /> */}
      {/* <SkillsSection /> */}
      {/* <PublicationsSection /> */}
      {/* <CertificationsSection /> */}
      <ContactSection />
      {/* Optional: Blog and Testimonials placeholders */}
      {/* <Section id="blog" title="Blog">
        <p className="text-center text-muted-foreground">Coming soon: AI/ML research writeups and case studies.</p>
      </Section> */}
      {/* <Section id="testimonials" title="Testimonials">
        <p className="text-center text-muted-foreground">Coming soon: Quotes from peers, mentors, or collaborators.</p>
      </Section> */}
    </>
  );
};

export default Index;
