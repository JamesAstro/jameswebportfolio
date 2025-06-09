"use client";

import { LuLinkedin } from "react-icons/lu";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { Code } from "lucide-react";
const Footer = () => {
  const socialLinks = [
    {
      icon: LuLinkedin,
      href: "https://www.linkedin.com/in/jamesastronomo/",
      label: "LinkedIn",
    },
    { icon: FiGithub, href: "https://github.com/JamesAstro", label: "Github" },
    {
      icon: MdMailOutline,
      href: "mailto:astronomojamesclifford@gmail.com",
      label: "Email",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-1">
              <Code className="w-6 h-6 text-green-400" />
              <span className="text-[17px]  font-bold text-gradient">
                JamesEyedeaz
              </span>
            </div>

            <p className="text-muted-foreground text-xs mt-1 font-medium tracking-wide">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index: number) => (
              <a
                key={social.label}
                href={social.href}
                target={index > 1 ? "_self" : "_blank"}
                className="p-2 bg-card/50 rounded-lg border border-border hover:bg-card/80 hover:border-primary/50 transition-colors text-muted-foreground hover:text-primary"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
