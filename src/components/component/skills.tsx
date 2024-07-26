import { SiHtml5, SiCss3, SiC, SiPython, SiMysql, SiPostman, SiJavascript, SiCypress, SiSupabase, SiVsco, SiGit, SiVercel } from 'react-icons/si'

const Skills = () => (
  <section id="skills" className="skills">
    <div className="title-heading">
      <h2>SKILLS</h2>
      <div className="skills-icons">
        <SiHtml5 size={30} aria-label="HTML" />
        <SiCss3 size={30} aria-label="CSS" />
        <SiC size={30} aria-label="C" />
        <SiPython size={30} aria-label="Python" />
        <SiMysql size={30} aria-label="MySql" />
        <SiPostman size={30} aria-label="Postman" />
        <SiJavascript size={30} aria-label="JavaScript" />
        <SiCypress size={30} aria-label="Cypress" />
        <SiSupabase size={30} aria-label="Supabase" />
        <SiVsco size={30} aria-label="Visual Studio Code" />
        <SiGit size={30} aria-label="Git" />
        <SiVercel size={30} aria-label="Vercel" />
      </div>
    </div>
  </section>
)

export default Skills
