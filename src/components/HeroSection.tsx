import { ChevronDown } from "lucide-react";
import TypingAnimation from "./TypingAnimation";
import CodeBlock from "./CodeBlock";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const codeExample = `const developer = {
  name: "James Astronomo",
  skills: ["React", "Next.js", "TypeScript"],
  passion: "Creating amazing UI",
  
  createMagic: () => {
    return "Beautiful web experiences";
  }
};

console.log(developer.createMagic());`;

  const typingTexts = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Creative Coder",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-4">
            <p className="text-green-400 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-gradient">James Clifford</span>
              <br />
              Astronomo
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 h-12">
              <TypingAnimation
                texts={typingTexts}
                className="code-block text-green-400"
              />
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            I craft beautiful, responsive, and performant web applications using
            modern technologies. Passionate about creating exceptional user
            experiences that bring ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 "
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Right Side - Code Block */}
        <div className="animate-slide-in-right">
          <CodeBlock
            code={codeExample}
            language="javascript"
            className="max-w-lg animate-float"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-green-400" />
      </div>
    </section>
  );
};

export default HeroSection;
