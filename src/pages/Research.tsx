import React from 'react';
import ResearchHero from '../components/research/ResearchHero';
import ResearchCapabilities from '../components/research/ResearchCapabilities';
import PublicationCard from '../components/research/PublicationCard';
import type { Publication } from '../types';

const publications: Publication[] = [
  {
    title: 'Novel Tissue Adhesive Technology: A Comparative Study',
    authors: ['Chen, S.', 'Roberts, M.', 'Thompson, E.'],
    date: '2023',
    journal: 'Journal of Medical Innovation',
    link: '#'
  },
  {
    title: 'Clinical Applications of Advanced Surgical Adhesives',
    authors: ['Thompson, E.', 'Chen, S.'],
    date: '2022',
    journal: 'Surgical Technology International',
    link: '#'
  },
  {
    title: 'Gastroenterological Solutions: A New Approach',
    authors: ['Roberts, M.', 'Thompson, E.'],
    date: '2022',
    journal: 'Journal of Gastroenterology',
    link: '#'
  }
];

const Research = () => {
  return (
    <div>
      <ResearchHero />
      <ResearchCapabilities />
      
      {/* Publications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication) => (
              <PublicationCard key={publication.title} publication={publication} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Trials */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Ongoing Clinical Trials</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">ISEAL-2023: Phase III Clinical Trial</h3>
              <p className="text-gray-600 mb-4">
                Evaluating the long-term efficacy of ISEAL™ Surgical Adhesive in complex surgical procedures.
              </p>
              <div className="space-y-2">
                <p><strong>Status:</strong> Recruiting</p>
                <p><strong>Location:</strong> Multiple Centers</p>
                <p><strong>Expected Completion:</strong> December 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;