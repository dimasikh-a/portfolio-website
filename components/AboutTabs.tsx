"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dsarea from "@/src/assets/dsarea.png";
import myskill from "@/src/assets/myskill.png";

const achievements = [
  {
    title: "Duta Program Studi Sistem Informasi Universitas Nusa Mandiri 2025",
    desc: "Representing the Information Systems program in academic and non-academic activities.",
    pdf: "/certificates/Certification.pdf",
  },
];

const certifications = [
  {
    logo: dsarea,
    title: "DATA ENGINEER",
    issuer: "DSArea",
    desc: "Focused on building data pipelines, automating workflows, and managing scalable data systems using modern data engineering tools and concepts.",
    learned: [
      "ETL Pipeline",
      "Apache Airflow",
      "Apache Spark",
      "Data Warehouse",
      "Data Modeling",
      "SQL & NoSQL",
    ],

    stack: ["Python", "PostgreSQL", "Airflow", "Spark"],
    pdf: "/certificates/Sertifikat_Data_Engineer.pdf",
  },

  {
    logo: myskill,
    title: "DATA ANALYST",
    issuer: "MySkill",
    desc: "Learned core data analysis skills including SQL, Python, statistics, data validation, and data visualization for business analysis.",

    learned: [
      "SQL Analysis",
      "Python for Data Analysis",
      "Basic Statistics",
      "Data Validation",
      "Problem Solving",
      "Data Visualization",
    ],

    stack: ["Python", "SQL", "PostgreSQL", "Excel"],

    pdf: "/certificates/Serifikat_Data_analysis.pdf",
  },
  {
    logo: myskill,
    title: "UI/UX RESEARCH AND DESIGN",
    issuer: "MySkill",
    desc: "Learned the fundamentals of UI/UX design, including user research, wireframing, prototyping, and usability testing.",

    learned: [
      "User Research",
      "Wireframing",
      "Information Architecture",
      "Figma",
      "Prototyping",
      "Usability Testing",
    ],

    stack: ["Figma", "UI Design", "UX Research", "Prototyping"],
    pdf: "/certificates/Sertifikat_UI_UX_Design.pdf",
  },
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<"achievement" | "certification">(
    "achievement",
  );

  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="mt-10">
      {/* Tabs */}
      <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
        {/* Achievement */}
        <button
          onClick={() => setActiveTab("achievement")}
          className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition ${
            activeTab === "achievement"
              ? "text-blue-600"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          {activeTab === "achievement" && (
            <motion.div
              layoutId="tab-background"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.5,
              }}
              className="absolute inset-0 rounded-xl bg-blue-50"
            />
          )}

          <span className="relative z-10">Achievement</span>
        </button>

        {/* Certification */}
        <button
          onClick={() => setActiveTab("certification")}
          className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition ${
            activeTab === "certification"
              ? "text-blue-600"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          {activeTab === "certification" && (
            <motion.div
              layoutId="tab-background"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.5,
              }}
              className="absolute inset-0 rounded-xl bg-blue-50"
            />
          )}

          <span className="relative z-10">Certifications</span>
        </button>
      </div>

      {/* Content */}
      <div className="relative mt-8 min-h-[420px]">
        <AnimatePresence mode="wait">
          {/* Achievement */}
          {activeTab === "achievement" && (
            <motion.div
              key="achievement"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="flex flex-col"
            >
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                  className="border-b border-slate-200 py-6 transition hover:border-blue-200"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    {/* Left */}
                    <div className="flex items-start gap-4">
                      <div className="mt-2 h-3 w-3 rounded-full bg-blue-600"></div>

                      <div className="max-w-xl">
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600">
                          Achievement
                        </span>

                        <h4 className="mt-2 text-xl font-semibold leading-tight text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href={item.pdf}
                      target="_blank"
                      className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      View PDF
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certification */}
          {activeTab === "certification" && (
            <motion.div
              key="certification"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="flex flex-col"
            >
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                  className="group border-b border-slate-200 py-6 transition hover:border-blue-200"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white transition group-hover:border-blue-200">
                        <img
                          src={item.logo.src}
                          alt={item.title}
                          className="h-8 w-8 object-contain"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600">
                          Certification
                        </span>

                        <h4 className="mt-2 text-lg font-semibold leading-tight text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex shrink-0 items-center gap-3">
                      <button
                        onClick={() => setSelected(item)}
                        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      >
                        View Detail
                      </button>

                      <a
                        href={item.pdf}
                        target="_blank"
                        className="rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-700"
                      >
                        View PDF
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />

            {/* Modal */}
            <AnimatePresence>
              {selected && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="fixed inset-0 z-[999] flex items-center justify-center p-4"
                >
                  {/* Backdrop */}
                  <div
                    onClick={() => setSelected(null)}
                    className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                  />

                  {/* Modal */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 20,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="relative w-full max-w-[860px] overflow-hidden rounded-[28px] border border-white/40 bg-white shadow-2xl"
                  >
                    {/* Glow */}
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"></div>

                    {/* Header */}
                    <div className="relative border-b border-slate-100 bg-gradient-to-br from-blue-50 to-white p-5 md:p-6">
                      <div className="relative z-10 flex items-start justify-between gap-5">
                        {/* Left */}
                        <div className="flex items-center gap-4">
                          {/* Logo */}
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-white/60 bg-white/80 shadow-sm backdrop-blur">
                            <img
                              src={selected.logo.src}
                              alt={selected.title}
                              className="h-8 w-8 object-contain"
                            />
                          </div>

                          {/* Content */}
                          <div>
                            <span className="rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-blue-600">
                              Certification
                            </span>

                            <h2 className="mt-3 text-[40px] font-bold leading-none tracking-tight text-slate-900">
                              {selected.title}
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                              {selected.issuer}
                            </p>
                          </div>
                        </div>

                        {/* Close */}
                        <button
                          onClick={() => setSelected(null)}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-400 transition hover:border-slate-300 hover:bg-white hover:text-slate-700"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="relative p-5 md:p-6">
                      {/* Overview */}
                      <div>
                        <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Overview
                        </h3>

                        <p className="mt-4 max-w-3xl text-[15px] leading-[1.9] text-slate-600">
                          {selected.desc}
                        </p>
                      </div>

                      {/* Grid */}
                      <div className="mt-7 grid gap-8 md:grid-cols-2">
                        {/* Learned */}
                        <div>
                          <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            What I Learned
                          </h3>

                          <div className="mt-4 flex flex-wrap gap-2.5">
                            {selected.learned.map((item: string, i: number) => (
                              <span
                                key={i}
                                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Stack */}
                        <div>
                          <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Tech Stack
                          </h3>

                          <div className="mt-4 flex flex-wrap gap-2.5">
                            {selected.stack.map((item: string, i: number) => (
                              <span
                                key={i}
                                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-7 flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
                        <button
                          onClick={() => setSelected(null)}
                          className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                        >
                          Close
                        </button>

                        <a
                          href={selected.pdf}
                          target="_blank"
                          className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                          Open Certificate
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
