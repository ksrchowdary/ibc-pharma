import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Publication } from '../../types';

const PublicationCard: React.FC<{ publication: Publication }> = ({ publication }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
      <p className="text-gray-600 mb-2">{publication.authors.join(', ')}</p>
      <p className="text-blue-800 mb-4">{publication.journal} • {publication.date}</p>
      <a 
        href={publication.link}
        className="inline-flex items-center text-blue-800 hover:text-blue-900"
      >
        Read Publication
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

export default PublicationCard;