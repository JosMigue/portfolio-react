import Network from './Network'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import whatsapp from '../../assets/img/whatsapp.svg'
import telegram from '../../assets/img/telegram.svg'
import email from '../../assets/img/email.svg'

function SocialNetworks({requiredOnes}){
  return(
    <>
      <div className="flex flex-row justify-evenly w-full">
        {requiredOnes.includes('instagram') && <Network  name="Instagram" icon={instagram} url="https://www.instagram.com/itsmepepes/"/>}
        {requiredOnes.includes('linkedin') && <Network  name="Linkedin" icon={linkedin} url="https://www.linkedin.com/in/itsmejosmigue/"/>}
        {requiredOnes.includes('github') && <Network  name="Github" icon={github} url="https://github.com/JosMigue"/>}
        {requiredOnes.includes('whatsapp') && <Network  name="Whatsapp" icon={whatsapp} url="	https://wa.me/523131082374"/>}
        {requiredOnes.includes('telegram') && <Network  name="Telegram" icon={telegram} url="https://t.me/josmiguels"/>}
        {requiredOnes.includes('email') && <Network  name="Email" icon={email} url="mailto:Jose_Galvan20_97@hotmail.com"/>}
      </div>
    </>
  )
}

export default SocialNetworks