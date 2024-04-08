'use client';
import { motion } from 'framer-motion';

export function TypeAnimation({ children }: { children: string }) {
  const arrayText = children.split(' ');

  return (
    <>
      {arrayText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: i / 10
            }
          }}
          // viewport={{ once: true }}
          key={i}
        >
          {el}{' '}
        </motion.span>
      ))}
    </>
  );
}
