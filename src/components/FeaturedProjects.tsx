import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wrapper } from "./Wrapper";
import Link from "next/link";

const projects = [
  {
    title: "Filipina Dream Girl",
    description:
      "A platform connecting Filipina singles with German men for meaningful relationships, featuring seamless chat, chat translations, media uploads, and secure Paypal subscriptions to foster growth and connection.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Typescript",
      "Node.js",
      "Redux",
      "AWS Translate",
      "AWS Websocket",
      "AWS Lambda",
      "Drizzle ORM",
      "PlanetScale",
      "Contentful",
      "Paypal",
    ],
    image: "/projects/fdg.jpg",
    liveUrl: "https://filipinadreamgirl.com",
  },
  {
    title: "Nexus ODM",
    description:
      "A dynamic platform connecting influencers and businesses to collaborate, grow their brands, and monetize opportunities seamlessly.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Redux",
      "Zustand",
      "TypeScript",
      "PusherJS",
      "AWS",
      "Clerk Auth",
      "Xata DB",
      "Drizzle ORM",
      "Contentful",
      "Stripe",
      "Metricool",
    ],
    image: "/projects/nexus-odm.jpg",
    liveUrl: "https://nexus-odm.com",
  },
  {
    title: "Set Dialer",
    description:
      "A web app empowers real estate agents with an auto-dialer that calls leads from a CSV upload and includes in-call note-taking and lead management tools to streamline your workflow.",
    tech: [
      "React",
      "Next.js",
      "CSS3",
      "Redux",
      "PusherJS",
      "AWS Lambda",
      "AWS S3",
      "AWS DynamoDB",
      "AWS API Gateway",
      "Twilio",
      "DynamoDB",
      "Paypal",
    ],
    image: "/projects/set-dialer.jpg",
    liveUrl:
      "https://drive.google.com/file/d/1G3WsCyON5hFrOLubfe2KSKNbTkNRi-0v/view?usp=sharing",
  },
  {
    title: "Love Bohol Web App",
    description:
      "A website app version of the Bohol Guide mobile app, enabling peope to see hotels, restaurants, and activities in Bohol.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "AWS S3",
      "AWS Amplify",
      "Algolia",
      "AWS API Gateway",
      "AWS Lambda",
    ],
    image: "/projects/love-bohol-web-app.jpg",
    liveUrl: "https://love.beholdbohol.com/",
  },

  {
    title: "Love Bohol Portal",
    description:
      "A website portal for the Bohol Guide mobile app, enabling businesses to access and manage their listings.",
    tech: [
      "React",
      "Next.js",
      "Material UI",
      "AWS S3",
      "AWS Lambda",
      "AWS Image Recognition",
      "Algolia",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
    ],
    image: "/projects/love-bohol-portal.jpg",
    liveUrl: "https://beholdbohol.com/",
  },
  {
    title: "Jcinema",
    description:
      "A personal project which is a movie website using Next.js with  the The Movie Database API and Tailwind CSS.",
    tech: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "The Movie Database API",
    ],
    image: "/projects/jcinema.jpg",
    liveUrl: "https://j-cinema.vercel.app/",
  },
  {
    title: "Skyride Apps",
    description:
      "A new website landing page for the Skyride Apps company, a web and mobile solutions company that helps businesses and individuals.",
    tech: [
      "React",
      "Tanstack Start",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "React Bits",
    ],
    image: "/projects/skyride-apps.jpg",
    liveUrl: "https://skyride-apps.vercel.app/",
  },
  {
    title: "My Web Portfolio",
    description:
      "My personal web portfolio built with Next.js, Tailwind CSS, and TypeScript.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/james-portfolio.jpg",
    liveUrl: "https://jameswebportfolio.vercel.app/",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 relative 1xl:px-0 px-4">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work that showcases my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-5 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, rotateY: 2 }}
              className="glass rounded-lg flex flex-col justify-between overflow-hidden group"
            >
              <div className="w-full h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-[18px] font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 ">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full p-6 pb-8 pt-1">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full h-9 rounded-md px-3 border-primary/50 hover:bg-primary/10   border  bg-background  hover:text-accent-foreground"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
