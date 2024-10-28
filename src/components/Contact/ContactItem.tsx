import React from 'react'
import getImageUrl from 'utils/image-util'

function ContactItem(data) {
  const { id, thumbnail, detail, href } = data
  return (
    <div
      key={id}
      className="flex w-[250px] gap-3 rounded-lg bg-bg-accent px-4 py-3 shadow-inner"
    >
      <div className="max-w-8">
        <img
          src={getImageUrl(thumbnail)}
          alt={detail}
          className="object-cover"
        />
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-light text-bold text-text-secondary"
        >
          {detail}
        </a>
      ) : (
        <span className="text-lg font-light text-bold text-text-secondary">
          {detail}
        </span>
      )}
    </div>
  )
}

export default ContactItem
