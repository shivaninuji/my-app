import React from 'react';
import Tooltip from './ui/Tooltip'; // Adjust the path as needed
import { Github, Linkedin, Mail } from 'lucide-react';  // Correct import names

const Contact = () => {
  const email = "shivaniiinuji@gmail.com";
  const linkedin = "https://linkedin.com/in/shivani-n-331764227ji";
  const github = "https://github.com/shivaninuji";

  return (
    <div className="my-14 mb-32">
      <h1 className="title-font text-center sm:text-4xl text-3xl mb-7 font-bold text-white">
        Get In Touch
      </h1>
      <p className="mb-8 max-w-xl mx-auto leading-relaxed text-white/75 text-center">
        I&apos;d love if you reached out to me, even if it&apos;s just to say
        &quot; Hey ! &quot;. Don&apos;t hesitate. Drop me a line and I&apos;ll get
        back to you ASAP !
      </p>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        <Tooltip title="LinkedIn">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex p-3 rounded-lg hover:scale-105 transition-all duration-200 bg-blue-500/10"
          >
            <Linkedin className="text-blue-500" />
          </a>
        </Tooltip>
        <Tooltip title="GitHub">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex p-3 rounded-lg hover:scale-105 transition-all duration-200 bg-white/10"
          >
            <Github className="text-white" />
          </a>
        </Tooltip>
        <Tooltip title="Email">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex p-3 rounded-lg hover:scale-105 transition-all duration-200 bg-red-500/10"
          >
            <Mail className="text-red-500" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Contact;
