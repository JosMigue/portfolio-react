import { useState } from 'react'
import { PageContext } from './context/PageContext'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import './App.css';

import Main from './components/pages/Main'
import Menu from './components/pages/Menu'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import AboutMe from './components/pages/AboutMe'
import WorkExperience from './components/pages/WorkExperience'

import react from './assets/img/react.svg'
import tailwind from './assets/img/tailwind-css.svg'
import developerData from './data/developer.json'


function App() {
  const [page, setPage] = useState("Home");
  const [parent] = useAutoAnimate(/* optional config */)
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={developerData.summary} />
      <meta name="keywords" content="Frontend Developer, React, Node.js, Tailwind CSS, Portfolio" />


      <div className='main-container-layout container mx-auto'>
        <header className='my-4 position-sticky'>
          <Menu />
        </header>
        <main className='main-content'>
          <div ref={parent} className='inner-content flex flex-col lg:flex-row-reverse justify-center align-center items-center lg:gap-5 min-h-auto overflow-hidden'>
            {
              page === 'Home' && <Main />
            }
            {
              page === 'About' && <AboutMe />
            }
            {
              page === 'Work experience' && <WorkExperience />
            }
            {
              page === 'Skills' && <Skills />
            }
            {
              page === 'Say Hi' && <Contact />
            }
          </div>
        </main>
        <footer className='flex items-center justify-center text-xl inline-block text-white bolder my-4'>This Portfolio was made with <a href='https://react.dev/' target='__blank'><img className="lg:w-6 w-4 animate hover:animate-spin" src={react} alt='react icon' /></a><a className='flex' href='https://tailwindcss.com/' target='__blank'><img className="lg:w-7 w-4" src={tailwind} alt='tailwind icon' /></a></footer>
      </div>
    </PageContext.Provider>
  );
}

export default App;
