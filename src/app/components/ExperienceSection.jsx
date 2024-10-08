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
            {/* Desktop view*/}
            <div className="hidden lg:inline-block">

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
                  <div className="p-3 text-sm">
                    - Leading the design and implementation of a 3D holographic visualization
                    platform using Unreal Engine and C++, converting complex global wind datasets
                    into interactive simulations.<br/>
                    - Analyzing the impact of atmospheric dynamics on flight trajectories, offering
                    data-driven insights to enhance aviation safety and operational efficiency.<br/>
                    - Collaborating with researchers to apply cutting-edge visual computing
                    techniques, integrating real-time wind data to create immersive environments
                    that aid in decision-making for aviation professionals.
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
                    <div className="p-3 font-extrabold text-lg"> Freelance Advanced Coder - AI Training</div>
                    <div className="p-3"> Outlier.ai <br/> -Remote, Canada
                    </div>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">Oct 2024 - Current</div>
                  <div className="p-3 text-sm">
                    - Collaborated on projects to train generative artificial intelligence (AI) models like
                    MetaAI, focusing on improving the quality of AI-generated code. <br/>
                    - Evaluated and ranked AI-generated code across various languages including
                    Python, Java, JavaScript, Swift, C# and C++.<br/>
                    - Contributed to enhancing AI models’ understanding of complex coding concepts,
                    improving performance and reliability in practical applications.

                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="flex justify-between h-60">
                {/* LEFT */}
                <div className="w-1/2">
                  <div className="text-black bg-gray-200 rounded-b-lg rounded-s-lg">
                    <div className="p-3 font-extrabold text-lg"> Customer Service Supervisor</div>
                    <div className="p-3"> Dominion, Loblaw Co. Ltd. <br/> -St.John’s, NL, Canada
                    </div>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">Oct 2021 - June 2024</div>
                  <div className="p-3 text-sm">
                    - I was dedicated to addressing customer inquiries and resolving issues
                    efficiently, ensuring a positive shopping experience.<br/>
                    - I consistently maintained a clean and organized work area, contributing to a
                    welcoming environment. <br/>
                    - Helped front-end associate concerns and provide guidance as required.<br/>
                    - Oversees purchase, return and exchange transactions and verifying processes to meet Company
                    guidelines.
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
                    <div className="p-3 font-extrabold text-lg"> Python Developer Intern</div>
                    <div className="p-3"> Algorithma <br/> -Kochi, Kerala, India
                    </div>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">May 2023 - Aug 2023</div>
                  <div className="p-3 text-sm">
                    -Developed scalable backend systems using FastAPI, improving application
                    performance and reducing response times by 20%.<br/>
                    - Contributed to the full software development lifecycle, from design and testing to
                    deployment, ensuring the delivery of reliable Python-based applications. <br/>
                    - Collaborated with cross-functional teams to implement RESTful APIs, facilitating
                    seamless communication between backend services and frontend applications.
                  </div>
                </div>
              </div>

            </div>



            {/* Mobile view*/}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 gap-8">
                <div className="border-b-2">
                  <div className="text-black bg-gray-200 rounded-t-lg">
                    <div className="p-3 font-extrabold text-lg"> Software Developer Research Assistant</div>
                    <div className="p-3"> Visual and Analytic Computing (VAC) Lab <br/> -St.John’s, NL, Canada
                    </div>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">May 2024 - Current</div>
                  <div className="p-3 text-sm">
                    - Leading the design and implementation of a 3D holographic visualization
                    platform using Unreal Engine and C++, converting complex global wind datasets
                    into interactive simulations.<br/>
                    - Analyzing the impact of atmospheric dynamics on flight trajectories, offering
                    data-driven insights to enhance aviation safety and operational efficiency.<br/>
                    - Collaborating with researchers to apply cutting-edge visual computing
                    techniques, integrating real-time wind data to create immersive environments
                    that aid in decision-making for aviation professionals.
                  </div>
                </div>

                <div className="border-b-2">
                  <div className="text-black bg-gray-200 rounded-t-lg">
                    <div className="p-3 font-extrabold text-lg"> Freelance Advanced Coder - AI Training</div>
                    <div className="p-3"> Outlier.ai <br/> -Remote, Canada

                    </div>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">Oct 2024 - Current</div>
                  <div className="p-3 text-sm">
                    - Collaborated on projects to train generative artificial intelligence (AI) models like
                    MetaAI, focusing on improving the quality of AI-generated code. <br/>
                    - Evaluated and ranked AI-generated code across various languages including
                    Python, Java, JavaScript, Swift, C# and C++.<br/>
                    - Contributed to enhancing AI models’ understanding of complex coding concepts,
                    improving performance and reliability in practical applications.
                  </div>
                </div>

                <div className="border-b-2">
                  <div className="text-black bg-gray-200  rounded-t-lg">
                    <div className="p-3 font-extrabold text-lg"> Customer Service Supervisor</div>
                    <div className="p-3"> Dominion, Loblaw Co. Ltd. <br/> -St.John’s, NL, Canada
                    </div>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">Oct 2021 - June 2024</div>
                  <div className="p-3 text-sm">
                    - I was dedicated to addressing customer inquiries and resolving issues
                    efficiently, ensuring a positive shopping experience.<br/>
                    - I consistently maintained a clean and organized work area, contributing to a
                    welcoming environment. <br/>
                    - Helped front-end associate concerns and provide guidance as required.<br/>
                    - Oversees purchase, return and exchange transactions and verifying processes to meet Company
                    guidelines.
                  </div>
                </div>
                <div className="border-b-2">
                  <div className="text-black bg-gray-200  rounded-t-lg">
                    <div className="p-3 font-extrabold text-lg"> Python Developer Intern</div>
                    <div className="p-3"> Algorithma <br/> -Kochi, Kerala, India
                    </div>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">May 2023 - Aug 2023</div>
                  <div className="p-3 text-sm">
                    -Developed scalable backend systems using FastAPI, improving application
                    performance and reducing response times by 20%.<br/>
                    - Contributed to the full software development lifecycle, from design and testing to
                    deployment, ensuring the delivery of reliable Python-based applications. <br/>
                    - Collaborated with cross-functional teams to implement RESTful APIs, facilitating
                    seamless communication between backend services and frontend applications.
                  </div>
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
