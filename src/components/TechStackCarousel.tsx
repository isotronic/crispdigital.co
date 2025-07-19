import React, { useRef, useEffect, useState } from "react";

const techStack = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
  { src: "/src/assets/astro-icon-dark.svg", label: "Astro" },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    label: "Tailwind CSS",
  },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", label: "Express.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", label: "Golang" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React Native" },
  { src: "/src/assets/expo-logo.svg", label: "Expo" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", label: "WordPress" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
];

export default function TechStackCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let startTime: number | null = null;
    const speed = 50; // pixels per second
    const itemWidth = 152; // 120px + 32px gap
    const totalItems = techStack.length;
    const totalWidth = itemWidth * totalItems;

    const animate = (currentTime: number) => {
      if (!isAnimating) return;

      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const distance = (speed * elapsed) / 1000; // Convert to pixels

      // Use modulo to create seamless loop
      const scrollPosition = distance % totalWidth;

      container.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    if (isAnimating) {
      startTime = null; // Reset start time when starting animation
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isAnimating]);

  // Create duplicated items for seamless loop
  const duplicatedItems = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg p-8">
      <div
        className="flex items-center gap-8"
        ref={containerRef}
        onMouseEnter={() => setIsAnimating(true)}
        onMouseLeave={() => setIsAnimating(false)}
        style={{
          width: `${duplicatedItems.length * 152}px`, // 120px + 32px gap
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <div key={`${tech.label}-${index}`} className="flex flex-col items-center min-w-[120px] flex-shrink-0">
            <img src={tech.src} alt={tech.label} className="w-16 h-16 mb-2" />
            <span className="text-sm font-medium text-gray-700">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
