import skills from '../data/skills.json'
import Skill from './skills/Skill'
import Section from './layout/Section'
//import {MainSection} from './layout/MainSection'
export default function Stack(){
  return (
      <Section title='My Stack'>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6 w-full">
          {
          skills.map(skill => <Skill name={skill.name} key={skill.name} icon={skill.icon} alt={skill.alt} url={skill.url}/>)
          }
        </div>
      </Section>
  )
}