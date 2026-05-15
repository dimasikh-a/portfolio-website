"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="home" className="justify-center items-center flex flex-col z-10 px-4 md:px-0 h-[600px]">
      <p className="font-jetbrains-mono text-blue-600 text-[13px] md:text-l">
        // HELLO, WORLD!
      </p>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-7xl font-bold"
      >
        DIMAS
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="md:text-7xl text-5xl pt-0.5 font-bold text-blue-600"
      >
        IKHSAN ALI{" "}
      </motion.h1>
      <div className="inline-flex items-center gap-4 md:rounded-2xl rounded-xl border border-slate-200 bg-white md:px-6 md:py-3 py-1.5 px-4 mt-5 shadow-sm">
        <span className="md:text-sm text-[10px] font-medium text-slate-500">
          Fullstack Developer
        </span>

        <span className="md:h-1.5 md:w-1.5 w-1 h-1 rounded-full bg-blue-600"></span>

        <span className="md:text-sm text-[10px] font-medium text-slate-500">
          Data Analyst
        </span>

        <span className="md:h-1.5 md:w-1.5 w-1 h-1 rounded-full bg-blue-600"></span>

        <span className="md:text-sm text-[10px] font-medium text-slate-500">
          Data Engineer
        </span>
      </div>
      <div className="flex flex-col items-center text-center space-y-8 md:mt-6 mt-4">
        {/* Description Text */}
        <div className="space-y-1 flex items-center md:w-[50%] px-1 md:px-0">
          <p className="md:text-l text-center text-[14px] font-medium text-slate-500">
            Building scalable web applications, developing backend systems, and
            working with data to create efficient, responsive, and user-focused
            digital experiences.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
 <a
  href="mailto:dimasihsali@gmail.com?subject=Project%20Inquiry"
  className="inline-flex items-center gap-3 rounded-xl border border-blue-600 bg-blue-600 px-5 py-3 text-[12px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md md:px-8 md:py-4 md:text-sm"
>
  Contact Me

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7M17 7H9M17 7V15"
    />
  </svg>
</a>
        </div>
      </div>
    </section>
  );
}
