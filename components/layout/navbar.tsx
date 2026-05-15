"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "About",
    id: "about",
  },

  {
    label: "Project",
    id: "project",
  },

  {
    label: "Experience",
    id: "experience",
  },

  {
    label: "Skill",
    id: "skill",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // 🔥 Jika di hero / top page → reset active
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      const sections = navItems.map((item) => document.getElementById(item.id));

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* ================= Desktop ================= */}
      <div className="mx-[150px] my-5 hidden items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.04),0_12px_30px_rgba(37,99,235,0.06)] md:flex">
        {/* Logo */}
        <a
          href="#home"
          className="font-geist text-2xl font-bold tracking-tight text-slate-900"
        >
          DIA<span className="text-[#2563EB]">.</span>
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative pb-2 text-[14px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#2563EB]"
                    : "text-[#636363] hover:text-slate-900"
                }`}
              >
                {item.label}

                {/* Active Line */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#2563EB] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className="px-4 pt-4 md:hidden">
        {/* Mobile Navbar */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.04),0_12px_30px_rgba(37,99,235,0.06)]">
          {/* Logo */}
          <a
            href="#home"
            className="font-geist text-xl font-bold tracking-tight text-slate-900"
          >
            DIA<span className="text-[#2563EB]">.</span>
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setOpenMenu(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:scale-105 hover:bg-slate-50"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* ================= Overlay ================= */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300 ${
          openMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* ================= Mobile Drawer ================= */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
          <h2 className="text-lg font-semibold text-slate-900">Menu</h2>

          <button
            onClick={() => setOpenMenu(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-2 p-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpenMenu(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* CTA */}
          <a
            href="mailto:dimasihsali@gmail.com?subject=Project%20Inquiry"
            className="mt-5 flex items-center justify-center rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
