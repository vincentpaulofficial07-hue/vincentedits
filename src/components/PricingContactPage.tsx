import { motion } from "framer-motion";
import { useState } from "react";
import PricingCard from "./PricingCard";

export default function PricingContactPage() {
  const pricingPlans = [
    {
      title: "IGNITE",
      price: 149,
      features: [
        "For creators who need clean, engaging edits for mid-length videos — a perfect balance of speed and storytelling.",
        "5–15 minutes of edited content",
        "Color correction & stabilization",
        "Basic text, transitions & pacing",
        "Royalty-free background music",
        "1 revision round",
        "2–4 day delivery",
        "Optional add-on: Convert key clips into short-form reels (+$30)",
        "❌ No motion graphics",
        "❌ No detailed sound design",
      ],
    },
    {
      title: "ELEVATE",
      price: 279,
      highlighted: true,
      features: [
        "For growing creators and small brands who want storytelling, cinematic polish, and multiple formats to boost reach.",
        "20–30 minutes of edited content",
        "Advanced color grading & smooth pacing",
        "Custom transitions & animated titles",
        "Sound design & balanced audio",
        "2 revision rounds",
        "3–5 day delivery",
        "Bonus: 2 short-form edits (Reels or Shorts versions)",
        "❌ No 3D effects or heavy motion graphics",
      ],
    },
    {
      title: "DOMINATE",
      price: 499,
      features: [
        "For serious projects needing long-form storytelling, consistent visuals, and creative flexibility.",
        "35+ minutes of edited content (custom scope)",
        "Full cinematic grading & effects",
        "Tailored storytelling structure",
        "Sound design & professional audio mixing",
        "Logo intro/outro animation (basic)",
        "3 revision rounds",
        "Priority delivery & direct communication",
        "Includes up to 4 short-form clips repurposed from main video",
      ],
    },
  ];

  const achievements = [
    "3× watch-time boost through cinematic pacing.",
    "Videos that make people stop scrolling.",
    "Emotional storytelling that builds loyal followers.",
    "Fast delivery. Zero compromise on quality.",
  ];

  return (
    <section className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-red-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-red-500 drop-shadow-[0_0_30px_#ff0000cc] mb-4">
            PRICING PACKAGES
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-300 text-lg md:text-xl mb-2 max-w-3xl mx-auto leading-relaxed"
          >
            Every second you wait, someone else's video goes viral.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-red-500 text-xl md:text-2xl font-bold mb-16"
          >
            Choose speed. Choose perfection. Choose your universe.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.title} {...plan} delay={index * 0.2} />
            ))}
          </div>
        </motion.div>

        {/* What My Edits Achieve Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 drop-shadow-[0_0_30px_#ff0000cc] mb-12">
            What My Edits Achieve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative p-8 bg-gradient-to-br from-red-900/20 to-black border-2 border-red-600/50 rounded-lg glow-red hover:border-red-600 transition-all duration-300"
              >
                <div className="absolute top-4 left-4 text-6xl font-bold text-red-600/20">
                  {index + 1}
                </div>
                <p className="relative z-10 text-gray-200 text-lg md:text-xl font-medium leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 drop-shadow-[0_0_30px_#ff0000cc] mb-8">
            My Vision. Your Impact.
          </h2>
          <div className="space-y-4 text-gray-300 text-lg md:text-xl leading-relaxed">
            <p>
              Every frame I cut, color, and sync is driven by precision and
              purpose.
            </p>
            <p className="text-red-500 font-semibold">
              I don't just edit — I amplify what makes you unforgettable.
            </p>
            <p className="text-2xl font-bold text-white">
              This is storytelling at speed.
            </p>
          </div>
        </motion.div>

        {/* CONTACT SECTION */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 drop-shadow-[0_0_30px_#ff0000cc] mb-8">
            GET IN TOUCH
          </h2>
          <ContactBox />
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-gray-500 border-t border-gray-800 pt-8"
        >
          <p>© 2024 Vincent Editing Universe. All rights reserved.</p>
          <p className="text-sm text-gray-600 mt-2 italic">
            Built for creators who move fast and dream bigger.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}

/* -----------------------------
   CONTACT BOX COMPONENT
----------------------------- */
function ContactBox() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "494e34e3-ba16-4113-8607-3acb8537c55f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setIsSuccess(true);
      e.currentTarget.reset();
    } else {
      alert("Something went wrong. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto bg-[#0a0a0a] border border-red-700 rounded-2xl p-8 shadow-[0_0_25px_#ff0000cc] text-left"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-4 text-center drop-shadow-[0_0_20px_#ff0000cc]">
        Tell me about your next project
      </h3>
      <p className="text-gray-400 mb-8 text-center">
        Let’s create something cinematic together.
      </p>

      {isSuccess ? (
        <p className="text-green-400 font-semibold text-center">
          ✅ Message sent successfully! I’ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-black text-white border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-black text-white border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="project_type"
            placeholder="Project Type (e.g. Travel vlog, fitness, Documentary)"
            className="w-full p-3 bg-black text-white border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget Range (optional)"
            className="w-full p-3 bg-black text-white border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full p-3 bg-black text-white border border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 font-bold text-lg text-black bg-red-500 rounded-lg transition-all shadow-[0_0_25px_#ff0000cc] hover:shadow-[0_0_35px_#ff0000cc]"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </motion.div>
  );
}
