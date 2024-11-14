export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">
          <span>About Me</span>
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md text-gray-600 leading-relaxed text-center">
          <p className="mb-6">
            I'm a Full Stack Developer with a strong foundation in both frontend and backend
            technologies, specializing in building scalable and efficient web applications. With expertise in
            JavaScript, TypeScript, Python, React, Node.js, and related frameworks, I focus on creating
            seamless, user-friendly experiences while maintaining clean, maintainable code.
          </p>
          <p>
            Over the past two years, I've developed web applications and AI tools that address real-world
            challenges, emphasizing performance, scalability, and usability. I'm passionate about
            leveraging my technical skills to contribute to innovative projects that push the boundaries of
            technology.
          </p>
          <button className="mt-8 px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}