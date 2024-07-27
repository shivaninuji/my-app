import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="py-14">
      <h1 className="text-center mb-7 sm:text-4xl text-3xl font-bold text-white">
        Projects
      </h1>
      <div className="flex flex-col gap-10">
        <section>
          <div className="flex lg:gap-24 md:gap-16 gap-10 py-5 md:flex-row flex-col items-center">
            <div className="flex justify-center items-center">
              <Image
                width={500}
                height={500}
                quality={100}
                className="object-cover shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl object-center"
                alt="blood-bank"
                src="/projects/blood-bank.png"
              />
            </div>
            <div className="lg:flex-grow gap-5 md:w-1/2 flex flex-col md:items-start">
              <h1 className="title-font sm:text-2xl text-xl font-semibold tracking-wide text-white">
                BloodBank Management System
              </h1>
              <p className="leading-relaxed text-white/75">
                A digital platform that facilitates blood donation management,
                allowing voluntary registration for donors and blood
                availability verification. Project Database Management employs
                phpMyAdmin for easy MySQL database administration. MySQL powers
                the backend, chosen for its reliability and performance.
                Together, they provide a seamless solution for storing and
                managing data in the Blood Bank System.
              </p>
              <Link
                target="_blank"
                href="https://github.com/shivaninuji/bloodbank"
              >
                <Button className="gap-3 flex">
                  View Code <GitHubLogoIcon />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="flex lg:gap-24 md:gap-16 gap-10 py-5 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow gap-5 md:w-1/2 flex flex-col md:items-start">
              <h1 className="title-font sm:text-2xl text-xl font-semibold tracking-wide text-white">
                Hungry Hive
              </h1>
              <p className="leading-relaxed text-white/75">
                The application is crafted with the robust MERN stack. It was a
                fantastic learning experience. For the elegant styling, we
                harnessed the power of Tailwind CSS. As for hosting, we&apos;ve
                chosen Vercel for the frontend and Render for the backend,
                ensuring a seamless and secure user experience.
              </p>
              <Link
                target="_blank"
                href="https://github.com/shivaninuji/hungry-hive"
              >
                <Button className="gap-3 flex">
                  View Code <GitHubLogoIcon />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Image
                width={500}
                height={500}
                quality={100}
                className="object-cover shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl object-center"
                alt="hungry-hive"
                src="/projects/hungry-hive.png"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex lg:gap-24 md:gap-16 gap-10 py-5 md:flex-row flex-col items-center">
            <div className="flex justify-center items-center">
              <Image
                width={500}
                height={500}
                quality={100}
                className="object-cover shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl object-center"
                alt="audiotoscreenplay"
                src="/projects/audiotoscreenplay.png"
              />
            </div>
            <div className="lg:flex-grow gap-5 md:w-1/2 flex flex-col md:items-start">
              <h1 className="title-font sm:text-2xl text-xl font-semibold tracking-wide text-white">
                A website which generates movie screenplay with the input of
                voice.
              </h1>
              <p className="leading-relaxed text-white/75">
                The user inputs a narration, through an audio file.The audio
                file is converted to text using a speech-to-text API. The text
                is then passed to a large language model, which generates the
                screenplay.The screenplay is then formatted according to
                industry standards and output to the user. It is a user-friendly
                website.
              </p>
              <Link
                target="_blank"
                href="https://github.com/shivaninuji/audiotoscreenplay"
              >
                <Button className="gap-3 flex">
                  View Code <GitHubLogoIcon />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
