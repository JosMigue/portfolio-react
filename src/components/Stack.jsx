import skills from '../data/skills.json'
import insterestedSkills from '../data/insterestedSkills.json'
import Skill from './skills/Skill'
export default function Stack(){
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white text-left">My skills</h1>
      <div className="flex flex-row flex-wrap w-full justify-evenly my-5">
        {
          skills.map(skill => <Skill name={skill.name} key={skill.name} icon={skill.icon} alt={skill.alt} url={skill.url}/>)
        }
      </div>
      <h1 className="text-5xl font-bold text-white text-left">Interested</h1>
      <div className="flex flex-row flex-wrap w-full justify-evenly my-5">
        {
          insterestedSkills.map(skill => <Skill name={skill.name} key={skill.name} icon={skill.icon} alt={skill.alt} url={skill.url}/>)
        }
      </div>
    </div>
  )
}