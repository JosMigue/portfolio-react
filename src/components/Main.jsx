import profile from '../assets/img/profile.jpg'
import SocialNetworks from './networking/SocialNetworks'
//import {MainSection} from './layout/MainSection'
export default function Main(){
  const styles ={
    primary: 'font-bold text-white lg:text-7xl text-4xl',
    secondary:'font-bold text-white lg:text-3xl text-lg',
    list:'font-bold text-white text-md',
    img:'rounded-full border border-8 border-green-400 profile-img content-fit'
  }

  return(
    <>
      <div className='flex flex-col lg:items-start items-center lg:justify-start justify-center lg:gap-0 gap-2'>
        <h1 className={styles.primary}>Hi, I'm José</h1>
        <h2 className={styles.secondary}>I'm a Front-End Developer</h2>
        <ul className='list-disc text-white lg:text-lg text-sm flex flex-col items-start '>
          <li className={styles.list}>Fueled by cofee</li>
          <li className={styles.list}>Technical Conusltant</li>
        </ul>
        <SocialNetworks requiredOnes={['instagram', 'linkedin', 'github']}/>
      </div>
      <div className='lg:my-0 my-14'>
        <img src={profile} className={styles.img}  alt="Profile" />
      </div>
    </>
  )
}