import { Quote } from "lucide-react";
import Image from "next/image";
import { Wrapper } from "./Wrapper";
import { motion } from "framer-motion";

export const Testimonial = () => {
  const testimonials = [
    {
      name: "Jovanni Jungco",
      work: "Fullstack Developer, 24x7 Direct",
      text: "Collaborating with James Clifford Astronomo has been an excellent experience. As a talented and committed frontend web developer, he consistently produces top-notch work. He works seamlessly with the team, communicates clearly, and demonstrates a strong desire to grow and enhance his skills.",
      avatar: "/testimonial/jovanni.jpg",
    },
    {
      name: "Kristal Faith Porras",
      work: "Project Manager, Skyride Web and Mobile Solutions",
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
    <section id="testimonial" className="py-20 relative 1xl:px-0 px-4">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Code, Their Words
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  sm:gap-8 w-full max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, rotateY: 2 }}
              className="glass rounded-lg flex flex-col justify-between overflow-hidden group p-6"
            >
              <div className="relative mb-[1.5rem]">
                <Quote className="absolute top-0 left-0 text-primary h-8 w-8" />
                <p className="text-[#acacac] pt-12 !leading-[1.9] pl-[1rem]  italic">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
              <div className="w-full pb-3 flex items-center gap-x-3 gap-2 pl-[1rem]">
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
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
