import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import Particles from "./Particles";

interface ProjectsPageProps {
  projects?: Array<{ id: string; title: string; videoId: string }>;
}

export default function ProjectsPage({
  projects = [
    { id: "1", title: "Cinemati Travel Film", videoId: "0bEaG99umD0" },
    { id: "2", title: "Cinematic Travel Film", videoId: "flqL0IZOZvY" },
    { id: "3", title: "Cinematic Travel Film", videoId: "IuTDuvYr7f0" },
    { id: "4", title: "Documentary", videoId: "kNuwCiuDz4E" },
    { id: "5", title: "Day In My Life", videoId: "EFugsGU2llQ" },
    { id: "6", title: "Fitness Vlog", videoId: "xlCBWlsKZXY" },
  ],
}: ProjectsPageProps) {
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(
    new Set(),
  );
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    projects.forEach((project) => {
      const element = projectRefs.current.get(project.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set(prev).add(project.id));
          }
        },
        { threshold: 0.2 },
      );

      observer.observe(element);
      observers.set(project.id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [projects]);

  return (
    <section className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      <Particles density={40} color="#FF0000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-neon-red mb-16"
        >
          FEATURED PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el) => {
                if (el) projectRefs.current.set(project.id, el);
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: visibleProjects.has(project.id) ? 1 : 0,
                y: visibleProjects.has(project.id) ? 0 : 50,
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-video bg-[#111111] rounded-lg overflow-hidden border-2 border-gray-800 hover:border-red-600 transition-all duration-300"
            >
              <div className="absolute inset-0 group-hover:glow-red-strong transition-all duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              </div>

              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center glow-red-strong"
                >
                  <Play className="w-8 h-8 text-white fill-white" />
                </motion.div>
                <h3 className="text-white font-bold text-xl text-center">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm text-center italic">
                  Edited by Vincent — Every frame tells a story
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />
    </section>
  );
}
