import React from 'react'
import background from '../cardsbg2.png'

const HeroSection = () => {
  return (
    <section className='grid grid-cols-1 grid-rows-1'>
        <img src={background} alt="Hero background" 
            className='col-start-1 row-start-1 col-span-1 row-span-1 w-full' />
        <div className='p-4 sm:px-10 col-start-1 row-start-1 self-center text-white'>
            <h1 className='font-bold text-8xl mb-6'>
                <span className='block'>Rise to</span> your challenge.
            </h1>
            <h2 className='text-4xl font-light mb-12'>Flashcards for <strong className='font-bold'>serious learners.</strong></h2>
            <button className='py-6 px-12 bg-cyan-500 hover:bg-cyan-600 transition-all font-semibold text-xl'>
                Find Flashcards</button>
            <button className="w-64 h-16 font-semibold text-xl hover:text-2xl transition-all">Watch video</button>
        </div>
    </section>
  )
}

export default HeroSection