import React from 'react'
import { Element } from 'react-scroll'

function About() {
  return (
    <Element name="about">
      <div className="min-h-screen bg-bg-primary flex items-center justify-center py-16">
        
        <div className="bg-black bg-opacity-90 p-8 rounded-lg shadow-md w-[min(1000px,90%)] text-center">
          <h2 className="mb-8">
            <span className="font-display text-5xl text-text-primary">ABOUT</span>
          </h2>
          <p className="text-white text-lg italic tracking-wide leading-relaxed max-w-prose mx-auto">
            My name is <span className="font-semibold">Benedict Masculino</span>. I'm 20 years old, and I'm from Oton, Iloilo. I love playing basketball because I'm totally fixated on it. 
            As for my hobbies, I enjoy listening to music, especially metal bands like <span className="text-blue-400">Slipknot</span> and <span className="text-blue-400">Korn</span>. 
            My favorite colors are <span className="text-blue-400">black</span> (probably for the base) and <span className="text-blue-400">blue</span> (for the secondary color).
            <br /><br />
            As for my personality, I'm just a normal guy with a bit of a mischievous side. I'm an ambivert who enjoys hanging out with friends, and I'm totally responsible, especially in school (sometimes!).
          </p>
        </div>
      </div>
    </Element>
  );
}

export default About;