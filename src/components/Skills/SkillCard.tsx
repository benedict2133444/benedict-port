import React from 'react';
import getImageUrl from 'utils/image-util';

function SkillCard({ id, name, thumbnail }) {
  return (
    <li key={id} className="transform transition-transform hover:scale-105">
      <div className="flex flex-col items-center justify-center h-56 w-48 p-6 rounded-xl bg-bg-accent shadow-lg shadow-black/30 transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-blue-600 to-blue-800 hover:shadow-2xl">
        {/* Thumbnail Image */}
        <div className="w-24 h-24 p-2 bg-white rounded-full shadow-md flex items-center justify-center">
          <img
            src={getImageUrl(thumbnail)}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Skill Name */}
        <div className="mt-4 text-center">
          <span className="text-lg font-semibold text-white tracking-wide shadow-md">
            {name}
          </span>
        </div>
      </div>
    </li>
  );
}

export default SkillCard;