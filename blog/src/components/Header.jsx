import React from 'react';
import { Link } from 'react-router-dom';
import { Github, PenTool } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass" style={{
      position: 'sticky',
      top: '1rem',
      margin: '1rem 2rem',
      zIndex: 100,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <PenTool size={24} className="gradient-text" />
        <span className="gradient-text" style={{ fontSize: '1.5rem' }}>MyDevLog</span>
      </Link>
      
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Posts</Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
