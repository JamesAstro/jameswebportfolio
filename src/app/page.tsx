"use client";

import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
