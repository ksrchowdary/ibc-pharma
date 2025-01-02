import React from 'react';
import { LinkedinIcon, MailIcon } from 'lucide-react';
import type { TeamMember as TeamMemberType } from '../../types';

const TeamMember: React.FC<{ member: TeamMemberType }> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-blue-800 mb-3">{member.role}</p>
        <p className="text-blue-500 mb-3">{member.education}</p>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-800">
            <LinkedinIcon className="w-5 h-5"/>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-800">
            <MailIcon className="w-5 h-5"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;