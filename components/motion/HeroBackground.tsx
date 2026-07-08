"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-oz-gold/12 blur-3xl"
        animate={{ y: [0, 18, 0], opacity: [0.7, 0.95, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 right-[-4rem] h-72 w-72 rounded-full bg-white/7 blur-3xl"
        animate={{ x: [0, -18, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-[-6rem] h-64 w-64 rounded-full bg-oz-gold/10 blur-3xl"
        animate={{ x: [0, 20, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

