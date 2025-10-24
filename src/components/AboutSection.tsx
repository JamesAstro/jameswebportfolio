import { Download, Award, Coffee, Users, AwardIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "20+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: AwardIcon, label: "Years of Experience", value: "4+" },
  ];

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
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Fade cascade direction="up" triggerOnce className="removeAnim">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <Fade direction="left" triggerOnce className="removeAnim">
            <div className="space-y-6 ">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-left text-center font-semibold text-white">
                  Full Stack Developer / Frontend Developer
                </h3>
                <p className="text-gray-300  leading-relaxed">
                  I’m a passionate web developer with 4+ years of experience
                  building scalable and user-friendly web applications. My
                  journey began with curiosity about how websites work and has
                  grown into a love for creating elegant solutions to complex
                  problems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in modern JavaScript frameworks, cloud
                  architecture, and delivering seamless user experiences. From
                  simple landing pages to complex applications, I bring
                  dedication and attention to detail to every project.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Outside of coding, I enjoy exploring new technologies,
                  contributing to open-source projects, and mentoring aspiring
                  developers. I believe in the power of technology to transform
                  ideas into real-world solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
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
                  Let's Talk
                </Button>
              </div>
            </div>
          </Fade>

          {/* Right side - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
            <Fade cascade direction="up" triggerOnce className="removeAnim">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
