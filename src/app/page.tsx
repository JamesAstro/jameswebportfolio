"use client";

import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Testimonial } from "@/components/Testimonial";
import Layout from "@/components/Layout";
import { Footer } from "@/components/Footer";
import { FeaturedSkills } from "@/components/FeaturedSkills";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";

const Home = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <Layout>
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <FeaturedSkills />
        <AboutSection />
        <ExperienceSection />
        <FeaturedProjects />
        <TechStack />

        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
