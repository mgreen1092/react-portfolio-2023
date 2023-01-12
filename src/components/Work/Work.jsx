import React from 'react'
import Spotifly from '../../assets/spotifly2.png'
import Wave from '../../assets/Wave.svg'
import StockSeries from '../../assets/stockseries1.png'
import Projects from '../ProjectCard/ProjectCard'
import GoalMaster from '../../assets/goalmaster1.png'
import GolfTrivia from '../../assets/golftrivia.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-fit font-mono box-border background-color dark:bg-slate-800 dark:text-white'>
        {/* wave */}
        <div className='dark:hidden w-full my-8'> 
            <img src={Wave} className='w-full py-4' alt='wave section divider'></img>
        </div> 

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 sm:px-16 flex flex-col justify-center w-full h-fulls'>

            <div data-aos='fade-right' className='py-16'>
                <p className='text-4xl font-display inline'>Work</p>
            </div>

            {/* container to hold all projects */}
            <div className='grid sm:grid-cols-1 gap-6'>
                
            {/* ===================================================================== */}
                <Projects 
                    projectImg={GoalMaster} 
                    alt={'screenshot of GoalMaster'}  projectTitle='Goal Master' 
                    projectSubtitle={'React | Mongoose | Express | Node.JS'} 
                    desc={'An easy-to-use goal tracker applicatiom to manage your new year goals.'}
                    demo={'https://goalmaster-frontend-21pq3xp4o-mgreen1092.vercel.app/'} 
                    code={'https://github.com/mgreen1092/goalmaster-frontend.git'}/>
            {/* ===================================================================== */}
                <Projects
                    projectImg={Spotifly} 
                    alt={'screenshot of spotifly'} 
                    projectTitle='Spotifly'
                    projectSubtitle={'React | Mongoose | Express | Node.JS'}  
                    desc={'Spotifly, a group project created in collaboration with two other students, is a music streaming app similar to Spotify allowing users to create and view playlists while streaming their favoritei songs without advertisements.'}
                    demo={'https://spotifly-ga.vercel.app/login'} 
                    code={'https://github.com/aaixn/spotifly-frontend.git'}/>
            {/* ===================================================================== */}
                {/* <ProjectCard 
                    projectImg={RestaurantManager} 
                    alt={'screenshot of login page for inventory manager app'}  projectTitle='Inventory Manager' 
                    projectSubtitle={'Mongoose | Express | Node.js'} 
                    demo={'https://restaurant-inventory-manager.herokuapp.com/'} 
                    code={'https://github.com/christinalu3799/restaurant-inventory-manager'}/> */}
            {/* ===================================================================== */}
                <Projects
                    projectImg={StockSeries} 
                    alt={'screenshot of Stock Series website'}  
                    projectTitle='Stock Series' 
                    projectSubtitle={'React | API | Recharts'} 
                    desc={'A user friendly website dispalying key data on S&P 500 stocks.'}
                    demo={'https://stock-series-co65odfsy-mgreen1092.vercel.app/'} 
                    code={'https://github.com/mgreen1092/stock-series-app.git'}/>
            {/* ===================================================================== */}
                <Projects 
                    projectImg={GolfTrivia} 
                    alt={'screenshot of Golf Trivia application'}  projectTitle='Golf Trivia' 
                    projectSubtitle={'HTML | CSS | JavaScript'} 
                    desc={'Tests your knowledge of men\'s and women\'s professional golf.'}
                    demo={'https://mgreen1092.github.io/trivia-game/'} 
                    code={'https://github.com/mgreen1092/trivia-game.git'}/>
            {/* ===================================================================== */}
                
            </div>   

        </div>
    </div>
  )
}

export default Work