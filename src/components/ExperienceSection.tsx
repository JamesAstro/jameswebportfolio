import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Wrapper } from "./Wrapper";

const experiences = [
  {
    title: "Frontend-Focused Full Stack Developer",
    company: "Skyride Web and Mobile Solutions",
    period: "September 2021 – Present",
    achievements: [
      "Engineered reusable, scalable component libraries using React Hooks, Zustand, and Redux Toolkit, reducing development time by 30% across team sprints.",
      "Integrated RESTful APIs for secure authentication, user management, and real-time messaging, supporting 5,000+ daily active users.",
      "Implemented server-side rendering (SSR) and dynamic rendering in Next.js, boosting SEO rankings by 40% and slashing initial page load times by 25%.",
      "Developed multilingual real-time chat systems leveraging AWS Lambda, WebSocket, Translate, API Gateway, and DynamoDB, enabling seamless global communication in 3+ languages.",
      "Collaborated with cross-functional teams (backend engineers, designers) to translate Figma/PSD prototypes into pixel-perfect UIs, ensuring 100% fidelity to design specs.",
      "Conducted unit testing with Jest, debugging, and performance profiling to achieve 95%+ code coverage and sub-2-second load times.",
      "Actively contributed to Agile workflows, including sprint planning, daily stand-ups, backlog refinements, and peer code reviews, accelerating delivery cycles by 20%.",
    ],
  },
  {
    title: "WordPress Frontend Developer",
    company: "Proweaver",
    period: "October 2018 – January 2020",
    achievements: [
      "Converted complex PSD designs into fully responsive WordPress themes using HTML5, CSS3, JavaScript, and jQuery, achieving cross-browser compatibility across Chrome, Firefox, Safari, and Edge",
      "Optimized page load performance through code minification, image compression, and caching strategies, reducing average load times by 35% and improving Google PageSpeed scores to 90+.",
      "Conducted comprehensive QA testing to ensure design consistency, accessibility compliance (WCAG 2.1), and SEO best practices, resulting in a 25% increase in organic traffic for key sites.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 1xl:px-0 px-4 relative">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">
            My professional journey in web development
          </p>
        </motion.div>

        <div className="max-w-4xl w-full mx-auto space-y-5 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="glass sm:p-8 px-5 py-7 removeAnim rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="sm:text-2xl text-[20px] font-bold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary sm:text-[16px] text-[15px] font-semibold mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 removeAnim text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
