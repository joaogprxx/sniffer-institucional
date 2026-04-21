import type { Variants, Transition } from 'motion/react';

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};

export const pageTransition: Transition = {
  duration: 0.26,
  ease: [0.25, 0.46, 0.45, 0.94],
};
