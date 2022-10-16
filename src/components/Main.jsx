import profile from '../assets/img/profile.jpg'
import Social from './networking/Social'
export default function Main(){
  const styles ={
    primary: 'font-bold text-white lg:text-7xl text-5xl',
    secondary:'font-bold text-white lg:text-3xl text-xl',
    centerContent: 'flex flex-col justify-center items-center',
    startContent: 'flex flex-col lg:justify-start justify-center lg:items-start items-center',
    img:'rounded-full border-dotted border-8 border-green-400 profile-img'
  }
  return(
    <div className="min-h-screen flex lg:flex-row flex-col justify-center items-center">
      <div className={`${styles.centerContent} lg:w-1/2 w-full`}>
        <h1 className={`${styles.primary} text-center`}>Hello, I'm José</h1>
        <h2 className={styles.secondary}>I'm a Full-Stack Developer</h2>
        <p className="text-white">Tacos lover 🌮❤️</p>
        <Social/>
      </div>
      <div className={`${styles.startContent} lg:w-1/2 w-full lg:my-0 my-14`}>
        <img src={profile} className={styles.img}  alt="Profile" />
      </div>
    </div>
  )
}