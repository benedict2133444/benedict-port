import React from 'react'
import Header from '../../components/Header/Header'
import {default as Contacts} from '../../components/Contact/Contact'

function Contact() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
<Contacts/>
    </div>
  )
}

export default Contact
