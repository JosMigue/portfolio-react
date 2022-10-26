import {MainSection} from './layout/MainSection'
export default function AboutMe(){
  return(
    <>
      <MainSection>
        <div>
          <div className="flex flex-wrap justify-center">
            <h1 className="text-5xl font-bold text-white text-center my-2 w-full">About</h1>
            <div>
              <p className="text-gray-300 text-center">Hi, I'm developer, I love write code 👨🏻‍💻</p>
              <p className="text-gray-300 text-center">I have more than 2 years of experience with Web development, I had the opportunity to met with amazing people how I learned a lot.</p>
              <p className="text-gray-300 text-center">Actually, I'm trying to improve my skills as Full-Stack developer with modern technologies.</p>
            </div>

          </div>
          <div className="flex flex-wrap justify-center">
            <h2 className="text-3xl w-full font-bold text-white text-center my-2">Highlights</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full text-center text-white">
              <p className="border border-green-400 ">Backend development</p>
              <p className="border border-green-400 ">Frontend development</p>
              <p className="border border-green-400 ">Fast learning</p>
              <p className="border border-green-400 ">Team work</p>
              <p className="border border-green-400 ">Continuos improvement</p>
              <p className="border border-green-400 ">Self learning</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <h2 className="text-3xl w-full font-bold text-white text-center my-2">Hobbies</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full text-center text-white">
              <p className="border border-green-400 ">Listen to music</p>
              <p className="border border-green-400 ">Tacos lover 🌮❤️</p>
              <p className="border border-green-400 ">Beer lover 🍺❤️</p>
              <p className="border border-green-400 ">Walks out</p>
              <p className="border border-green-400 ">Video Games</p>
              <p className="border border-green-400 ">Coding</p>
            </div>
          </div>
        </div>
      </MainSection>
    </>
  )
}