import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import TextRunner from "@/components/ui/TextRunner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const resume = "Shivani N - Resume.pdf";
  const email = "shivaniiinuji@gmail.com";
  const linkedin = "linkedin.com/in/shivani-n-331764227ji";
  const github = "github.com/shivaninuji";

  return (
    <section>
      <div className="py-24 items-center justify-center flex-col">
        <div className="text-center w-full">
          <h1 className="title-font text-runner sm:text-4xl text-3xl mb-4 font-bold text-white">
            <TextRunner />
          </h1>
          <p className="mb-8 max-w-xl mx-auto leading-relaxed text-white/75">
            A CSE student who is passionate about learning and always excited
            about trying new things and gaining new experiences.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href={resume} target="_blank">
              <Button>My Resume</Button>
            </Link>
            <Dialog>
              <DialogTrigger className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Contact Me
              </DialogTrigger>
              <DialogContent className="bg-[#202020]">
                <DialogHeader>
                  <DialogTitle>Get In Touch</DialogTitle>
                  <DialogDescription>
                    I&apos;d love if you reached out to me. Even if it&apos;s
                    just to say &quot;Hey!&quot;. Don&apos;t hesitate! Drop me a
                    line and I&apos;ll get back to you ASAP!
                  </DialogDescription>
                  <div className="py-2 gap-3 flex flex-col">
                    <Link
                      target="_blank"
                      className="flex w-full gap-3 hover:bg-background px-3 py-3 rounded-md"
                      href={`https://www.${linkedin}`}
                    >
                      <Linkedin className="text-blue-500" />
                      <div>{linkedin}</div>
                    </Link>
                    <Link
                      target="_blank"
                      className="flex w-full gap-3 hover:bg-background px-3 py-3 rounded-md"
                      href={`https://${github}`}
                    >
                      <Github className="text-white" />
                      <div>{github}</div>
                    </Link>
                    <Link
                      target="_blank"
                      className="flex w-full gap-3 hover:bg-background px-3 py-3 rounded-md"
                      href={`mailto:${email}`}
                    >
                      <Mail className="text-red-500" />
                      <div>{email}</div>
                    </Link>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
