import React from 'react';
import { contactLinks } from '../lib/data';

export default function PixelArt() {
  return (
    <a 
      href={contactLinks.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-10 pixel-art cursor-pointer"
    >
      <div className="pixel-github">
        {/* Cat ears */}
        <div className="pixel-row">
          <div className="pixel bg-red-400/80"></div>
          <div className="pixel empty"></div>
          <div className="pixel empty"></div>
          <div className="pixel empty"></div>
          <div className="pixel bg-orange-400/80"></div>
        </div>
        {/* Top of head */}
        <div className="pixel-row">
          <div className="pixel bg-yellow-400/80"></div>
          <div className="pixel bg-green-400/80"></div>
          <div className="pixel bg-green-400/80"></div>
          <div className="pixel bg-blue-400/80"></div>
          <div className="pixel bg-indigo-400/80"></div>
        </div>
        {/* Eyes and face */}
        <div className="pixel-row">
          <div className="pixel bg-purple-400/80"></div>
          <div className="pixel empty"></div>
          <div className="pixel bg-pink-400/80"></div>
          <div className="pixel empty"></div>
          <div className="pixel bg-red-400/80"></div>
        </div>
        {/* Whiskers and chin */}
        <div className="pixel-row">
          <div className="pixel bg-orange-400/80"></div>
          <div className="pixel bg-yellow-400/80"></div>
          <div className="pixel bg-green-400/80"></div>
          <div className="pixel bg-blue-400/80"></div>
          <div className="pixel bg-indigo-400/80"></div>
        </div>
        {/* Bottom curve */}
        <div className="pixel-row">
          <div className="pixel empty"></div>
          <div className="pixel bg-purple-400/80"></div>
          <div className="pixel bg-pink-400/80"></div>
          <div className="pixel bg-red-400/80"></div>
          <div className="pixel empty"></div>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="glass-effect px-3 py-1 text-sm pride-gradient whitespace-nowrap rounded-lg">
          Visit My GitHub
        </div>
      </div>
    </a>
  );
}
