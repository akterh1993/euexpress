"use client";

import React, { Suspense, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Spinner component
function Spinner() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

interface LazyLoadSectionProps {
  children: ReactNode;
  delay?: number; // optional delay for staggering
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
  };

  return (
    <div ref={ref}>
      <AnimatePresence>
        {inView && (
          <Suspense fallback={<Spinner />}>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              {children}
            </motion.div>
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LazyLoadSection;
