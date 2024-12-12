"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    title: "Product One",
    description: "Revolutionary design meets functionality",
    imageUrl: "/api/placeholder/600/400",
    color: "bg-blue-100",
  },
  {
    title: "Product Two",
    description: "Innovation at your fingertips",
    imageUrl: "/api/placeholder/600/400",
    color: "bg-purple-100",
  },
  {
    title: "Product Three",
    description: "The future of technology",
    imageUrl: "/api/placeholder/600/400",
    color: "bg-green-100",
  },
];

const Showcase = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-slate-600">
            Explore our latest innovations designed to transform your
            experience.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-x-hidden py-8">
          <motion.div className="flex gap-6 flex-nowrap" style={{ x }}>
            {/* Duplicate products for infinite scroll effect */}
            {[...products, ...products, ...products].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-[300px] flex-shrink-0"
              >
                <Card
                  className={`h-full ${product.color} hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="p-6">
                    <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-slate-600">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </section>
  );
};

export default Showcase;
