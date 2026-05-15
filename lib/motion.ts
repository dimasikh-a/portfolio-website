import { Variants } from "framer-motion";

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },

  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },

  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  },

  viewport: {
    once: false,
    amount:0.2
  },
};

export const staggerContainer:Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeCard: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};