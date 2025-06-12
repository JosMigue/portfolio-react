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
        <section className="text-white py-16 px-4 md:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">About</h2>
            <p className="text-lg mb-2">
              Hi, I'm a developer and I love writing code 👨‍💻
            </p>
            <p className="text-md mb-2">
              I have over 2 years of experience in web development. During this time, I’ve had the opportunity to work with amazing people from whom I’ve learned a lot.
            </p>
            <p className="text-md mb-8">
              I'm currently looking for new challenges as a Frontend or Backend developer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-center mb-4">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="border border-green-400 py-2 rounded">Backend Development</div>
              <div className="border border-green-400 py-2 rounded">Frontend Development</div>
              <div className="border border-green-400 py-2 rounded">Teamwork</div>
              <div className="border border-green-400 py-2 rounded">Continuous Improvement</div>
              <div className="border border-green-400 py-2 rounded">Self-learning</div>
              <div className="border border-green-400 py-2 rounded">English Advanced</div>
            </div>
          </div>
          <div className="text-center">
            <button className="border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-500 hover:text-white transition">
              My Personal Projects 👨‍💻 (Work in Progress)
            </button>
          </div>
        </section>
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