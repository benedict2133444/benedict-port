import React from 'react';
import Header from '../../components/Header/Header';

function About() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <div className="min-h-screen bg-black bg-opacity-90 py-16">
        <div className="mx-auto w-[min(1000px,90%)] text-center p-4">
          <h2 className="mb-8 font-display text-6xl text-text-primary tracking-wide">
            ABOUT
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
    </div>
  );
}

export default About;
