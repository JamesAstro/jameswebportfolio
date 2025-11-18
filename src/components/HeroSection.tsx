import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Wrapper } from "./Wrapper";
import LightRays from "./LightRays";
import { Download } from "lucide-react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "$ pnpm run create-experience...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  async function handleDownload() {
    const response = await fetch("/api/download");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "james-clifford-astronomo-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  return (
    <section
      id="home"
      className="h-[720px] flex items-center lg:px-0 px-4 flex-col justify-center relative overflow-hidden"
    >
      <div className="w-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#16c1f5"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="!absolute lg:!top-0 !left-0 !right-0 !top-[55px]"
          // className="custom-rays"
        />
      </div>
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <Wrapper className="z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl w-full mx-auto "
        >
          {/* Terminal intro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-code text-primary text-sm md:text-base mb-8 flex items-center justify-center gap-2"
          >
            <span>{displayText}</span>
            <span className="blinking-cursor">|</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl !leading-[1.3] lg:text-[65px] font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">James Clifford Astronomo II</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground !leading-[1.6] mb-12 max-w-3xl mx-auto"
          >
            Frontend Developer crafting elegant, performant, and user-focused
            web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => handleScroll("projects")}
              className="bg-gradient-to-r sm:w-auto w-[200px] from-primary to-secondary text-background font-semibold glow-cyan hover:scale-105 transition-all duration-300 px-8"
            >
              View My Work
            </Button>
            <Button
              onClick={handleDownload}
              size="lg"
              variant="outline"
              className="border-primary text-primary sm:w-auto w-[200px] hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8"
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </Wrapper>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-primary" size={32} />
        </motion.div>
      </motion.div>
      {/* <AnimatedBackground /> */}
    </section>
  );
};
