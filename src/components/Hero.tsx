import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';
import profileImage from  '../assets/rajivr.jpg' ;

export default function Hero() {
  return (
    <section className="text-center py-12 md:py-20 px-4">
      <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8">
        <img
           src={profileImage}
          alt="Profile"
          className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-400 inline-block text-transparent bg-clip-text py-2 leading-normal">
        Rajiv Raghunathan
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
        Lead Software Architect at Opentext
      </p>
      <p className="text-gray-500 mb-8">
        13+ Years of Experience in Java/J2EE, Microservices, Cloud & Generative AI
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a href="mailto:rajiv.vedavyas@gmail.com" className="text-gray-600 hover:text-gray-900"><Mail size={24} /></a>
        <a href="https://www.linkedin.com/in/rajiv-raghunathan-31612827/" target="_blank"  className="text-gray-600 hover:text-gray-900"><Linkedin size={24} /></a>
        <a href="https://github.com/rajivraghu"  target="_blank" className="text-gray-600 hover:text-gray-900"><Github size={24} /></a>
      </div>
      <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-800 transition-colors">
        Let's Work Together <ArrowDown size={16} />
      </button>
    </section>
  );
}