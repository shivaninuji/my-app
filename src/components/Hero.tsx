import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import TextRunner from "./ui/TextRunner";

const Hero = () => {
  const resume = "Shivani N - Resume.pdf";
  const email = "shivaniiinuji@gmail.com";

  return (
    <section>
      <div className="py-24 items-center justify-center flex-col">
        <div className="text-center w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            {/* <TextRunner /> */}
            Hello 👋🏻 I'm Shivani N
          </h1>
          <p className="mb-8 max-w-xl mx-auto leading-relaxed text-white/75">
            I am a CSE student who is passionate about learning and always
            excited about trying new things and gaining new experiences.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href={resume} target="_blank">
              <Button>My Resume</Button>
            </Link>
            <Link href={`mailto:${email}`} target="_blank">
              <Button>Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
