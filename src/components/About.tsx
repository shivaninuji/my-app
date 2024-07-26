import React from "react";
const About = () => {
  return (
    <div>
      <section>
        <div className="flex py-14 md:flex-row flex-col items-center">
          <div className="mb-10 flex justify-center items-center md:mb-0">
            <img
              className="object-cover w-60 h-60 md:w-80 md:h-80 rounded-full object-center"
              alt="shivani"
              src="/shivani.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-5 font-bold text-white">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-white/75">
              Coupling my adeptness in programming languages like C, Python, SQL
              and others, with hands-on experience from Accolade Tech Solutions,
              I&apos;ve cultivated a passion for problem-solving and innovation.
              Actively engaging in the Google Developer Student Clubs (GDSC)
              community, I thrive on collaborative endeavors and diverse
              technical initiatives. Beyond coding, I embrace curiosity,
              exploring hobbies like photography, discovering new music, delving
              into intriguing facts, and devouring enriching literature, shaping
              me into a well-rounded individual committed to personal growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
