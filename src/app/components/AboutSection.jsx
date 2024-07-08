"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python, Java, C/C++, JavaScript/TypeScript, HTML, CSS</li>
        <li>MySQL, SQLite, MongoDB</li>
        <li>Unreal Engine, Blender, Jupyter Notebooks</li>
        <li>Node.js, Next.js(React), FastAPI(Rust), SFML, LangChain</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Science (Honours): Computer Science,
          <br/>Memorial University of Newfoundland (Sep 2020 - Dec 2024)<br/>- St.John&apos;s, NL, Canada</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-20 xl:px-20">
        <div className="hidden lg:inline-block">
          <div className="scale-100">
            <Image src="/images/about-image.png" width={500} height={500} className="rounded-full"/></div>
        </div>
        <div className="lg:hidden">
          <div className="scale-75">
            <Image src="/images/about-image.png" width={500} height={500} className="rounded-full"/></div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a passionate software developer with a strong foundation in Python, Java, C/C++, and JavaScript, 
              I specialize in crafting seamless code solutions that drive innovation. My work at the Visual and Analytic 
              Computing (VAC) Lab involves pioneering research to enhance aviation safety through advanced visual computing
              techniques, where I construct global wind data into a 3D holographic environment using Unreal Engine and C++. 
              My diverse experiences range from developing efficient backend systems with FastAPI to creating interactive dashboards
              and infographics that turn data into actionable insights. Whether it's web development, game design, or data visualization, 
              I thrive on building robust applications that meet user needs and push the boundaries of technology.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
    </section>
);
};

export default AboutSection;
