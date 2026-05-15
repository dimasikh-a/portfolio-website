"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPandas,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import { BarChart3 } from "lucide-react";

export default function StackSection() {
  return (
    <section id="skill" className="w-full bg-[#f8fafc] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT */}
        <div className="lg:sticky lg:top-32 h-fit">

          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-blue-600">
              05
            </span>

            <div className="h-[2px] w-10 bg-blue-600"></div>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Stack
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
            Technical
            <br />
            <span className="text-blue-600">
              capabilities.
            </span>
          </h2>

          <p className="mt-8 max-w-md text-[15px] leading-8 text-slate-500">
            Technologies and tools I use to build scalable systems,
            create modern digital experiences, and transform data
            into meaningful insights.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-14">

          {/* Backend */}
          <div className="group border-b border-slate-200 pb-12">

            <div className="flex items-start justify-between gap-6">

              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 transition group-hover:text-blue-600">
                  Backend Systems
                </h3>

                <p className="mt-4 max-w-xl text-[15px] leading-8 text-slate-500">
                  Designing scalable backend architecture, building APIs,
                  and managing databases for modern web applications.
                </p>
              </div>

              <span className="hidden text-6xl font-bold text-slate-100 md:block">
                01
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="stack-item">
                <SiNodedotjs />
                Node.js
              </div>

              <div className="stack-item">
                <SiExpress />
                Express
              </div>

              <div className="stack-item">
                <SiPostgresql />
                PostgreSQL
              </div>

              <div className="stack-item">
                <SiPrisma />
                Prisma
              </div>

            </div>
          </div>

          {/* Data */}
          <div className="group border-b border-slate-200 pb-12">

            <div className="flex items-start justify-between gap-6">

              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 transition group-hover:text-blue-600">
                  Data & Analytics
                </h3>

                <p className="mt-4 max-w-xl text-[15px] leading-8 text-slate-500">
                  Processing, analyzing, and visualizing data to generate
                  actionable insights and support decision making.
                </p>
              </div>

              <span className="hidden text-6xl font-bold text-slate-100 md:block">
                02
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="stack-item">
                <SiPython />
                Python
              </div>

              <div className="stack-item">
                <SiPandas />
                Pandas
              </div>

              <div className="stack-item">
                <SiPostgresql />
                SQL
              </div>

              <div className="stack-item">
                <BarChart3 className="h-4 w-4" />
                Power BI
              </div>

            </div>
          </div>

          {/* Frontend */}
          <div className="group border-b border-slate-200 pb-12">

            <div className="flex items-start justify-between gap-6">

              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 transition group-hover:text-blue-600">
                  Frontend Development
                </h3>

                <p className="mt-4 max-w-xl text-[15px] leading-8 text-slate-500">
                  Building responsive interfaces with modern UI principles,
                  animations, and performance-focused development.
                </p>
              </div>

              <span className="hidden text-6xl font-bold text-slate-100 md:block">
                03
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="stack-item">
                <SiReact />
                React
              </div>

              <div className="stack-item">
                <SiNextdotjs />
                Next.js
              </div>

              <div className="stack-item">
                <SiTailwindcss />
                Tailwind
              </div>

              <div className="stack-item">
                <SiFramer />
                Framer Motion
              </div>

            </div>
          </div>

          {/* Workflow */}
          <div className="group pb-4">

            <div className="flex items-start justify-between gap-6">

              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 transition group-hover:text-blue-600">
                  Workflow & Tools
                </h3>

                <p className="mt-4 max-w-xl text-[15px] leading-8 text-slate-500">
                  Supporting tools and platforms that improve development
                  workflow, collaboration, and deployment processes.
                </p>
              </div>

              <span className="hidden text-6xl font-bold text-slate-100 md:block">
                04
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="stack-item">
                <SiGit />
                Git
              </div>

              <div className="stack-item">
                <SiGithub />
                GitHub
              </div>

              <div className="stack-item">
                <SiPostman />
                Postman
              </div>

              <div className="stack-item">
                <SiVercel />
                Vercel
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}