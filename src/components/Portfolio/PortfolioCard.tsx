import React from 'react'
import getImageUrl from 'utils/image-util'

function PortfolioCard(name, desc, thumbnail, id) {
  return (
    <li key={id} className="">
      <div className="relative">
        <img
          src={getImageUrl(thumbnail)}
          alt={name}
          className="max-w-[300px] object-cover"
        />
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-start px-4 pt-6">
          <h3 className="mb-4 text-xl text-white">{name}</h3>

          <p className="px-3 text-sm text-text-accent">{desc}</p>
        </div>
      </div>
    </li>
  )
}

export default PortfolioCard
