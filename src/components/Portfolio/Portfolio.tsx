import React from 'react'
import { projectList } from './projectList'
import PortfolioCard from './PortfolioCard'
import { Element } from 'react-scroll'
function Portfolio() {
  return (
    <Element name="portfolio">
    <div className=" bg-bg-secondary py-10 pb-36">
      <div className="mx-auto w-[min(1000px,90%)]">
        <h2 className="my-8 text-center font-display text-5xl  text-white">
          Portfolio
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {projectList.map((project) => {
            const { name, description, thumbnail, id } = project
            return PortfolioCard(name, description, thumbnail, id)
          })}
        </ul>
      </div>
    </div>
    </Element>
  )
}

export default Portfolio
