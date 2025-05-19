import skills from '../data/skills.json'
import Skill from './skills/Skill'
import Section from './layout/Section'
import {MainSection} from './layout/MainSection'
export default function Stack(){
  return (
    <MainSection>
      <Section title='My Stack'>
        <div className="grid lg:grid-cols-4 grid-cols-3 gap-6 w-full">
          {
          skills.map(skill => <Skill name={skill.name} key={skill.name} icon={skill.icon} alt={skill.alt} url={skill.url}/>)
          }
        </div>
      </Section>
    </MainSection>
  )
}