"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const HeroSection = () => {
  return (
    <section className="lg:py-28">
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
          Hey.. I&apos;m{""}
        </span>
            <br></br>
            <TypeAnimation
                sequence={[
                    "Sooraj Nair",
                    3000,
                    "a Software Developer",
                    1000,
                    "a Web Developer",
                    1000,
                    "a Game Developer",
                    1000,
                    "a Data Scientist",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Crafting seamless code solutions to turn visionary ideas into digital reality.
            </p>
            <div>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/SoorajNair-001" target={"_blank"}>
                        <Image src={GithubIcon} alt="Github Icon" className="py-3" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sooraj-nair01/" target={"_blank"}>
                        <Image src={LinkedinIcon} alt="Linkedin Icon" className="py-3"/>
                    </Link>
                    <div>
                    <Link
                        href="/Resume.pdf"
                        target={"_blank"}
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                    >
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                    </span>
                    </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  );
};

export default HeroSection;
