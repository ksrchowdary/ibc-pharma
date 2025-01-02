import React from 'react';
import HeroSection from '../../components/shared/HeroSection';
import PublicationCard from '../../components/research/PublicationCard';

const Publications = () => {
  return (
    <div>
      <HeroSection
        title="Publications"
        description="Our latest research and scientific publications"
        imageSrc="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Scientific research papers"
      />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PublicationCard
            publication={{
              title: "Placeholder Publication",
              authors: ["Author 1", "Author 2"],
              date: "2024",
              journal: "Journal Name",
              link: "#"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Publications;