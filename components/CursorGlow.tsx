"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        animate={{
          x: pos.x - 100,
          y: pos.y - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className="absolute h-[200px] w-[200px] rounded-full bg-blue-500/30 blur-[70px]"
      />
    </div>
  );
}