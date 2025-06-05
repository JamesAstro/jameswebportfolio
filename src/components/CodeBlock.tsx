import { useState, useEffect } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

const CodeBlock = ({ code, language, className = "" }: CodeBlockProps) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const lines = code.split("\n");

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < lines.length) {
          return prev + 1;
        }
        // Reset animation
        setTimeout(() => setVisibleLines(0), 2000);
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [lines.length]);

  const highlightSyntax = (line: string) => {
    let highlighted = line;

    // Keywords
    highlighted = highlighted.replace(
      /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default)\b/g,
      '<span class="text-blue-400">$1</span>'
    );

    // Strings
    highlighted = highlighted.replace(
      /(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g,
      '<span class="text-green-300">$1$2$3</span>'
    );

    // Comments
    highlighted = highlighted.replace(
      /(\/\/.*)/g,
      '<span class="text-gray-500">$1</span>'
    );

    // Numbers
    highlighted = highlighted.replace(
      /\b(\d+)\b/g,
      '<span class="text-yellow-400">$1</span>'
    );

    return highlighted;
  };

  return (
    <div
      className={`bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-hidden ${className}`}
    >
      <div className="flex items-center mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-gray-400 text-xs">{language}</span>
      </div>
      <div className="text-green-400">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div
            key={index}
            className="animate-fade-in opacity-0"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            <span className="text-gray-500 mr-4 select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: highlightSyntax(line || " "),
              }}
            />
          </div>
        ))}
        {visibleLines < lines.length && (
          <div className="animate-pulse">
            <span className="text-gray-500 mr-4">
              {String(visibleLines + 1).padStart(2, "0")}
            </span>
            <span className="bg-green-400 w-2 h-4 inline-block animate-blink"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;
