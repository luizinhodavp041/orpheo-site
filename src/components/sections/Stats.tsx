"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    value: 98,
    symbol: "%",
    label: "Customer Satisfaction",
    color: "bg-blue-500",
  },
  {
    value: 10,
    symbol: "K+",
    label: "Active Users",
    color: "bg-purple-500",
  },
  {
    value: 25,
    symbol: "M",
    label: "Downloads",
    color: "bg-green-500",
  },
  {
    value: 12,
    symbol: "+",
    label: "Years Experience",
    color: "bg-orange-500",
  },
];

const Counter = ({
  value,
  symbol,
  inView,
}: {
  value: number;
  symbol: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(Math.min(Math.floor(stepValue * current), value));
      if (current >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {symbol}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "50px 50px",
          y,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}
              >
                <div className="w-6 h-6 bg-white/20 rounded-full" />
              </div>
              <Counter
                value={stat.value}
                symbol={stat.symbol}
                inView={isInView}
              />
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
