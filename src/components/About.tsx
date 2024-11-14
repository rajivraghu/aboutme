export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">
          <span>About Me</span>
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md text-gray-600 leading-relaxed text-center">
          <p className="mb-6">
            Passionate about cutting-edge technologies, I bring over 13 years of experience in
            Java/J2EE, Microservices, Cloud, Generative AI, B2B and SaaS. Consistently delivering
            innovative software solutions. My dedication to quality and timely project completions
            is underpinned by Agile methodologies and a commitment to continuous learning.
          </p>
          <p>
            Leading by example, I drive teams towards technological excellence, always exploring
            new advancements to enhance our work. This relentless pursuit of innovation and
            excellence defines my professional journey.
          </p>
          <button className="mt-8 px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}