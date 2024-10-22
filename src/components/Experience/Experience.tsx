import React from 'react'
import { experienceList } from './experienceList'
import ExperienceItem from './ExperienceItem'
import { Element } from 'react-scroll'
const learningList = [
  { skill: 'HTML', percentage: 50 },
  { skill: 'CSS', percentage: 50 },
  { skill: 'Networking', percentage: 25 },
  { skill: 'React', percentage: 25 },
  { skill: 'Tailwind CSS', percentage: 50 },
]

function Experience() {
  return (
    <Element name="experience">
      <div className="bg-bg-primary shadow-inner">
        <div className="mx-auto w-[min(1000px,90%)] py-12 pb-20">
          <h2 className="bg-transparent font-display text-5xl text-text-primary">
            My Learnings
          </h2>

          {/* Creating the graph layout */}
          <div className="relative mt-10 grid grid-cols-5 gap-4 h-[400px] w-full mx-auto items-end">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full w-10 flex flex-col justify-between text-text-secondary">
              {[100, 75, 50, 25, 0].map((val) => (
                <p key={val} className="text-right text-lg">{val}%</p>
              ))}
            </div>

            {/* Graph bars */}
            {learningList.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center justify-end h-full">
                {/* Bar */}
                <div
                  className="w-12 bg-gradient-to-t from-blue-500 via-purple-600 to-pink-500 rounded-t-md shadow-md transition-transform duration-500 ease-in-out"
                  style={{ height: `${item.percentage}%` }}
                ></div>

                {/* Skill Label */}
                <p className="mt-2 text-center text-sm font-semibold text-text-primary">
                  {item.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Experience;
