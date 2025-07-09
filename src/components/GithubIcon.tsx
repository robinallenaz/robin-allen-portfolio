import React from 'react';
import { contactLinks } from '../lib/data';
import githubIcon from '../images/github+rainbow-1330289839139440796_0px.svg';

export default function GithubIcon() {
  return (
    <a 
      href={contactLinks.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-10 inline-block"
    >
      <img 
        src={githubIcon} 
        alt="GitHub"
        className="w-6 h-6 transition-transform duration-300 hover:scale-110"
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="glass-effect px-2 py-1 text-xs text-white/90 whitespace-nowrap rounded">
          GitHub
        </div>
      </div>
    </a>
  );
}
