import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  FileCode2,
  Wind,
  Cloud,
  Link2,
  Server,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "React",
    description: "Component-driven interfaces",
  },
  {
    icon: Zap,
    title: "Next.js",
    description: "Server-side rendering & performance",
  },
  {
    icon: FileCode2,
    title: "TypeScript",
    description: "Type-safe modern JavaScript",
  },
  {
    icon: Wind,
    title: "Tailwind CSS",
    description: "Rapid responsive styling",
  },
  {
    icon: Server,
    title: "Node.js",
    description: "Backend runtime & API development",
  },
  {
    icon: Cloud,
    title: "AWS",
    description: "Cloud scalability & integration",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 15,
    },
  },
};

export const FeaturedSkills = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools I use to build exceptional web experiences
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-lg hover:!border-primary/50 transition-all duration-300 group"
            >
              <skill.icon className="w-12 h-12 text-primary mb-4 group-hover:text-secondary transition-colors duration-300" />
              <h3 className="sm:text-xl  text-[18px] font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
