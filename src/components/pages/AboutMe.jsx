import Section from "../layout/Section"
export default function AboutMe() {
  return (
    <Section>
      <h1 className="text-4xl font-bold mb-6">Hi, I'm a Frontend Developer</h1>
      <p className="text-lg leading-relaxed mb-4">
        With a strong passion for crafting <span className="text-green-400 font-semibold">clean, efficient, and scalable code</span> 👨‍💻. With over <span className="text-green-400 font-semibold">5 years of experience</span> in web development, I’ve had the opportunity to collaborate with talented professionals and contribute to diverse projects that have sharpened both my technical and problem-solving skills.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        My journey in web development has been a blend of continuous learning and practical application. I thrive in environments that encourage <span className="text-green-400 font-semibold">innovation and teamwork</span>, and I’m always eager to explore new technologies and methodologies.
      </p>
      <p className="text-lg leading-relaxed">
        In addition to frontend development, I’ve also taken on responsibilities as a <span className="text-green-400 font-semibold">technical consultant</span>—offering guidance on architecture, performance optimization, and best practices.
      </p>
    </Section>
  )
}