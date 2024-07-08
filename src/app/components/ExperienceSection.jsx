"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const ExperienceSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="" id="experience">
      <div className="md:grid md:grid-cols-1 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-10 xl:px-20">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center pb-10">My Work Experience</h2>
          <div className="">

            {/* 1 */}
            <div className="flex justify-between h-60">
              {/* LEFT */}
              <div className="w-1/2">
                <div className="text-black bg-gray-200 rounded-b-lg rounded-s-lg">
                  <div className="p-3 font-extrabold text-lg"> Software Developer Research Assistant</div>
                  <div className="p-3"> Visual and Analytic Computing (VAC) Lab <br/> -St.John’s, NL, Canada
                  </div>
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">May 2024 - Current</div>
                <div className="p-3 text-sm">I am engaged in pioneering work to advance the understanding of atmospheric dynamics through visual
                  computing techniques. My primary responsibility involves constructing global wind data into a 3D
                  holographic environment using Unreal Engine and C++. This project is designed to analyze the impact of
                  varying wind conditions on flight trajectories, offering insights that can improve aviation safety and efficiency.
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-white rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-[#121212] -left-2 -top-2">
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/2"></div>
            </div>


            {/* 2 */}
            <div className="flex justify-between h-60">
              {/* LEFT */}
              <div className="w-1/2"></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-white rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-[#121212] -left-2 -top-2">
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/2">
                <div className="text-black bg-gray-200  rounded-b-lg rounded-e-lg">
                  <div className="p-3 font-extrabold text-lg"> Customer Service Supervisor</div>
                  <div className="p-3"> Dominion, Loblaw Co. Ltd. <br/> -St.John’s, NL, Canada
                  </div>
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">Oct 2021 - June 2024</div>
                <div className="p-3 text-sm">II was dedicated to addressing customer inquiries and resolving issues efficiently, ensuring a positive
                  shopping experience. I consistently maintained a clean and organized work area, contributing to a
                  welcoming environment. Helped front-end associate concerns and provide guidance as required. Oversees
                  purchase, return and exchange transactions and verifying processes to meet Company guidelines.

                </div>
              </div>
            </div>


            {/* 3 */}
            <div className="flex justify-between h-60">
              {/* LEFT */}
              <div className="w-1/2">
                <div className="text-black bg-gray-200  rounded-b-lg rounded-s-lg">
                  <div className="p-3 font-extrabold text-lg"> Python Developer Intern</div>
                  <div className="p-3"> Algorithma <br/> -Kochi, Kerala, India
                  </div>
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">May 2023 - Aug 2023</div>
                <div className="p-3 text-sm">I was part for developing, testing, and maintaining Python-based software applications and components.
                  During this four-month on-site internship, I collaborated with cross-functional teams, learning best practices
                  for writing clean and testable code, and participating in the full software development lifecycle. I worked
                  primarily with the FastAPI framework to build efficient and scalable backend systems. This internship
                  provided me an excellent opportunity to enhance your Python skills, understand RESTful API development,
                  and contribute to real-world projects in a dynamic and collaborative environment.
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-white rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-[#121212] -left-2 -top-2">
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/2"></div>
            </div>


            {/* 4 */}
            <div className="flex justify-between h-60">
              {/* LEFT */}
              <div className="w-1/2"></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                <div className="w-1 h-full bg-white rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-[#121212] -left-2 -top-2">
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/2">
                <div className="text-black bg-gray-200  rounded-b-lg rounded-e-lg">
                  <div className="p-3 font-extrabold text-lg">Sales Representative</div>
                  <div className="p-3"> Sigma Agencies <br/> -Kollam, Kerala, India
                  </div>
                </div>
                <div className="p-3 text-red-400 text-sm font-semibold">Aug 2018 - Jan 2020</div>
                <div className="p-3 text-sm">I was responsible for engaging customers, understanding their needs, and guiding them to the appropriate
                  home appliance solutions. This role involves demonstrating product knowledge, providing expert advice, and
                  closing sales while ensuring a high level of customer satisfaction.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
