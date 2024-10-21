import React from 'react'

function ExperienceItem(data) {
  const { id, title, location, date, description } = data
  return (
    <div key={id} className="mb-6 mt-10">
      <h3 className="text-2xl text-white">{title}</h3>
      <div className="mb-3  flex justify-between text-lg text-white">
        <p>{location}</p>
        <p>{date}</p>
      </div>

      <ul className="ml-4 list-disc text-sm text-text-accent">
        {description.map((item, index) => {
          return <li key={`${id}` + `${index}`}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ExperienceItem
