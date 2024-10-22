import React from 'react'
import { Element } from 'react-scroll'

function About() {
  return (
    <Element name="about">
      <div className="relative bg-bg-primary py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-800 to-black opacity-30 pointer-events-none"></div>

        <div className="relative z-10 mx-auto w-[min(1000px,90%)] text-center">
          <h2 className="mb-8">
            <span className="font-display text-6xl text-text-primary tracking-wider">ABOUT</span>
          </h2>

          {/* Divider Line */}
          <div className="w-24 mx-auto mb-8 border-b-2 border-text-primary"></div>

          {/* About Text */}
          <p className="text-white text-xl italic tracking-wide leading-relaxed">
            <span className="font-semibold">My name is Benedict Masculino.</span> I'm 20 years old from Oton, Iloilo. I love playing basketball, and I'm totally fixated with it. 
            When I'm not on the court, I'm usually jamming to metal bands like Slipknot and Korn. <br />
            My favorite colors are <span className="text-blue-500 font-semibold">black</span> for the base and <span className="text-blue-400 font-semibold">blue</span> for the secondary.
          </p>

          {/* Fun Fact Section */}
          <div className="mt-10 p-4 bg-black/30 rounded-lg shadow-lg text-white italic">
            <h3 className="text-2xl font-bold mb-4">Fun Fact:</h3>
            <p className="text-lg">
              I’m an ambivert who loves hanging out with friends, but I can also be a little mischievous.
              I’m mostly responsible, especially when it comes to school... well, sometimes!
            </p>
          </div>

          {/* Icons Section (Optional) */}
          <div className="mt-12 flex justify-center gap-8 text-4xl text-text-primary">
            <i className="fas fa-basketball-ball"></i> {/* Basketball icon */}
            <i className="fas fa-music"></i>           {/* Music icon */}
            <i className="fas fa-smile"></i>            {/* Personality icon */}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About
