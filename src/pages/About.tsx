import AboutHero from '../components/about/AboutHero';
import Timeline from '../components/about/Timeline';
import TeamMember from '../components/about/TeamMember';
import { AwardIcon, TargetIcon, MicroscopeIcon } from 'lucide-react';
import type { TeamMember as TeamMemberType } from '../types';

const teamMembers: TeamMemberType[] = [
  {
    name: 'Ravindra Nath Tagore',
    role: 'President and CEO',
    education: 'MSc, IIT Kanpur',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    bio: 'Over Three decades of experience in sterile Pharmaceutical Manufacturing and Running a Pharmaceutical establishment. He is responsible for the R&D and the operations.'
  },
  {
    name: 'Deepak Kabbur',
    role: 'Head of Research & Development',
    education: 'B Pharm.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    bio: 'Has more than 2.5 decades of experience in leading pharmaceutical companies in India & abroad at various positions in Operations, QA, Product Development.'
  },
  {
    name: 'Shubham Mishra',
    role: 'Girector',
    education: 'B.E Mechanical',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    bio: 'An engineer by profession, he carries with him rich experience in sales, marketing & business development for Hitech industrial machinery and automation projects. He is Managing Director of Brio Pharma Technology Pvt. Ltd and Brio Energy Pvt. Ltd.. He is one of the early seed investor in IBC Pharmaceutical Pvt. Ltd. He is holding a position of Director and advises on the Technological and packaging aspects. '
  },
  {
    name: 'Rajeev Kabbur',
    role: 'Board of Director ',
    education: 'B.E Mechanical',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    bio: 'Over 3 decades of Experience in Pharmaceutical Industry at various positions in Plant and maintenance, Regulatory sciences and Sales and Marketing. Presently Working as Board of Director Marketing, Regulatory and R&D with Brevetti Angela SRL, Italy. Manufacturing sterile Blow Fill and Seal machines for IV fluids, Eye Drops, Inhalation Products and Patented Pre Filled Syringes Blow Fill and Seal machine. \n' +
        'He is Holding position of Director overlooking the R&D Packaging Development and bringing on\n' +
        'the newer innovations.'
  }
];

const About = () => {
  return (
    <div>
      <AboutHero />
      
      {/* Vision & Mission */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <TargetIcon className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg">
                To be the global leader in innovative medical solutions, improving patient outcomes worldwide.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <MicroscopeIcon className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg">
                Advancing healthcare through cutting-edge research and development in tissue adhesive technology and gastroenterological solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <Timeline />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Quality Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <AwardIcon className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 13485:2016</h3>
              <p className="text-gray-600">Medical Devices Quality Management Systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <AwardIcon className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality Management Systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <AwardIcon className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">CE Marking</h3>
              <p className="text-gray-600">European Conformity Certification</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;