import { useState } from "react";
import { motion } from "framer-motion";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Wrapper } from "./Wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "astronomojamesclifford@gmail.com",
      href: "mailto:astronomojamesclifford@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 (994) 469-7393",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Philippines",
      href: "#",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative 1xl:px-0 px-4">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              I'm open to collaborations, freelance work, and full-time roles.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-6 ">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Let's Connect
                </h3>

                {contactInfo.map((info, index) => (
                  <Card key={info.label} className="glass">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <a
                            href={info.href}
                            className="text-white  sm:text-[16px] text-[15px] "
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 ">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="text-white">Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className=" text-white placeholder-gray-400 glass"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className=" text-white placeholder-gray-400 glass"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-300">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Project Inquiry"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className=" text-white placeholder-gray-400 glass"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">
                          Message
                        </Label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell me about your project..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2  rounded-md text-white placeholder-gray-400 focus:outline-none resize-none glass"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10 hover:scale-102 transition-all duration-300 px-8"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Wrapper>
    </section>
  );
};
