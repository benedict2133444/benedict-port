import React from 'react'
import { experienceList } from './experienceList'
import ExperienceItem from './ExperienceItem'
import { Element } from 'react-scroll'
function Experience() {
  return (
    <Element name="experience">
    <div className=" bg-bg-accent shadow-inner ">
      <div className="mx-auto w-[min(1000px,90%)] py-12 pb-20">
        <h2 className="bg-transparent font-display text-5xl text-white">
          Experience
        </h2>

        <div>{experienceList.map((item) => ExperienceItem(item))}</div>
      </div>
    </div>
    </Element>
  )
}

export default Experience
