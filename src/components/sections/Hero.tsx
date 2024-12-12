"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "50px 50px",
          y,
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Transform Your Vision Into Reality
          </h1>

          <p className="text-lg md:text-xl mb-8 text-slate-300">
            Create stunning experiences with our modern and innovative
            solutions. Built for the future, designed for you.
          </p>

          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-[1]" />
    </section>
  );
};

export default Hero;
