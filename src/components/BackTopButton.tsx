import { useState, useEffect } from "react";
import { ChevronUp, Zap } from "lucide-react";

const BackTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 3000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-[5px] sm:right-[10px] z-[999]">
      {/* Main Button Container */}
      <div
        className="relative group cursor-pointer"
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Outer Hexagonal Frame */}
        <div className="relative sm:w-13 sm:h-13 w-9 h-9">
          {/* Hexagonal Background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md border border-primary/30 transition-all duration-500 group-hover:border-primary group-hover:shadow-neon"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              transform: isHovered
                ? "scale(1.1) rotate(180deg)"
                : "scale(1) rotate(0deg)",
            }}
          />

          {/* Scanning Line Effect */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            }}
          >
            <div
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                animation: "scan 2s linear infinite",
              }}
            />
          </div>

          {/* Inner Core */}
          <div
            className="absolute inset-2 bg-background/80 backdrop-blur-sm border border-primary/20 group-hover:border-primary/50 transition-all duration-300"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <ChevronUp
                  className={`w-6 h-6 transition-all duration-300 ${
                    isHovered ? "text-primary scale-110" : "text-primary/80"
                  }`}
                />
                {isHovered && (
                  <Zap className="absolute inset-0 w-6 h-6 text-accent animate-ping opacity-50" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Holographic Grid Effect */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "4px 4px",
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            }}
          />
        </div>

        {/* Hover Glow Effect */}
        {isHovered && (
          <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse rounded-full scale-150" />
        )}
      </div>
    </div>
  );
};

export default BackTopButton;
