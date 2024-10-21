import React from 'react'
import { contactList } from './contactList'
import { Element } from 'react-scroll'
import ContactItem from './ContactItem'
function Contact() {
  return (
    <Element name="contact">
      <div className="bg-bg-secondary">
        <div className="mx-auto w-[min(1000px,90%)] py-12">
          <h2 className="text-center font-display text-5xl text-white ">
            Contact Me
          </h2>
          <div className="flex justify-center py-16">
            <div className="flex max-w-[600px] flex-wrap justify-center gap-4">
              {contactList.map((item) => ContactItem(item))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Contact
