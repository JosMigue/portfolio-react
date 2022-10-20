import './App.css';
import Main from './components/Main'
import Menu from './components/layout/Menu'
import Stack from './components/Stack'
import { useState } from 'react'
import {PageContext} from './context/PageContext'

function App() {
  const [page, setPage] = useState("Home"); 
  return (
    <PageContext.Provider value={{page, setPage}}>
      <div className="lg:w-3/4 w-full m-auto">
        <Menu/>
        {
          page == 'Home' ? <Main/> : ''
        }
        {
          page == 'Stack' ? <Stack/> : ''
        }
      </div>
    </PageContext.Provider>
  );
}

export default App;
