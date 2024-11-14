import { Github, Linkedin, Twitter, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1"></div>
          <div className="hidden md:flex justify-center gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="flex-1 flex justify-end gap-4 items-center">
            <ThemeToggle />
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background">
            <div className="flex flex-col items-center gap-4">
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Education</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}