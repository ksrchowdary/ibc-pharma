import React from 'react';

const timelineEvents = [
  { year: '1980', title: 'Foundation', description: 'IBC Pharma established with a focus on medical adhesives' },
  { year: '1995', title: 'First Patent', description: 'Revolutionary tissue adhesive technology patented' },
  { year: '2005', title: 'Global Expansion', description: 'Expanded operations to 30+ countries' },
  { year: '2015', title: 'Gastrocare Launch', description: 'Launched innovative gastroenterological solutions' },
  { year: '2020', title: 'Research Milestone', description: '50th research publication milestone achieved' }
];

const Timeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="w-5/12"></div>
            <div className="w-2/12 flex justify-center">
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800">{event.year}</h3>
              <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;