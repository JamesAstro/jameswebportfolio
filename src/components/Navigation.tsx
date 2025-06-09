import { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";

import { LuLinkedin } from "react-icons/lu";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm "
          : "md:bg-transparent bg-gray-900/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-green-400 animate-glow" />
            <span className="lg:text-xl text-[17px]  font-bold text-gradient">
              JamesEyedeaz
            </span>
            {/* <div className="animate-glow2 w-[120px] px-4 py-1 rounded-[20px]">
              <Image
                src="/logo.png"
                alt="JamesAstro Logo"
                width={100}
                height={100}
                className="w-full h-full "
              />
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ">
            <div className="flex items-center lg:space-x-8 space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 text-[15px] lg:text-[16px] hover:text-green-400 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 lg:ml-12 ml-8">
              <Link
                href="https://www.linkedin.com/in/jamesastronomo/"
                target="_blank"
                className="text-[19px] text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <LuLinkedin />
              </Link>
              <Link
                href="https://github.com/JamesAstro"
                target="_blank"
                className=" text-[19px] text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FiGithub />
              </Link>
              <Link
                href="mailto:astronomojamesclifford@gmail.com"
                className=" text-[19px] text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <MdMailOutline />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm ">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-center  text-gray-300 border border-gray-700 hover:text-green-400 transition-colors duration-200 w-full "
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex w-full items-center justify-center space-x-4 px-5 py-2 pb-4">
              <Link
                href="https://www.linkedin.com/in/jamesastronomo/"
                target="_blank"
                className="text-[19px] text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <LuLinkedin />
              </Link>
              <Link
                href="https://github.com/JamesAstro"
                target="_blank"
                className=" text-[19px] text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FiGithub />
              </Link>
              <Link
                href="mailto:astronomojamesclifford@gmail.com"
                className=" text-[19px] text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <MdMailOutline />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
