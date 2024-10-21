import React from 'react'
import getImageUrl from 'utils/image-util'

function ContactItem(data) {
  const { id, thumbnail, detail } = data
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
      <p className="text-lg font-light text-text-primary">{detail}</p>
    </div>
  )
}

export default ContactItem
