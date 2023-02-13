import {MainSection} from './layout/MainSection'
import {useState} from 'react'
//import { useAutoAnimate } from '@formkit/auto-animate/react'
export default function AboutMe(){
  const [section, setSection] = useState('main')
  const [portfolio, setPortfolio] = useState('react')
  const styles ={
    textHighlights: 'border border-green-400',
    disabledButton:'py-2 px-4 bg-transparent border-2 border-green-400 rounded-lg font-bold text-green-400 disabled opacity-50 cursor-not-allowed'
  }
  function About(){
    return (
      <>
        <MainSection>
          <div>
            <div className="flex flex-wrap justify-center">
              <h1 className="text-5xl font-bold text-white text-center my-2 w-full">About</h1>
              <div>
                <p className="text-gray-300 text-center">Hi, I'm developer, I love to write code 👨🏻‍💻</p>
                <p className="text-gray-300 text-center">I have more than 2 years of experience with Web development, I had the opportunity to met with amazing people whom I learned a lot.</p>
                <p className="text-gray-300 text-center">Actually, I'm looking for new challenges as Frontend or Backend developer</p>
              </div>

            </div>
            <div className="flex flex-wrap justify-center">
              <h2 className="text-3xl w-full font-bold text-white text-center my-2">Highlights</h2>
              <div className="grid lg:grid-cols-2 grid-cols-1 w-full text-center text-white">
                <p className={styles.textHighlights} >Backend development</p>
                <p className={styles.textHighlights} >Frontend development</p>
                <p className={styles.textHighlights} >Team work</p>
                <p className={styles.textHighlights} >Continuos improvement</p>
                <p className={styles.textHighlights} >Self learning</p>
                <p className={styles.textHighlights} >English B2</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <h2 className="text-3xl w-full font-bold text-white text-center my-2">Hobbies</h2>
              <div className="grid lg:grid-cols-2 grid-cols-1 w-full text-center text-white">
                <p className={styles.textHighlights} >Listen to music</p>
                <p className={styles.textHighlights} >Tacos lover 🌮❤️</p>
                <p className={styles.textHighlights} >Coding</p>
                <p className={styles.textHighlights} >Movies</p>
                <p className={styles.textHighlights} >Walks out</p>
                <p className={styles.textHighlights} >Video Games</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center my-10">
              <button disabled="true" onClick={() => setSection(section => section = 'projects')} className={styles.disabledButton}>My Personal Projects 👨🏻‍💻 (work in progress)</button>
            </div>
          </div>
        </MainSection>
      </>
    )
  }
  function Portfolio(){
    return(
      <MainSection>
        <div className="flex flex-wrap justify-center">
          <div className="container px-6 py-12 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Portfolio</h1>
            <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
              <div className="lg:mx-12">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>
                <div className="mt-4 space-y-4 lg:mt-8">
                  <button onClick={() => setPortfolio('react')} className="block text-blue-500 dark:text-blue-400 hover:underline">React</button>
                  <button onClick={() => setPortfolio('vue')} className="block text-gray-500 dark:text-gray-300 hover:underline">Vue</button>
                  <button onClick={() => setPortfolio('laravel')} className="block text-gray-500 dark:text-gray-300 hover:underline">Laravel</button>
                </div>
              </div>
              <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                  <div>
                    <img className="object-cover w-full rounded-lg h-96 " src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"alt=""></img>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Best website collections</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                  </div>
                  <div>
                    <img className="object-cover w-full rounded-lg h-96" src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""></img>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit collections</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                  </div>
                  <div>
                    <img className="object-cover w-full rounded-lg h-96" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""></img>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile mockup</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center my-10">
            <button onClick={() => setSection(section => section = 'main')} className="py-2 px-4 bg-transparent border-2 border-green-400 rounded-lg font-bold text-green-400">About</button>
          </div>
        </div>
      </MainSection>
    )
  }
  return(
    <div>
    {
      section === 'main' ? <About/> : ''
    }
    {
      section !== 'main' ? <Portfolio/> : ''
    }
    </div>
  )
}