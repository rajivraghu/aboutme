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
        <a href="mailto:ritesh.dubey.dev@gmail.com" className="text-2xl font-semibold text-gray-800 hover:text-gray-600 transition-colors mb-12 inline-block">
          ritesh.dubey.dev@gmail.com
        </a>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#" className="social-link">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="#" className="social-link">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="social-link">
            <Twitter size={20} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
}