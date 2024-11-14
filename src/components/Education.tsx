import { GraduationCap, Building2, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "BE Electronics and Communication Engineering",
      school: "Visvesvaraya Technological University",
      period: "June 2006 - June 2010",
      location: "Bengaluru, Karnataka, India"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">
          <span>Education</span>
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold">{edu.degree}</h3>
              </div>
              <div className="space-y-2 text-gray-600 ml-16">
                <div className="flex items-center gap-2">
                  <Building2 size={18} />
                  <span>{edu.school}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{edu.period}</span>
                </div>
                <p className="font-semibold">Location: {edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}