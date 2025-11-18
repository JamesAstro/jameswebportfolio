import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Code2,
  FileJson2,
  Database,
  Cloud,
  TestTube2,
  Settings,
  ListPlus,
} from "lucide-react";
import { Wrapper } from "./Wrapper";

const techStack = {
  Frontend: [
    "ReactJS",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn",
    "Radix UI",
    "MUI",
    "HTML5",
    "CSS3",
  ],
  "Backend & APIs": ["Node.js", "Express.js", "REST APIs", "GraphQL", "tRPC"],
  "State Management": ["Redux Toolkit", "Zustand", "Context API"],
  Databases: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB"],
  "Cloud & Deployment": ["AWS", "Vercel", "Netlify"],
  "Testing & Tools": [
    "Jest",
    "Postman",
    "Git",
    "GitHub",
    "GitLab",
    "Axios",
    "Figma",
    "Framer Motion",
    "Contentful",
    "Github Copilot",
  ],
  Others: [
    "Clerk Auth",
    "Agile",
    "AWS WebSocket",
    "AWS S3",
    "AWS Lambda",
    "AWS Amplify",
    "AWS Translate",
    "npm/yarn/pnpm",
    "Drizzle ORM",
    "Performance Optimization",
    "Cross-Browser Compatibility",
    "UI/UX Collaboration",
    "Wordpress",
  ],
};

const categoryIcons: { [key: string]: any } = {
  Frontend: Code2,
  "Backend & APIs": FileJson2,
  "State Management": Settings,
  Databases: Database,
  "Cloud & Deployment": Cloud,
  "Testing & Tools": TestTube2,
  Others: ListPlus,
};

export const TechStack = () => {
  return (
    <section id="tech" className="py-20 relative 1xl:px-0 px-4">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 sm:gap-8 w-full max-w-full  1xl:max-w-7xl mx-auto">
          {Object.entries(techStack).map(
            ([category, technologies], catIndex) => {
              const Icon = categoryIcons[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                  className={cn(
                    "glass p-6 rounded-lg",
                    catIndex === 6 ? "lg:col-span-3 sm:col-span-2" : ""
                  )}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIndex * 0.1 + techIndex * 0.05,
                        }}
                        whileHover={{
                          scale: 1.05,
                          rotateY: 5,
                        }}
                        className="px-3 py-1.5 text-sm rounded-md bg-muted/50 border border-border hover:border-primary/50 hover:glow-cyan transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </Wrapper>
    </section>
  );
};
