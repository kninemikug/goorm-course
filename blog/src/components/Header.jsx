import React from 'react';
import { Link } from 'react-router-dom';
import { Github, PenTool } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-4 z-50 mx-4 md:mx-auto max-w-5xl rounded-2xl border border-white/5 bg-surface/50 backdrop-blur-xl shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 rounded-lg group-hover:scale-105 transition-transform duration-300 border border-white/5">
            <PenTool size={20} className="text-primary-glow" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
            MyDevLog
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Posts
          </Link>
          <Link to="/contact" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Contact
          </Link>
          <Link to="/design-system" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            System
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Github size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
