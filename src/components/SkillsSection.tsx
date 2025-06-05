import { useState } from "react";
import { Code, Laptop, Terminal } from "lucide-react";
import { STACK_LIST, TOOL_LIST } from "@/lib/const";
import { StackItem } from "@/lib/types";
import Image from "next/image";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 91 },
      ],
    },
    {
      icon: Terminal,
      title: "Development Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 90 },
        { name: "Github", level: 90 },
        { name: "GitLab", level: 90 },
        { name: "NPM/Yarn/PNPM", level: 85 },
        { name: "Prettier", level: 90 },
      ],
    },
    {
      icon: Laptop,
      title: "UI/UX & Design",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 96 },
        { name: "Animation", level: 80 },
        { name: "Accessibility", level: 82 },
        { name: "Performance", level: 85 },
        { name: "SEO", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-gradient">Tools</span> and{" "}
            <span className="text-gradient"> Stacks</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className=" bg-gray-900/50 backdrop-blur-sm rounded-lg py-9  px-6 border border-gray-700 hover:border-green-400 transition-all duration-300 animate-fade-in">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">My Tech Stack</h3>
          </div>
          <div className="grid grid-cols-10 gap-4">
            {STACK_LIST.map((stack: StackItem, index: number) => (
              <div className="flex items-center gap-2 flex-col" key={index}>
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  className="w-10 h-10"
                  width={100}
                  height={100}
                />
                <span className="text-xs font-medium text-[#eee]">
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-14 mb-6">
            <Code className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">
              Development Tools
            </h3>
          </div>
          <div className="grid grid-cols-10 gap-4">
            {TOOL_LIST.map((stack: StackItem, index: number) => (
              <div className="flex items-center gap-2 flex-col" key={index}>
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  className="w-10 h-10"
                  width={100}
                  height={100}
                />
                <span className="text-xs font-medium text-[#eee]">
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className=" bg-gray-900/50 backdrop-blur-sm mt-5 rounded-lg py-7  px-6 border border-gray-700 hover:border-green-400 transition-all duration-300 animate-fade-in">
          <h2 className="text-center text-xl font-semibold text-white mb-5">
            Other Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center px-20 gap-3">
            {[
              "Responsive Design",
              "Performance Optimization",
              "Agile/Scrum",
              "WordPress",
              "Vercel",
              "Authentication",
              "Clerk.dev",
              "Web Accessibility",
              "SEO",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-secondary px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
