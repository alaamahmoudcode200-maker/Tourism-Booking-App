'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInFromRight({ children, delay = 0 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
    >
      {children}
    </motion.div>
  );
}