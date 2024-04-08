'use client';
import { motion } from 'framer-motion';

export function FadeInLeft({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1 // Animation duration
        }
      }}
      // viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
