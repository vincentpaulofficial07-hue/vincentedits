import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ReserveSlotPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on HeroVideoPage
    const isHeroPage = window.location.pathname
      .toLowerCase()
      .includes("herovideopage");
    if (!isHeroPage) {
      // Delay appearance slightly for elegance
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleClick = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed bottom-10 right-10 z-50 flex flex-col items-center"
        >
          {/* Brighter, solid, premium red orb */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleClick}
            animate={{
              boxShadow: [
                "0 0 40px rgba(255,0,0,1)",
                "0 0 80px rgba(255,40,40,1)",
                "0 0 40px rgba(255,0,0,1)",
              ],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[150px] h-[150px] rounded-full 
              bg-gradient-to-br from-red-800 via-red-600 to-red-700
              border-2 border-red-500 flex items-center justify-center 
              cursor-pointer overflow-hidden shadow-[0_0_45px_rgba(255,0,0,1)]"
          >
            {/* Inner vivid red glow layer */}
            <motion.div
              className="absolute inset-0 rounded-full bg-red-500/70 blur-2xl"
              animate={{
                opacity: [0.9, 1, 0.9],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Text inside orb */}
            <motion.span
              animate={{
                opacity: [1, 0.8, 1],
                textShadow: [
                  "0 0 10px rgba(255,255,255,1)",
                  "0 0 25px rgba(255,0,0,1)",
                  "0 0 10px rgba(255,255,255,1)",
                ],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white text-center font-extrabold text-xs sm:text-sm px-5 z-10 leading-snug"
            >
              Few Slots Left This Month
              <br />
              <span className="text-red-200 font-bold">— Book Now 🚀</span>
            </motion.span>
          </motion.div>

          {/* Tooltip below orb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-3 text-xs font-semibold text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,1)]"
          >
            Tap to Reserve Your Spot
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
