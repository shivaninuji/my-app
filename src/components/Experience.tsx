import React from "react";
import { Button } from "./ui/button";

const Experience = () => {
  return (
    <div>
      <section>
        <div className="py-14 mx-auto">
          <h1 className="title-font text-center sm:text-4xl text-3xl mb-10 font-bold text-white">
            Experience
          </h1>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="h-full border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <h2 className="tracking-wide text-sm font-medium text-white mb-3">
                  Accolade Tech Solutions
                </h2>
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  Software Development Intern
                </h1>
                <p className="leading-relaxed mb-3 text-white/75">
                  Throughout the journey from problem statement to project
                  completion, I&apos;ve embraced teamwork, innovation, and
                  dedication, reinforcing my passion for continuous growth and
                  impactful contributions. Our goal was to develop an
                  audio-to-text application, and this experience has shaped my
                  commitment to excellence in problem-solving and innovation.
                </p>
                {/* <Button>View Certificate</Button> */}
              </div>
            </div>
            <div className="h-full border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <h2 className="tracking-wide text-sm font-medium text-white mb-3">
                  Google Developer Student Club SCEM
                </h2>
                <h1 className="title-font text-xl font-bold tracking-wide text-white mb-3">
                  Community Member
                </h1>
                <p className="leading-relaxed mb-3 text-white/75">
                  I actively engage in various workshops and activities to
                  enhance my knowledge and refine my skills. I participated in
                  DevFest organized by GDG, Mangalore, where I immersed myself
                  in insightful sessions and networking opportunities.
                  Additionally, I successfully completed the Google Cloud Study
                  Jams 2023, gaining practical experience in leveraging Google
                  Cloud resources effectively.
                </p>
                {/* <Button>View Certificate</Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
