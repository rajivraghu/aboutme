import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="section-title">
          <span>Get in Touch</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <p className="text-gray-600 text-lg mb-8">
          Based in Bengaluru, India
        </p>
        <div className="space-y-4 mb-8">
          <a href="tel:+919591523989" className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors block">
            +91 959 152 3989
          </a>
          <a href="mailto:rajiv.vedavyas@gmail.com" className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors block">
            rajiv.vedavyas@gmail.com
          </a>
        </div>
      
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://github.com/rajivraghu" className="social-link" target="_blank" >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/rajiv-raghunathan-31612827/" className="social-link" target="_blank">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
      
        </div>
      </div>
    </section>
  );
}