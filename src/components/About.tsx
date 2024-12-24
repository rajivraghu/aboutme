export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="section-title">
          <span>About Me</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Passionate about cutting-edge technologies, I bring over 13 years of experience in
          Java/J2EE, Microservices, Cloud, Generative AI, B2B and SaaS. Consistently delivering
          innovative software solutions. My dedication to quality and timely project completions
          is underpinned by Agile methodologies and a commitment to continuous learning.
        </p>
        <div className="space-y-4 mb-8">
          Leading by example, I drive teams towards technological excellence, always exploring
          new advancements to enhance our work. This relentless pursuit of innovation and
          excellence defines my professional journey.
        </div>
        <div className="flex justify-center">
          <a href="https://azgtfjdrmzsjrajaiocv.supabase.co/storage/v1/object/public/rajivraghu_resume/Rajiv_Raghunathan_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="mt-8 px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}