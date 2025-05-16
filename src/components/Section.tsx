
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', title }) => {
  return (
    <section id={id} className={`section-padding container mx-auto ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}>
          {title}
        </h2>
      )}
      <div className="animate-fade-in-up" style={{ animationDelay: title ? '0.4s' : '0.2s' }}>
        {children}
      </div>
    </section>
  );
};

export default Section;
