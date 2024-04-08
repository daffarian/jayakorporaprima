'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { inView } from 'framer-motion';

export default function CountAnimation({number}:{number:number}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, number, {
      duration: 2
    });
  }, [inView]);

  return <motion.h1>{rounded}</motion.h1>;
}
