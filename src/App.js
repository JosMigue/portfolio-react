import './App.css';
import Main from './components/Main'
import Menu from './components/layout/Menu'
import Stack from './components/Stack'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import { useState } from 'react'
import {PageContext} from './context/PageContext'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function App() {
  const [page, setPage] = useState("Home");
  const [parent] = useAutoAnimate(/* optional config */)
  return (
    <PageContext.Provider value={{page, setPage}}>
      <div className="lg:w-3/4 w-full m-auto" ref={parent}>
        <Menu/>
        {
          page === 'Home' ? <Main/> : ''
        }
        {
          page === 'About' ? <AboutMe/> : ''
        }
        {
          page === 'Stack' ? <Stack/> : ''
        }
        {
          page === 'Say Hi' ? <Contact/> : ''
        }
      </div>
    </PageContext.Provider>
  );
}

export default App;
