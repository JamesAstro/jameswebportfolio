import { ExternalLink, Github, Eye } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Filipina Dream Girl",
      description:
        "A platform connecting Filipina singles with German men for meaningful relationships, featuring seamless chat, chat translations, media uploads, and secure Paypal subscriptions to foster growth and connection.",
      image: "/projects/fdg.jpg",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Typescript",
        "Drizzle ORM",
        "AWS Websockets",
        "AWS Lambda",
        "PlanetScale",
        "Contentful",
        "Paypal",
      ],
      liveUrl: "https://filipinadreamgirl.com",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Nexus ODM",
      description:
        "A dynamic platform connecting influencers and businesses to collaborate, grow their brands, and monetize opportunities seamlessly.",
      image: "/projects/nexus-odm.jpg",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "TypeScript",
        "PusherJS",
        "AWS",
        "Drizzle ORM",
        "Contentful",
      ],
      liveUrl: "https://nexus-odm.com",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Set Dialer",
      description:
        "A web app empowers real estate agents with an auto-dialer that calls leads from a CSV upload and includes in-call note-taking and lead management tools to streamline your workflow.",
      image: "/projects/set-dialer.jpg",
      technologies: [
        "React",
        "Next.js",
        "CSS3",
        "PusherJS",
        "AWS",
        "Twilio",
        "DynamoDB",
      ],
      liveUrl:
        "https://drive.google.com/file/d/1G3WsCyON5hFrOLubfe2KSKNbTkNRi-0v/view?usp=sharing",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Love Bohol Portal",
      description:
        "A website portal for the Bohol Guide mobile app, enabling businesses to access and manage their listings.",
      image: "/projects/love-bohol-portal.jpg",
      technologies: [
        "React",
        "Next.js",
        "Material UI",
        "AWS",
        "AWS Image Recognition",
        "Algolia",
      ],
      liveUrl: "https://www.beholdbohol.com/",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Jcinema",
      description:
        "A movie website using Next js with The Movie Database API and Tailwind CSS.",
      image: "/projects/jcinema.jpg",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "The Movie Database API",
      ],
      liveUrl: "https://j-cinema.vercel.app/",
      githubUrl: "https://github.com/JamesAstro/JCinema",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work and creative projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-green-400 transition-all duration-300 overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-green-500 hover:bg-green-600 text-black"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-400 text-green-400"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div> */}
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription
                  className={cn(
                    "text-gray-400 min-h-[60px]",
                    index === featuredProjects.length - 1 && "min-h-[auto]"
                  )}
                >
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-full mt-6 flex items-center gap-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-green-500 hover:bg-green-600  h-9 px-3 text-black"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Live Demo
                  </Link>
                  {project.githubUrl.length > 0 && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="border-green-400 border h-9  px-3  bg-background hover:bg-accent hover:text-accent-foreground text-green-400 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    >
                      <FiGithub className="w-4 h-4 mr-1" />
                      Code
                    </Link>
                    // <Button
                    //   size="sm"
                    //   variant="outline"
                    //   className="border-green-400 text-green-400"
                    // >
                    //   <Github className="w-4 h-4 mr-1" />
                    //   Code
                    // </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-gray-900/30 backdrop-blur-sm border-gray-700 hover:border-green-400 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-green-400 hover:text-white p-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-green-400 hover:text-white p-1"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
