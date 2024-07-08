"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 14,
    title: "Wind Data for Enhanced Flight Trajectories",
    description: "Constructing wind data into a 3D holographic environment using Unreal Engine and C++, " +
        "the project aims to analyze the impact of varying wind conditions on flight trajectories. " +
        "This innovative approach provides valuable insights to enhance aviation safety and efficiency.",
    image: "/images/projects/14.png",
    tag: ["All", "Data"],
    gitUrl: "nil",
    previewUrl: "nil",
  },
  {
    id: 13,
    title: "Portfolio Website",
    description: "Current version of my portfolio website. Made using Javascript Next.js(React) & Tailwind(CSS).",
    image: "/images/projects/13.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SoorajNair-001/My-Portfolio-Website",
    previewUrl: "nil",
  },
  {
    id: 12,
    title: "Data Interactive Dashboard - Open Gym Activity",
    description: " Made a interactive dashboard that allows " +
        "to understand how well the city's open gym activities are serving their community." +
        " Involved Python, Jupyter Notebook, Matplotlib, seaborn & Dash",
    image: "/images/projects/12.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/SoorajNair-001/Data-Interactive-Dashboard---Open-Gym-Activity",
    previewUrl: "nil",
  },
  {
    id: 11,
    title: "Data Infographic - Tely 10 Mile Road Race",
    description: " Created an infographic data visualization from race data for over 15 years. This helps " +
        "explore trends in the data. Involved Python, Jupyter Notebook, Matplotlib and Seaborn.",
    image: "/images/projects/11.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/SoorajNair-001/Data-Infographic---Tely-10-Mile-Road-Race",
    previewUrl: "nil",
  },
  {
    id: 10,
    title: "Utility App UX Design",
    description: "Made a To-Do list app and enhanced the user experience by developing its user interface" +
        " using Unreal Engine.",
    image: "/images/projects/10.png",
    tag: ["All"],
    gitUrl: "https://github.com/SoorajNair-001/Utility-App-UX-Design",
    previewUrl: "nil",
  },
  {
    id: 9,
    title: "Video Game UX Design",
    description: "Create a 3D zombie shooting game and improve the user experience by designing its user interface" +
        " and visual effects in Unreal Engine.",
    image: "/images/projects/9.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/SoorajNair-001/Video-Game-UX-Design",
    previewUrl: "nil",
  },
  {
    id: 8,
    title: "Eclipse of the Swarmlings",
    description: "The horror/survival video 2D-platformer game. Made custom game engine with C++ and SFML library." +
        " Included features like shaders, physics, pathfinding, ray-casting and parallax.",
    image: "/images/projects/8.png",
    tag: ["All", "Game"],
    gitUrl: "nil",
    previewUrl: "https://youtu.be/bYSdEkDFDBg",
  },
  {
    id: 7,
    title: "Format String and Buffer-overflow attacks",
    description: "Perform cyber attacks on a local server." +
        " Breach the security and gain administrative access to the server. Fixed the vulnerability to prevent anymore attacks." +
        " Involved Linux, Python & C.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SoorajNair-001/Format-String-and-Buffer-overflow-attacks",
    previewUrl: "nil",
  },
  {
    id: 6,
    title: "Portfolio Website Old",
    description: "First version of my personal portfolio website. Made using HTML, CSS, Javascript & JQuery",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SoorajNair-001/MyPortFolio-old-version",
    previewUrl: "nil",
  },
  {
    id: 5,
    title: "Procedural Content Generation",
    description: "Python-based group project to develop a" +
        " Minecraft settlement generator for the Generative Design in Minecraft" +
        " Competition (GDMC)." +
        " Used algorithms like Minimum search tree, Perlin noise & BFS.",
    image: "/images/projects/5.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/SoorajNair-001/Minecraft-PCG",
    previewUrl: "https://www.youtube.com/watch?v=GGgWgoJpeFE",
  },
  {
    id: 4,
    title: "Online Student Tool",
    description: "Group project to develop the client-side and server-side for a " +
        "student portal web application. Created databases for the courses and students. Used HTML, CSS, jQuery, " +
        "Javascript, Node.js, Express.js & Mocha.js.",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Data"],
    gitUrl: "https://github.com/SoorajNair-001/Online-Student-Portal",
    previewUrl: "https://youtu.be/TgQ3AKpMDhA",
  },
  {
    id: 3,
    title: "Decision Tree Data-Mining",
    description: "Generate decision tree and data visualization " +
        "from pre-processed data. Using Python & NumPy.",
    image: "/images/projects/3.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/SoorajNair-001/Decision-Tree-Data-mining",
    previewUrl: "nil",
  },
  {
    id: 2,
    title: "KingDomino Board Game",
    description: "Group project to create the multiplayer board game with AI and 2D graphics. " +
        "Used Java, Swing & Photoshop",
    image: "/images/projects/2.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/SoorajNair-001/KingDomino",
    previewUrl: "nil",
  },
  {
    id: 1,
    title: "3D Character Skin Modelling",
    description: "Concept character skin design competition by Supercell (mobile game developer) involving 3D modelling with textures" +
        " and materials (UV) using Blender 3D & Adobe Photoshop/Lightroom.",
    image: "/images/projects/1.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/SoorajNair-001/ClashOfClans_Barbarian_King_Blender3D",
    previewUrl: "nil",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-28 mb-8 md:mb-4 sm:py-0 xl:px-20">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 scale-75">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Data"
            isSelected={tag === "Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}

            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
