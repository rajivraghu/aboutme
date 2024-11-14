import { Code2, Layout, Server, Database, Brain, Wrench } from 'lucide-react';

export default function Skills() {
  const skillSections = [
    {
      icon: <Code2 size={24} />,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python"]
    },
    {
      icon: <Layout size={24} />,
      title: "Frontend",
      skills: ["React", "Redux", "Next.js", "HTML/CSS"]
    },
    {
      icon: <Server size={24} />,
      title: "Backend",
      skills: ["Node.js", "Hapi.js", "FastAPI"]
    },
    {
      icon: <Database size={24} />,
      title: "Database",
      skills: ["PostgreSQL", "Firebase", "Pinecone"]
    },
    {
      icon: <Brain size={24} />,
      title: "AI & ML",
      skills: ["OpenAI Integration", "Vector Databases", "AI Tools Development"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Other Skills",
      skills: ["Git", "Agile", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">
          <span>Skills & Expertise</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {skillSections.map((section, index) => (
            <div key={index} className="skill-card p-6">
              <div className="skill-icon">
                {section.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">{section.title}</h3>
              <ul className="text-center space-y-2 text-gray-600">
                {section.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}