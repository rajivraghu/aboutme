import { Building, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Senior Product Developer",
      company: "SurveySparrow Pvt Ltd",
      period: "Dec 2023 - Present",
      achievements: [
        "Collaborated with the AI Team to Develop AI Tools",
        "Developed an Internal RFP-AI Tool, automating customer RFP processing and reducing time from days to minutes",
        "Created an Internal AI chatbot, reducing query resolution time to seconds",
        "Developed Email Validation Service, reducing disposable and invalid sign-ups",
        "Demonstrated rapid tech adaptability, elevating team capabilities"
      ],
      tags: ["AI Tools", "Python", "Node.js", "React", "OpenAI"]
    },
    {
      title: "Product Developer",
      company: "SurveySparrow Pvt Ltd",
      period: "July 2022 - Dec 2023",
      achievements: [
        "Enhanced system performance by 40% through expert troubleshooting",
        "Reduced project onboarding time by 10% through quick integration"
      ],
      tags: ["React", "Node.js", "TypeScript", "MongoDB"]
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