import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const email = "shivaniiinuji@gmail.com";
  const linkedin = "linkedin.com/in/shivani-n-331764227ji";
  const github = "github.com/shivaninuji";

  return (
    <div className="my-14 mb-32">
      <h1 className="title-font text-center sm:text-4xl text-3xl mb-7 font-bold text-white">
        Get In Touch
      </h1>
      <p className="mb-8 max-w-xl mx-auto leading-relaxed text-white/75 text-center">
        I&apos;d love if you reached out to me, even if it&apos;s just to say
        &quot; Hey ! &quot;. Don&apos;t hesitate. Drop me a line and I&apos;ll get
        back to you ASAP !{" "}
      </p>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        <Link
          target="_blank"
          className="flex p-3 rounded-lg hover:scale-105 transition-all duration-200 bg-blue-500/10"
          href={`https://www.${linkedin}`}
        >
          <Linkedin className="text-blue-500" />
        </Link>
        <Link
          target="_blank"
          className="flex p-3 rounded-lg hover:scale-105 transition-all duration-200 bg-white/10"
          href={`https://${github}`}
        >
          <Github className="text-white" />
        </Link>
        <Link
          target="_blank"
          className="flex p-3 rounded-lg hover:scale-105 transition-all duration-200 bg-red-500/10"
          href={`mailto:${email}`}
        >
          <Mail className="text-red-500" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
