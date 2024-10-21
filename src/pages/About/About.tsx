import React from 'react'
import Header from '../../components/Header/Header'

function About() {
  return (
    <div className="min-h-screen bg-bg-primary"style={{backgroundColor:  '#00000'}}>
      <Header />
      <div className="min-h-screen bg-bg-primary  py-16">
        <div className="mx-auto w-[min(1000px,90%)]">
          <h2 className="mb-8">
            <span className="font-display text-5xl text-white">About</span>
          </h2>
          <p className="text-white italic tracking-wide">
            My name is Benedict Masculino. I'm 20 years old, and I'm from Oton, Iloilo.
I love to play basketball because I'm totally fixated with it.
and as for my hobbies, I love listening to music especially metal bands like slipknot and korn. My favorite color is black probably for the base color, and blue for the Secondary color.
As for my personality, I'm just a normal guy with a bit of a mischievous type. Ambivert and I like to hangout with friends. But I'm totally responsible especially in school.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
