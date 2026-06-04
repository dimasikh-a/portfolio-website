"use client";

export default function () {
  return (
    <section id="experience" className="w-ful px-6 py-24 md:px-12">
      <div className=" ">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-blue-600">04</span>
            <div className="h-[2px] w-10 bg-blue-600"></div>
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Experience
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-6xl">
            Professional <span className="text-blue-600">experience.</span>
          </h2>
        </div>

        {/* Experience Card */}
        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition">
          {/* Accent Line */}
          <div className="absolute left-0 top-6 bottom-6 w-[4px] rounded-full bg-blue-600"></div>

          <div className="pl-4">
            {/* Top */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-slate-900">
                Freelance Web Developer
              </h3>

              <span className="text-sm text-slate-500">2025 - Present</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
              Worked as a Fullstack Web Developer to build responsive web
              applications, develop backend systems, and improve overall
              application performance. Focused on creating scalable features,
              clean APIs, and modern user experiences.
            </p>

            {/* Contribution */}
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-semibold text-slate-900">
                Contribution
              </h4>

              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-500">
                <li>Developed responsive frontend interfaces</li>

                <li>Built backend APIs and database integration</li>

                <li>Managed authentication and data flow</li>

                <li>Improved application performance and scalability</li>

                <li>Collaborated in team-based development</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  JavaScript
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  Next.js
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  Express.js
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  React.js
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  FastAPI
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  PHP
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  Tailwind CSS
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  Prisma
                </span>
                <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded-md">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
