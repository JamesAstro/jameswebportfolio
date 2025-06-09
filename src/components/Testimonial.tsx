import Link from "next/link";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
const Testimonial = () => {
  const testimonials = [
    {
      name: "Jovanni Jungco",
      work: "Fullstack Developer, Skyride Web and Mobile App Solutions",
      text: "Collaborating with James Clifford Astronomo has been an excellent experience. As a talented and committed frontend web developer, he consistently produces top-notch work. He works seamlessly with the team, communicates clearly, and demonstrates a strong desire to grow and enhance his skills.",
      avatar: "/testimonial/jovanni.jpg",
    },
    {
      name: "Kristal Faith Porras",
      work: "Project Manager, Skyride Web and Mobile App Solutions",
      text: "He developed a web application for our client campaign that surpassed all expectations. Its interface is user-friendly, animations are seamless, and it performs perfectly on all devices. I strongly endorse his services.",
      avatar: "/testimonial/faith.jpg",
    },
    {
      name: "Ryan Mark Supremo",
      work: "Software Engineer, Accelbyte",
      text: "Among the finest frontend web developers I've collaborated with, he delivered our MVP on schedule and within budget, showcasing exceptional code quality. His problem-solving skills and meticulous attention to detail significantly enhanced our product.",
      avatar: "/testimonial/ryan.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20  bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Fade cascade direction="up" triggerOnce className="removeAnim">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Code, <span className="text-gradient">Their Words</span>
            </h2>
          </Fade>
        </div>
        <div className="grid mlg:!grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-6 w-full">
          <Fade
            cascade
            direction="up"
            triggerOnce
            className="removeAnim testimonialItems"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm flex flex-col justify-between rounded-lg py-4  px-4 border border-gray-700 hover:border-green-400 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-[1.5rem]">
                  <Quote className="absolute top-[-0.5rem] left-[-0.5rem] text-[#00c951] h-8 w-8" />
                  <p className="text-[#acacac] pt-8 !leading-[1.6] pl-[1.1rem] italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
                <div className="w-full pb-3 flex items-center gap-x-3 gap-2 pl-[1.1rem]">
                  <div className="w-[44px] bgGradient p-[2px] flex-none overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-[500] text-[#e0e0e0]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#8b8b8b]">{testimonial.work}</p>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
