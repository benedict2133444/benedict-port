import React from 'react'
import { Link } from 'react-router-dom'
import { navList } from './NavigationList'
function MainNav() {
  return (
    <>
      {navList.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`${item.route}`}>{item.name}</Link>
          </div>
        )
      })}
    </>
  )
}

export default MainNav
