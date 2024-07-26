import { FaGithub } from 'react-icons/fa'

const Projects = () => (
  <section id="projects" className="projects">
    <div className="title-heading">
      <h2>PROJECTS</h2>
      <p>These are some of my recent projects</p>
      <div className="project-item">
        <div className="project-description has-margin-right">
          <h2>BloodBank Management System</h2>
          <p>
            A digital platform that facilitates blood donation management, allowing voluntary registration for donors and blood availability verification. Project Database Management employs phpMyAdmin for easy MySQL database administration. MySQL powers the backend, chosen for its reliability and performance. Together, they provide a seamless solution for storing and managing data in the Blood Bank System.
          </p>
          <a href="https://github.com/shivaninuji/bloodbank" className="project-link" target="_blank">
            <FaGithub /> View Code
          </a>
        </div>
        <div className="project-img">
          <img src="/images/bloodbank.png" alt="BloodBank Management System" />
        </div>
      </div>
      <div className="project-item">
        <div className="project-img has-margin-right">
          <img src="/images/sppms.png" alt="Hungry Hive" />
        </div>
        <div className="project-description">
          <h2>Hungry Hive</h2>
          <p>
            The application is crafted with the robust MERN stack. It was a fantastic learning experience. For the elegant styling, we harnessed the power of Tailwind CSS. As for hosting, we've chosen Vercel for the frontend and Render for the backend, ensuring a seamless and secure user experience.
          </p>
          <a href="https://github.com/shivaninuji/hungry-hive" className="project-link" target="_blank">
            <FaGithub /> View Code
          </a>
        </div>
      </div>
      <div className="project-item">
        <div className="project-description has-margin-right">
          <h2>A website which generates movie screenplay with the input of voice.</h2>
          <p>
            The user inputs a narration, through an audio file. The audio file is converted to text using a speech-to-text API. The text is then passed to a large language model, which generates the screenplay. The screenplay is then formatted according to industry standards and output to the user. It is a user-friendly website.
          </p>
          <a href="https://github.com/shivaninuji/audiotoscreenplay" className="project-link" target="_blank">
            <FaGithub /> View Code
          </a>
        </div>
        <div className="project-img">
          <img src="/images/audiotoscreenplay.png" alt="Audio to Screenplay" />
        </div>
      </div>
    </div>
  </section>
)

export default Projects
