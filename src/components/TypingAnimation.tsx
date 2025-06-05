import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

const TypingAnimation = ({ texts, className = "" }: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={`${className} border-r-2 border-green-400 animate-pulse`}>
      {currentText}
    </span>
  );
};

export default TypingAnimation;
