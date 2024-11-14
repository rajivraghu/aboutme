import { Code2, Layout, Server, Database, Brain, Wrench } from 'lucide-react';

export default function Skills() {
  const skillSections = [
    {
      icon: <Code2 size={24} />,
      title: "Core Technologies",
      skills: ["Java", "J2EE", "Spring Framework", "JavaScript", "Angular"]
    },
    {
      icon: <Layout size={24} />,
      title: "Architecture & Design",
      skills: ["Microservices", "Design Patterns", "RESTful Services", "Enterprise Integration"]
    },
    {
      icon: <Server size={24} />,
      title: "Cloud & DevOps",
      skills: ["Google Cloud", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      icon: <Database size={24} />,
      title: "Data & Messaging",
      skills: ["SQL", "NoSQL", "Kafka"]
    },
    {
      icon: <Brain size={24} />,
      title: "Emerging Tech",
      skills: ["Generative AI", "OpenAI", "B2B SaaS"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools & Methods",
      skills: ["Git", "Agile/Scrum", "Technical Leadership"]
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