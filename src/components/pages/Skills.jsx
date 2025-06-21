import skills from '../../data/skills.json'
import Skill from '../skills/Skill'
import softSkills from '../../data/softSkills.json'
import Section from '../layout/Section'
import { useState} from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
//import {MainSection} from './layout/MainSection'
export default function Skills() {
  const [section, setSection] = useState('main')
  const [parent] = useAutoAnimate();
  const MainSection = () => {
    return (
      <>
        {Object.keys(skills).map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills[category].map((skill) => (
                <Skill
                  name={skill.name}
                  key={skill.name}
                  icon={skill.icon}
                  alt={skill.alt}
                  url={skill.url}
                />
              ))}
            </div>
          </div>
        ))}
      </>
    )
  }
  const sectionHandler = (section) => {
    setSection(section)
  }
  const SoftSkillSection = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {softSkills.map((skill) => (
          <Skill
            name={skill.name}
            key={skill.name}
            icon={'#'}
            alt="#"
            url="#"
          />
        ))}
      </div>
    )
  }
  return (
    <Section>
      <section className="text-white py-16 px-4 md:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-8">SKills</h1>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center bg-[#1a1e2e] p-1 rounded-full w-fit mb-6">
            <button className={`${section === 'main' ? 'bg-green-400 text-white' : 'text-gray-300 hover:text-white'} px-4 py-1 rounded-full text-sm font-semibold`} onClick={() => sectionHandler('main')}>
              Technologies
            </button>
            <button className={`${section === 'soft' ? 'bg-green-400 text-white' : 'text-gray-300 hover:text-white'} px-4 py-1 rounded-full text-sm font-semibold`} onClick={() => sectionHandler('soft')}>
              Soft skills
            </button>
          </div>
        </div>
        <div ref={parent} >
          {section === 'main' ? <MainSection /> : null}
          {section === 'soft' ? <SoftSkillSection /> : null}
        </div>
      </section>
    </Section>
  )
}