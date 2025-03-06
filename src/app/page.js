import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Image from "next/image";
import React from "react";
import ExperienceSection from "@/app/components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <Image
            src="/images/top-banner-image.png"
            alt="hero image"
            className="absolute bg-no-repeat bg-cover object-cover"
            width={1920}
            height={684}
            quality="100"
            priority
            style={{width:'100%', height:'684px', alignSelf:'center'}}
        />

        <div className="container mt-24 mx-auto px-4 py-4 z-0">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
        </div>
        <Footer />
    </main>
  );
}
