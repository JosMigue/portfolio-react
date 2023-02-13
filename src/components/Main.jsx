import profile from '../assets/img/profile.jpg'
import Social from './networking/Social'
import {MainSection} from './layout/MainSection'
export default function Main(){
  const styles ={
    primary: 'font-bold text-white lg:text-7xl text-4xl',
    secondary:'font-bold text-white lg:text-3xl text-lg',
    centerContent: 'flex flex-col justify-center items-center',
    startContent: 'flex flex-col lg:justify-start justify-center lg:items-start items-center',
    img:'rounded-full border-dotted border-8 border-green-400 profile-img'
  }

  return(
    <>
      <MainSection>
        <div className={`${styles.centerContent} lg:w-1/2 w-full`}>
          <h1 className={`${styles.primary} text-center`}>Hello, I'm José</h1>
          <h2 className={styles.secondary}>I'm a Full-Stack Developer</h2>
          <p className="text-white sm:text-md text-sm">Tacos lover 🌮❤️</p>
          <Social/>
        </div>
        <div className={`${styles.centerContent} lg:w-1/2 w-full lg:my-0 my-14`}>
          <img src={profile} className={styles.img}  alt="Profile" />
        </div>
      </MainSection>
    </>
  )
}