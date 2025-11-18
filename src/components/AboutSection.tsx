import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";
import { Wrapper } from "./Wrapper";

const highlights = [
  {
    icon: Code2,
    text: "3+ years of frontend development",
  },
  {
    icon: Palette,
    text: "Design-focused implementation",
  },
  {
    icon: Zap,
    text: "Performance optimization expert",
  },
  {
    icon: Users,
    text: "Collaborative team player",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 1xl:px-0 px-4 relative">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 removeAnim"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 removeAnim"
          >
            <p className="text-lg leading-relaxed">
              I'm a{" "}
              <span className="text-primary font-semibold">
                frontend developer
              </span>{" "}
              passionate about creating seamless, scalable, and user-friendly
              experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I merge design precision with engineering logic to craft
              interactive, performant web apps. I experience and specialize in
              building modern applications using React, Next.js, TypeScript,
              Node.js, and AWS.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My approach combines technical excellence with a keen eye for
              detail, ensuring every project delivers both beauty and
              functionality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-2 gap-4 removeAnim"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-lg text-center removeAnim hover:border-primary/50 transition-all duration-300"
              >
                <highlight.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm">{highlight.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};
