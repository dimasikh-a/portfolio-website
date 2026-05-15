"use client";

import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function TechincalSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            amount: 0.2,
          }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Technical Capabilities
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">
            Core focus & <span className="text-blue-600">skills.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            amount: 0.2,
          }}
          className="grid grid-cols-2 border border-slate-200 md:grid-cols-4"
        >
          {/* Item 1 */}
          <motion.div
            variants={fadeCard}
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group relative overflow-hidden border border-slate-200 p-6 transition hover:bg-blue-600"
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

            {/* Number */}
            <span className="relative z-10 text-6xl font-bold text-slate-200 transition group-hover:text-white/20">
              01
            </span>

            {/* Title */}
            <h3 className="relative z-10 mt-6 text-lg font-semibold text-slate-900 transition group-hover:text-white">
              Data Analysis
            </h3>

            {/* Desc */}
            <p className="relative z-10 mt-2 text-sm leading-7 text-slate-500 transition group-hover:text-white/80">
              Transforming data into insights.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            variants={fadeCard}
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group relative overflow-hidden border border-slate-200 p-6 transition hover:bg-blue-600"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

            <span className="relative z-10 text-6xl font-bold text-slate-200 transition group-hover:text-white/20">
              02
            </span>

            <h3 className="relative z-10 mt-6 text-lg font-semibold text-slate-900 transition group-hover:text-white">
              Backend Systems
            </h3>

            <p className="relative z-10 mt-2 text-sm leading-7 text-slate-500 transition group-hover:text-white/80">
              Building scalable APIs and systems.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            variants={fadeCard}
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group relative overflow-hidden border border-slate-200 p-6 transition hover:bg-blue-600"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

            <span className="relative z-10 text-6xl font-bold text-slate-200 transition group-hover:text-white/20">
              03
            </span>

            <h3 className="relative z-10 mt-6 text-lg font-semibold text-slate-900 transition group-hover:text-white">
              Web Development
            </h3>

            <p className="relative z-10 mt-2 text-sm leading-7 text-slate-500 transition group-hover:text-white/80">
              Developing scalable web applications with responsive interfaces,
              backend systems, and clean user experiences.
            </p>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            variants={fadeCard}
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group relative overflow-hidden border border-slate-200 p-6 transition hover:bg-blue-600"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

            <span className="relative z-10 text-6xl font-bold text-slate-200 transition group-hover:text-white/20">
              04
            </span>

            <h3 className="relative z-10 mt-6 text-lg font-semibold text-slate-900 transition group-hover:text-white">
              Data Engineering
            </h3>

            <p className="relative z-10 mt-2 text-sm leading-7 text-slate-500 transition group-hover:text-white/80">
              Building scalable data pipelines and managing structured data
              workflows.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
