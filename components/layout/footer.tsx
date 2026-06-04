"use client"

import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-20 md:px-12">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Top */}
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Let’s connect
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Have an idea,
              <br />
              let’s build it
              <span className="text-blue-600"> together.</span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-500">
              I’m open to freelance opportunities, collaborations,
              and discussions about technology, backend systems,
              and data-driven solutions.
            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">

            {/* Contact */}
            <div className="space-y-5">

              <a
                href="mailto:dimasihsali@gmail.com"
                className="group flex items-center justify-between border-b border-slate-200 pb-4 transition"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />

                  <span className="text-slate-700">
                    Email
                  </span>
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <a
                href="https://www.linkedin.com/in/dimasikhsanali/"
                className="group flex items-center justify-between border-b border-slate-200 pb-4 transition"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin className="h-5 w-5 text-blue-600" />

                  <span className="text-slate-700">
                    LinkedIn
                  </span>
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/dimasikh-a"
                className="group flex items-center justify-between border-b border-slate-200 pb-4 transition"
              >
                <div className="flex items-center gap-3">
                  <FaGithub className="h-5 w-5 text-blue-600" />

                  <span className="text-slate-700">
                    GitHub
                  </span>
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <a
                href="#"
                className="group flex items-center justify-between border-b border-slate-200 pb-4 transition"
              >
                <div className="flex items-center gap-3">
                  <FaInstagram className="h-5 w-5 text-blue-600" />

                  <span className="text-slate-700">
                    Instagram
                  </span>
                </div>

                <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center">

          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Dimas Ikhsan Ali
            </h3>

          </div>

          <p className="text-sm text-slate-400">
            © 2026 All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}