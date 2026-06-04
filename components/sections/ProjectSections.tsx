"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import APJATI from "@/src/assets/APJATI.png";
import satuklikgizi from "@/src/assets/satuklikgizi.png";

type Project = {
  id: number;
  title: string;
  desc: string;
  image: any;
  tech: string[];
  contributions: string[];
  demo: string;
  github: string;

  status?: "Completed" | "In Development";
};

const projects: Project[] = [
  {
    id: 1,
    title: "APJATI Official Web",
    status: "Completed",
    desc: "website for APJATI (Association of Indonesian Manpower Service Companies) focused on organizational information, publications, member services, and workforce industry insights.",
    image: APJATI,
    tech: ["Javascript", "PHP", "Tailwind CSS", "MySQL"],
    contributions: [
      "Designed responsive company profile interface",
      "Built publication and news section",
      "Created organization and membership pages",
      "Implemented modern UI and smooth interaction",
    ],
    demo: "https://www.apjati.or.id/",
    github: "#",
  },
  {
    id: 7,
    title: "Satu Klik Gizi",
    status: "In Development",
    desc: "A web-based nutrition monitoring platform designed to connect healthcare workers, parents, and local communities for child growth tracking and nutrition management.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "TypeScript"],
    contributions: [
      "Designed system architecture and database schema",
      "Built role-based authentication and authorization",
      "Developed dashboards for Admin, Healthcare Workers, Parents, and PKK",
      "Implemented child growth and nutrition monitoring features",
      "Created activity management and reporting modules",
      "Integrated PostgreSQL database and backend APIs",
    ],
    image: satuklikgizi,
    demo: "",
    github: "",
  },
];

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
    y: 30,
    filter: "blur(10px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ProjectSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="project" className="w-full bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
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
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-blue-600">03</span>

            <div className="h-[2px] w-10 bg-blue-600"></div>

            <span className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Projects
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Things I’ve <span className="text-blue-600">built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-slate-500">
            Selected projects that showcase my ability to build scalable
            systems, interactive interfaces, and data-driven solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="flex flex-wrap gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeCard}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group flex min-h-[390px] w-full max-w-[335px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm transition hover:shadow-xl"
            >
              {/* Preview */}
              <div className="relative h-[170px] overflow-hidden rounded-[20px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-2 z-20">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                      project.status === "Completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Top */}
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold leading-tight tracking-tight text-slate-900">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {project.desc}
                  </p>

                  {/* Tech */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-xs text-slate-400">View details</span>

                  <button
                    onClick={() => setSelected(project)}
                    className="rounded-full border border-slate-200 px-4 py-2 cursor-pointer text-xs font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
                  scale: 0.95,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 20,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="relative z-10 w-full max-w-[860px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl"
              >
                {/* Glow */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"></div>

                {/* Header */}
                <div className="relative border-b border-slate-100 bg-gradient-to-br from-blue-50 to-white px-6 py-4 md:py-2 md:px-6">
                  <div className="relative z-10 flex items-start justify-between gap-5">
                    {/* Left */}
                    <div>
                      <h2 className="mt-6 md:text-4xl text-2xl font-bold tracking-tight text-slate-900">
                        {selected.title}
                      </h2>

                      <p className="mt-2 max-w-2xl md:text-[15px] text-[13px] leading-7 text-slate-500">
                        {selected.desc}
                      </p>
                    </div>

                    {/* Close */}
                    <button
                      onClick={() => setSelected(null)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-slate-400 transition hover:bg-white hover:text-slate-700"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  <div className="grid md:gap-10 gap-7 md:grid-cols-2">
                    {/* Contribution */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Contribution
                      </h4>

                      <ul className="mt-5 space-y-4">
                        {selected.contributions.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-4 text-slate-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600"></span>

                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Tech Stack
                      </h4>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {selected.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    {selected.demo ? (
                      <a
                        href={selected.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-2xl bg-blue-600 px-6 py-4 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                      >
                        Live Demo ↗
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 cursor-not-allowed rounded-2xl bg-slate-100 px-6 py-4 text-center text-sm font-medium text-slate-400"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
