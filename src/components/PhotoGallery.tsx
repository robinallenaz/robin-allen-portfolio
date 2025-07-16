import React from 'react';
import { photos } from '../lib/data';

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-20">
      <h2 className="text-3xl font-bold text-github-text mb-8">
        Community Involvement
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm">{photo.caption}</p>
              {photo.event && (
                <p className="text-pink-300 text-xs mt-1">{photo.event}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
