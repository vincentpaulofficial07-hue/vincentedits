import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Particles from "./Particles";
import GlitchText from "./GlitchText";

interface WelcomePageProps {
  onScrollToNext: () => void;
}

export default function WelcomePage({ onScrollToNext }: WelcomePageProps) {
  const subtaglines = [
    "CINEMATIC STORYTELLING",
    "FRAME BY FRAME PERFECTION",
    "YOUR VISION, AMPLIFIED",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Particles density={80} color="#FF0000" />
      </motion.div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <GlitchText
          text="VINCENT EDITING UNIVERSE"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-neon-red mb-8"
          delay={200}
        />
        
        <div className="space-y-4 mb-12">
          {subtaglines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wider"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onScrollToNext}
            className="group relative px-8 py-4 bg-transparent border-2 border-red-600 text-red-600 font-bold text-lg tracking-wider hover:bg-red-600 hover:text-black transition-all duration-300 glow-red"
          >
            ENTER THE UNIVERSE
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <ArrowDown className="w-6 h-6 text-red-600" />
            </motion.div>
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(255, 0, 0, 0.3)",
                  "0 0 40px rgba(255, 0, 0, 0.5)",
                  "0 0 20px rgba(255, 0, 0, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 blur-xl"
            />
            <p className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-base md:text-lg lg:text-xl font-semibold tracking-wide px-6 py-2 border border-red-600/30 rounded-full backdrop-blur-sm bg-black/40">
              Trusted by creators who demand cinematic perfection.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-red-900/10 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}