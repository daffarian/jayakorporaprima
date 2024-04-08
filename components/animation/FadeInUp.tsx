'use client'
import { motion } from 'framer-motion';

export function FadeInUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1 // Animation duration
        }
      }}
      // viewport={{ once: true }}
    >{children}</motion.div>
  );
}