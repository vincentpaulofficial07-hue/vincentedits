import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HeroVideoPageProps {
  videoUrl?: string;
}

export default function HeroVideoPage({
  videoUrl = "https://www.youtube.com/embed/FY0As-w-kDQ?autoplay=1&loop=1&playlist=FY0As-w-kDQ&controls=0&showinfo=0&rel=0",
}: HeroVideoPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="eager"
          title="Vincent Editing Universe Hero Video"
          frameBorder={0}
          style={{ border: "none" }}
        />
      </div>
    </motion.div>
  );
}
