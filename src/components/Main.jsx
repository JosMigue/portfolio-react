import profile from '../assets/img/profile.jpg'
import Social from './networking/Social'
import {MainSection} from './layout/MainSection'
export default function Main(){
  const styles ={
    primary: 'font-bold text-white lg:text-7xl text-4xl',
    secondary:'font-bold text-white lg:text-3xl text-lg',
    list:'font-bold text-white text-md',
    img:'rounded-full border-dotted border-8 border-green-400 profile-img'
  }

  return(
    <>
      <div >
        <h1 className={styles.primary}>Hi, I'm José</h1>
        <h2 className={styles.secondary}>I'm a Front-End Developer</h2>
        <ul className='list-disc'>
          <li className={styles.list}>Fueled by cofee</li>
          <li className={styles.list}>Technical Conusltant at Thirdera a Cognizant Company</li>
          <li className={styles.list}></li>
          <li className={styles.list}></li>
        </ul>
        <Social/>
      </div>
      <div className='lg:my-0 my-14'>
        <img src='https://1drv.ms/i/c/93be31b822aa7ffb/EbqKmdh5OaVGt_gcjpL1eV8B-1r38UkKJonOh9dypQYpVQ?e=6FhVfn' className={styles.img}  alt="Profile" />
      </div>
    </>
  )
}