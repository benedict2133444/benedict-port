import React from 'react'
import getImageUrl from 'utils/image-util'

function SkillCard(data) {
  const { id, name, thumbnail } = data
  return (
    <li key={id}>
      <div className="flex  h-48 w-44 flex-col items-center justify-center  gap-5 rounded-xl bg-bg-accent shadow-inner hover:bg-text-primary">
        <div className="max-w-[50px]">
          <img src={getImageUrl(thumbnail)} alt={name} />
        </div>
        <div>
          <span className="text-base  font-semibold text-white">{name}</span>
        </div>
      </div>
    </li>
  )
}

export default SkillCard
