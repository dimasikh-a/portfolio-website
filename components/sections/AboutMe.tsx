"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import AboutTabs from "../AboutTabs";

export default function AboutMe() {
  return (
    <section id="about" className="w-full px-6 md:py-20 pb-5 pt-20 md:px-12">
      <motion.div {...fadeUp}></motion.div>
      <div className="mx-auto grid max-w-7xl items-start gap-20 lg:grid-cols-[1fr_1fr]">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Heading */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-lg font-semibold text-blue-600">02</span>

            <div className="h-[2px] w-10 bg-blue-600"></div>

            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              About Me
            </span>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Get to know <br />
              <span className="text-blue-600">who I am.</span>
            </h2>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-slate-500 md:mt-7 md:text-lg md:leading-9">
              I’m Dimas Ikhsan Ali, a Fullstack Developer, Data Analyst, and Data Engineer
              passionate about building scalable web applications, analyzing
              data, and creating systems that solve real-world problems.
            </p>

            {/* Skills */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Core Focus & Supporting Skills
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600">
                  Fullstack Development
                </span>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600">
                  Data Engineering
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
                  PostgreSQL
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
                  REST API
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
                  Data Visualization
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
                  Python
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
                  ETL Pipeline
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
                  Problem Solving
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            amount: 0.2,
          }}
          className="relative"
        >
          {/* Top Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Achievement & Certifications
            </span>

            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>

          {/* Tabs */}
          <div className="p-0 md:p-0">
            <AboutTabs />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
