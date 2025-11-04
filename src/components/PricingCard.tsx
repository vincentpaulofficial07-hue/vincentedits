import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  highlighted?: boolean;
  delay?: number;
  description?: string;
}

export default function PricingCard({
  title,
  price,
  features,
  highlighted = false,
  delay = 0,
  description = "",
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative p-8 rounded-lg border-2 transition-all duration-300 ${
        highlighted
          ? "border-red-600 bg-gradient-to-b from-red-900/20 to-black glow-red"
          : "border-gray-800 bg-[#111111] hover:border-red-600 hover:glow-red"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-black px-4 py-1 text-sm font-bold rounded-full">
          MOST POPULAR
        </div>
      )}

      <h3 className="text-3xl font-bold text-neon-red mb-2">{title}</h3>
      
      {/* Persuasive description */}
      {description && (
        <p className="text-gray-400 text-sm italic mb-4 min-h-[40px]">
          {description}
        </p>
      )}
      
      <div className="mb-6">
        <span className="text-5xl font-bold text-white">${price}</span>
        <span className="text-gray-400 ml-2">/ project</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <span className="text-red-600 mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 font-bold tracking-wider transition-all duration-300 ${
          highlighted
            ? "bg-red-600 text-black hover:bg-red-500"
            : "bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-black"
        }`}
      >
        CHOOSE {title}
      </motion.button>
    </motion.div>
  );
}