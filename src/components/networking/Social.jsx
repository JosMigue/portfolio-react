import Network from './Network'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'

function Social(){
  return(
    <>
      <div className="flex flex-row justify-evenly w-1/2">
        <Network name="Instagram" icon={instagram} url="https://www.instagram.com/jose_miguels16/"/>
        <Network name="Linkedin" icon={linkedin} url="https://www.linkedin.com/in/itsmejosmigue/"/>
        <Network name="Github" icon={github} url="https://github.com/JosMigue"/>
      </div>
    </>
  )
}

export default Social