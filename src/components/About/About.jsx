import React from "react"
import Wave from '../../assets/Wave.svg'

export default function About () {
    return (
        <div name='about' className='w-full h-fit background-color'>
    
            <div className='flex flex-col justify-center items-center w-full h-full font-mono dark:bg-slate-800 dark:text-white'>
    
                {/* wave */}
                <div className=' w-full mb-16'> 
                    <img src={Wave} className='w-full py-14' alt='png of wave section divider'></img>
                </div>
    
                {/* title */}
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' data-aos='fade-right'> 
                    <div className='sm:text-right pb-8 pl-8'>
                        <p className='text-4xl font-display inline'>
                            About
                        </p>
                    </div>
                </div>
    
                {/* about me */}
                <div className='max-w-[1000px] px-8 py-2 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                    <div className='text-xl sm:text-lg sm:text-right font-bold'>
                        <p data-aos='fade-right'>Hello there! I'm Morgan.</p>
                    </div>
                    <div>
                        <p data-aos='fade-left'>I am a dedicated, creative, and innovative software engineer with a passion for finding efficient solutions to complex problems.</p>
                    </div>
                </div>
    
                <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                    <div className='text-xl sm:text-lg sm:text-right font-bold'>
                        <p data-aos='fade-right'>How I got here:</p>
                    </div>
                    <div data-aos='fade-left'>
                        <p>My passion for software engineering stemmed from my last role as a data analyst.</p>
                        <br></br>
                        <p>Watching the ideas in my mind come to life in the browser was like magic to me, <span className='italic'>and I've been hooked ever since.</span></p>
                    </div>
                </div>
    
                <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                    <div className='text-xl sm:text-lg sm:text-right font-bold'>
                        <p data-aos='fade-right'>My experience:</p>
                    </div>
                    <div data-aos='fade-left'>
                        <p>I just graduated a coding bootcamp and have accumulated over 450 hours of coding experience.</p>
                        <br></br>
    
                        <p>I am proficient in object-oriented programming, MVC frameworks, RESTful API development, and team collaboration strategies.</p>
                    </div>
                </div>
    
                <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                    <div className='text-xl sm:text-lg sm:text-right font-bold'>
                        <p data-aos='fade-right'>What am I up to?</p>
                    </div>
                    <div data-aos='fade-left'>
                        <p>I am actively seeking an entry level software engineer role to work on functional projects and contribute to company missions.</p>
                        <br></br>
                        <p>With my experience in data analytics, I am confident in my ability to work effectively and collaboratively with people from all backgrounds.</p>
                    </div>
                </div>
                
            </div>
        </div>
      )
}