import { Building, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Lead Software Architect",
      company: "Opentext",
      period: "May 2012 - Present",
      achievements: [
        "Spearheading innovative solutions across design, development, and deployment",
        "Building B2B EDI integration solutions with customer-centric enterprise integrations",
        "Leading cloud-based microservices applications development with focus on security & scalability",
        "Mentoring teams and fostering a culture of continuous improvement"
      ],
      tags: ["Microservices", "Java/J2EE", "Spring", "Angular", "Google Cloud", "Generative AI"]
    },
    {
      title: "Software Engineer",
      company: "mNXT Consulting & Solutions Pvt. Ltd.",
      period: "August 2010 - May 2012",
      achievements: [
        "Developed Web and Mobile applications for Restaurant management",
        "Built solutions for Waste Management and Healthcare sectors",
        "Implemented Field Automation using Java, Android, iOS, and Spring"
      ],
      tags: ["Java", "Android", "iOS", "Spring"]
    }
    
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">
          <span>Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Building size={18} />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="experience-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}