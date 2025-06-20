import profile from '../assets/img/profile.jpg'
import SocialNetworks from './networking/SocialNetworks'
import Section from './layout/Section'
//import {MainSection} from './layout/MainSection'
export default function Main(){
  const styles ={
    primary: 'text-4xl md:text-5xl font-bold mt-2 mb-8 text-green-400',
    secondary:'text-2xl md:text-3xl font-bold text-white mt-2 mb-8',
    list:'font-bold text-white text-md',
    img:'rounded-full border border-8 border-green-400 profile-img content-fit'
  }

  return(
    <Section>
      <div className='flex flex-col lg:flex-row-reverse justify-center align-center items-center'>
        <div className='flex flex-col lg:items-start items-center lg:justify-start justify-center lg:gap-0 gap-2'>
          <h1 className={styles.primary}>FRONTEND DEVELOPER</h1>
          <h2 className={styles.secondary}>José Galván</h2>
          <SocialNetworks requiredOnes={['instagram', 'linkedin', 'github']}/>
        </div>
        <div className='lg:my-0 my-14'>
          <img src={profile} className={styles.img}  alt="Profile" />
        </div>
      </div>
    </Section>
  )
}