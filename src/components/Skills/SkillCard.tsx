import React from 'react'
import getImageUrl from 'utils/image-util'

function SkillCard({ id, name, thumbnail }) {
  return (
    <li key={id} className="transform transition-all hover:scale-105">
      <div className="flex h-48 w-44 flex-col items-center justify-center gap-5 rounded-xl bg-bg-accent shadow-lg shadow-black/30 hover:bg-gradient-to-b from-text-primary to-bg-accent hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 ease-in-out">
      
        <div className="w-20 h-20 p-2 bg-white rounded-full shadow-md">
          <img
            src={getImageUrl(thumbnail)}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <span className="text-lg font-bold text-white tracking-wide">
            {name}
          </span>
        </div>
      </div>
    </li>
  )
}

export default SkillCard