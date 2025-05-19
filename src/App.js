import './App.css';
import Main from './components/Main'
import Menu from './components/layout/Menu'
import Stack from './components/Stack'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience'
import { useState } from 'react'
import {PageContext} from './context/PageContext'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function App() {
  const [page, setPage] = useState("Home");
  const [parent] = useAutoAnimate(/* optional config */)
  return (
    <PageContext.Provider value={{page, setPage}}>
      <div className='main-container-layout container mx-auto'>
        <header className='my-4'>
          <Menu/>
        </header>
        <main className='main-content'>
          <div ref={parent} className='inner-content flex flex-col lg:flex-row-reverse justify-center align-center items-center lg:gap-5 gap'>
            {
              page === 'Home' ? <Main/> : ''
            }
            {
              page === 'About' ? <AboutMe/> : ''
            }
            {
              page === 'Work experience' ? <WorkExperience/> : ''
            }
            {
              page === 'Stack' ? <Stack/> : ''
            }
            {
              page === 'Say Hi' ? <Contact/> : ''
            }
          </div>
        </main>
        <footer>this is footer</footer>
      </div>
    </PageContext.Provider>
  );
}

export default App;
