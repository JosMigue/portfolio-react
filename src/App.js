import './App.css';
import Main from './components/Main'
import Menu from './components/layout/Menu'
import Skills from './components/Skills'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience'
import { useState } from 'react'
import { PageContext } from './context/PageContext'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import react from './assets/img/react.svg'
import tailwind from './assets/img/tailwind-css.svg'


function App() {
  const [page, setPage] = useState("Home");
  const [parent] = useAutoAnimate(/* optional config */)
  return (
    <PageContext.Provider value={{ page, setPage }}>
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
